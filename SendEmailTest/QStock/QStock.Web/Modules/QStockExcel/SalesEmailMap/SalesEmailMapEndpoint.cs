
namespace QStock.QStockExcel.Endpoints
{
    using OfficeOpenXml;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Data;
    using System.Web.Mvc;
    using System.Net.Mail;
    using System.Configuration;
    using System.Net.Configuration;
    using System.Reflection;
    using System.Linq;
    using QStockExcel.Repositories;
    using QStockExcel.Entities;
    using Common;
    using MyRepository = Repositories.SalesEmailMapRepository;
    using MyRow = Entities.SalesEmailMapRow;

    [RoutePrefix("Services/QStockExcel/SalesEmailMap"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class SalesEmailMapController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
        public ExcelImportResponse EmailImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            string sql = "truncate table [QStock_LOG].[dbo].[SalesEmailMap] ";
            uow.Connection.Execute(sql);

            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");

            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();

            var worksheet = ep.Workbook.Worksheets[1];
            for (var row = 2; row <= worksheet.Dimension.Rows; row++)
            {
                try
                {
                    var SalesEmail = new SalesEmailMapRow()
                    {
                        SalesEmployee = Convert.ToString(worksheet.Cells[row, 1].Value ?? ""),
                        SalesEmail = Convert.ToString(worksheet.Cells[row, 2].Value ?? ""),
                    };

                    // 创建新数据
                    new SalesEmailMapRepository().Create(uow, new SaveRequest<MyRow>
                    {
                        Entity = SalesEmail
                    });

                    response.Inserted = response.Inserted + 1;
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }
            return response;
        }

        
        public SendEmailResponse getEmailData(IUnitOfWork uow, SendEmailRequest request)
        {
            string monthYear = DateTime.Now.ToString("MMMM, yyyy");
            var response = new SendEmailResponse();
            response.ErrorList = new List<string>();
            //不继续则判断本月是否已发送
            if (!request.isContinue)
            {
                string latestMonthSql = @"SELECT TOP 1 [InsertDate]
                    FROM QStock_LOG.dbo.Mail where [ModuleName]='QStock'
                    ORDER BY[MailId] DESC; ";
                var mothResult=uow.Connection.Query(latestMonthSql).ToList();
                if (mothResult.Count > 0)
                {
                    DateTime latestMonth = Convert.ToDateTime(mothResult[0].InsertDate);
                    if (latestMonth.Month == DateTime.Now.Month)
                    {
                        response.SendThisMonth=true;
                        return response;
                    }
                }
                return response;
            }

            //获取符合条件的email
            string sqlEmail = @"
            SELECT DISTINCT oo.SalesEmployeename,em.SalesEmployee ,em.SalesEmail
            FROM [QStock_LOG].[dbo].[SalesEmailMap] em
            INNER JOIN [QStock_LOG].[dbo].[OOH] oo ON em.SalesEmployee = oo.SalesEmployee
            LEFT JOIN [QStock_LOG].[dbo].[QStockList] QStockList ON oo.Material = QStockList.Material
            WHERE QStockList.Material IS NOT NULL;
            ";
            IEnumerable<dynamic> emailList = uow.Connection.Query(sqlEmail);

            //超两年，建立dic，放入oohandqstock相关内容
            string subjectOver2 = "Monthly report for over two years blocked material list_" + monthYear + "超两年库存物料清单";
            string isOverTwoYears = "TwoYears";
            string getBody = $@"select [ContentBody]
              from [QStock_LOG].[dbo].[EmailBody]
              where [ContentType]='{isOverTwoYears}'";
            string bodyOver2 = Convert.ToString(uow.Connection.Query(getBody).ToList()[0].ContentBody);
            foreach (var item in emailList)
            {
                string email = item.SalesEmail;
                string salesId = item.SalesEmployee;
                string salesName = item.SalesEmployeename;
                string  bodyOver2content=bodyOver2.Replace("[DisplayName]", salesName);
                string sqlOoh = $@"SELECT [SalesOrder],[SalesOrderItem],[Material],[MaterialDescription],[ItemCategory],[SalesEmployee],[SalesEmployeename],
                    [DCBusinessUnit],[SoldtoParty],[SoldtoPartyname] ,[CustPONo],[CustomerMaterial],FORMAT([CalendarDay], 'yyyy-MM-dd') as [CalendarDay],
                    FORMAT([FirstRequestedDate], 'yyyy-MM-dd') as [FirstRequestedDate],FORMAT([SOCreatedOn], 'yyyy-MM-dd') as [SOCreatedOn],
                    [RFQty],[RFNetvalue] FROM [QStock_LOG].[dbo].[OOH] 
                    WHERE [SalesEmployee] = '{salesId}' and [ItemCategory] not in ('YPC','YMC','YAC','YCCP') and [Material] in (  
					select distinct [Material] from [QStock_LOG].[dbo].[QStockList] where [IsOverTwoYears]=1)";
                IEnumerable<OOHEntity> oohResult = uow.Connection.Query<OOHEntity>(sqlOoh);
                List<OOHEntity> oohList = oohResult.ToList();

                var materials = oohResult.Select(ooh => ooh.Material);
                if (materials.ToList().Count > 0)
                {
                    //string sqlQstock = $@"select [Material],[Plant],[StockCategory],[AvailableStock] ,[Reason] 
                    //from [QStock_LOG].[dbo].[QStockList]
                    //WHERE Material IN ({string.Join(",", materials.Select(m => $"'{m}'"))}) 
                    //and IsOverTwoYears=1";
                    //IEnumerable<QStockEntity> qstockResult = uow.Connection.Query<QStockEntity>(sqlQstock);
                    //List<QStockEntity> qstockList = qstockResult.ToList();
                    //attachExcel(email, new { OOH = oohList, QStock = qstockList }, subjectOver2, bodyOver2content, response);
                    attachExcel(email, new { OOH = oohList}, subjectOver2, bodyOver2content, response);
                }
                    
            }

            //未超两年
            string subjectBelow2 = "Monthly OOH report for QI blocked material list_" + monthYear + "QI冻结物料清单";
            isOverTwoYears = "Other";
            getBody = $@"select [ContentBody]
              from [QStock_LOG].[dbo].[EmailBody]
              where [ContentType]='{isOverTwoYears}'";
            string bodyBelow2 = Convert.ToString(uow.Connection.Query(getBody).ToList()[0].ContentBody);
            foreach (var item in emailList)
            {
                string email = item.SalesEmail;
                string salesId = item.SalesEmployee;
                string salesName = item.SalesEmployeename;
                string bodyBelow2Content =bodyBelow2.Replace("[DisplayName]", salesName);
                string sqlOoh = $@"SELECT [SalesOrder],[SalesOrderItem],[Material],[MaterialDescription],[ItemCategory],[SalesEmployee],[SalesEmployeename],
                    [DCBusinessUnit],[SoldtoParty],[SoldtoPartyname] ,[CustPONo],[CustomerMaterial],[CustomerMaterial],FORMAT([CalendarDay], 'yyyy-MM-dd') as [CalendarDay],
                    FORMAT([FirstRequestedDate], 'yyyy-MM-dd') as [FirstRequestedDate],FORMAT([SOCreatedOn], 'yyyy-MM-dd') as [SOCreatedOn],
                    [RFQty],[RFNetvalue] FROM [QStock_LOG].[dbo].[OOH] 
                    WHERE [SalesEmployee] = '{salesId}' and [Material] in (  
					select distinct [Material] from [QStock_LOG].[dbo].[QStockList] where [IsOverTwoYears]=0)";
                IEnumerable<OOHEntity> oohResult = uow.Connection.Query<OOHEntity>(sqlOoh);
                List<OOHEntity> oohList = oohResult.ToList();

                var materials = oohResult.Select(ooh => ooh.Material);
                if (materials.ToList().Count>0)
                {
                    //string sqlQstock = $@"select [Material],[Plant],[StockCategory],[AvailableStock] ,[Reason] 
                    //from [QStock_LOG].[dbo].[QStockList]
                    //WHERE Material IN ({string.Join(",", materials.Select(m => $"'{m}'"))}) 
                    //and IsOverTwoYears=0";
                    //IEnumerable<QStockEntity> qstockResult = uow.Connection.Query<QStockEntity>(sqlQstock);
                    //List<QStockEntity> qstockList = qstockResult.ToList();
                    //attachExcel(email, new { OOH = oohList, QStock = qstockList }, subjectBelow2, bodyBelow2Content, response);
                    attachExcel(email, new { OOH = oohList}, subjectBelow2, bodyBelow2Content, response);
                }
            }
            return response;

        }

        public void attachExcel(string email,object emailBody,string subject,string body, SendEmailResponse response)
        {
            dynamic emailbody = emailBody;
            var oohList = (List<OOHEntity>)emailbody.OOH;
            //var qstockList = (List<QStockEntity>)emailbody.QStock;
            using (var package=new ExcelPackage())
            {
                var sheet1 = package.Workbook.Worksheets.Add("Sheet1");
                sheet1.Cells.LoadFromCollection(oohList, true);

                //var sheet2 = package.Workbook.Worksheets.Add("Sheet2");
                //sheet2.Cells.LoadFromCollection(qstockList, true);
                //MemoryStream ms = new MemoryStream(package.GetAsByteArray());
                var smtpSection = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
                string fromAddress = smtpSection.From;                
                //ms.Position = 0;
                MailMessageModel mail = new MailMessageModel()
                {
                    Subject = subject,
                    Body = body,
                    IsBodyHtml=true
                };
                mail.CC.Add("l.han_sh@boschrexroth.com.cn");
                mail.CC.Add("monica.zhao@boschrexroth.com.cn");
                mail.CC.Add("lijuan.xu@boschrexroth.com.cn");
                mail.To.Add(new MailAddress(email));
                mail.AttachmentData = package.GetAsByteArray();
                mail.ModuleName = "QStock";
                try
                {
                    EmailHelper.SendHasAttachment(mail);
                    response.Updated = response.Updated + 1;
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add(ex.Message);
                }
            }
        }
    }

    public class OOHEntity
    {
        public string SalesOrder { get; set; }
        public string SalesOrderItem { get; set; }
        public string Material { get; set; }
        public string MaterialDescription { get; set; }
        public string ItemCategory { get; set; }
        public string SalesEmployee { get; set; }
        public string SalesEmployeename { get; set; }
        public string DCBusinessUnit { get; set; }
        public string SoldtoParty { get; set; }
        public string SoldtoPartyname { get; set; }
        public string CustPONo { get; set; }
        public string CustomerMaterial { get; set; }
        public string CalendarDay { get; set; }
        public string FirstRequestedDate { get; set; }
        public string SOCreatedOn { get; set; }
        public int RFQty { get; set; }
        public double RFNetvalue { get; set; }
    }

    public class QStockEntity
    {
        public string Material { get; set; }
        public string Plant { get; set; }
        public string StockCategory { get; set; }
        public double AvailableStock { get; set; }
        public string Reason { get; set; }
    }


}


