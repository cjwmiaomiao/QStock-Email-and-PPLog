
namespace QStock.QStockExcel.Endpoints
{
    using OfficeOpenXml;
    using System.Net.Mail;
    using System.Configuration;
    using System.Net.Configuration;
    using Common;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Data;
    using System.Web.Mvc;
    using System.Linq;
    using QStockExcel.Repositories;
    using QStockExcel.Entities;
    using MyRow = Entities.OohRow;
    using MyRepository = Repositories.OohRepository;

    [RoutePrefix("Services/QStockExcel/Ooh"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    //[ConnectionKey(typeof(MyRow)),ServiceAuthorize]
    public class OohController : ServiceEndpoint
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
            return new OohRepository().Delete(uow, request);
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
        [HttpPost]
        public ExcelImportResponse ExcelImport(IUnitOfWork uow, ExcelImportRequest request)
        {
            //删除数据
            string sql = "truncate table [QStock_LOG].[dbo].[OOH] ";
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

            var worksheet = ep.Workbook.Worksheets["QI物料关联OOH"];

            //获取列名的字符串数组，每个表可能会不同
            //List<string> excelRowName = new List<string>();
            //for (var i = 1; i <= worksheet.Dimension.End.Column; i++)
            //{
            //    excelRowName.Add(worksheet.Cells[1, i].Value.ToString().TrimStart('\'').Replace(" ", ""));
            //}

            //var entityName = new OohRow();

            //var sheetData = getExcelData(worksheet, excelRowName, entityName);
            for (var row = 2; row <= worksheet.Dimension.Rows; row++)
            {
                if (worksheet.Cells[row, 1].Value == null|| worksheet.Cells[row, 1].Value.ToString()=="") break;
                //try
                //{
                var Ooh = new OohRow();

                Ooh.SalesOrder = Convert.ToString(worksheet.Cells[row, 9].Value ?? "");
                Ooh.SalesOrderItem = Convert.ToString(worksheet.Cells[row, 10].Value ?? "");
                Ooh.Material = Convert.ToString(worksheet.Cells[row, 11].Value ?? "");
                Ooh.MaterialDescription = Convert.ToString(worksheet.Cells[row, 12].Value ?? "");
                Ooh.ItemCategory = Convert.ToString(worksheet.Cells[row, 13].Value ?? "");
                Ooh.SalesEmployee = Convert.ToString(worksheet.Cells[row, 18].Value ?? "");
                Ooh.SalesEmployeename = Convert.ToString(worksheet.Cells[row, 19].Value ?? "");
                Ooh.DCBusinessUnit = Convert.ToString(worksheet.Cells[row, 1].Value ?? "");
                Ooh.SoldtoParty = Convert.ToString(worksheet.Cells[row, 3].Value ?? "");
                Ooh.SoldtoPartyname = Convert.ToString(worksheet.Cells[row, 4].Value ?? "");
                Ooh.CustPONo = Convert.ToString(worksheet.Cells[row, 7].Value ?? "");
                Ooh.CustomerMaterial = Convert.ToString(worksheet.Cells[row, 8].Value ?? "");
                Ooh.CalendarDay = worksheet.Cells[row, 15].Text == "#" ? (DateTime?)null : Convert.ToDateTime(worksheet.Cells[row, 15].Text);
                Ooh.FirstRequestedDate = worksheet.Cells[row, 16].Text == "#" ? (DateTime?)null : Convert.ToDateTime(worksheet.Cells[row, 16].Text);
                Ooh.SOCreatedOn = worksheet.Cells[row, 17].Text == "#" ? (DateTime?)null : Convert.ToDateTime(worksheet.Cells[row, 17].Text);
                Ooh.RFQty = Convert.ToInt32(worksheet.Cells[row, 20].Value ?? "");
                Ooh.RFNetvalue = Convert.ToDouble(worksheet.Cells[row, 21].Value ?? "");

                    // 创建新数据
                    new OohRepository().Create(uow, new SaveRequest<MyRow>
                    {
                        Entity = Ooh
                    });

                    response.Inserted = response.Inserted + 1;
                //}
                //catch (Exception ex)
                //{
                //    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                //}
            }
            return response;
            //公共方法返回整个sheet的数据
            //public static List<T> getExcelData<T>(ExcelWorksheet workSheet, List<string> excelRowName, T entity)
            //{
            //    //得到entity的类型数组
            //    PropertyInfo[] properties = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            //    List<string> entityNames = new List<string>();
            //    foreach (PropertyInfo property in properties)
            //    {
            //        if (property.Name.ToLower() != "id")
            //        {
            //            entityNames.Add(property.Name);
            //        }
            //    }

            //    //得到索引
            //    Dictionary<string, int> rowMap = new Dictionary<string, int>();
            //    for (var i = 0; i < entityNames.Count; i++)
            //    {
            //        if (excelRowName.Contains(entityNames[i]))
            //        {
            //            int index = excelRowName.FindIndex(name => name == entityNames[i]);
            //            if (index != -1)
            //            {
            //                rowMap.Add(entityNames[i], index + 1);
            //            }
            //            else
            //            {
            //                return null;
            //            }
            //        }
            //    }

            //    //写入数据
            //    List<T> excelData = new List<T>();
            //    for (var row = 2; row <= workSheet.Dimension.Rows; row++)
            //    {
            //        T newEntity = Activator.CreateInstance<T>();
            //        for(var i = 0; i < entityNames.Count; i++)
            //        {
            //            var cellValue= workSheet.Cells[row, rowMap[entityNames[i]]].Value;
            //            PropertyInfo prop = typeof(T).GetProperty(excelRowName[i]);
            //            if (prop != null)
            //            {
            //                prop.SetValue(newEntity, Convert.ChangeType(cellValue, prop.PropertyType));
            //            }
            //        }

            //        excelData.Add(newEntity);
            //    };
            //    return excelData;
            //}
        }

        public SendEmailResponse getEmailData(IUnitOfWork uow, SendEmailRequest request)
        {
            var response = new SendEmailResponse();
            response.ErrorList = new List<string>();
            string monthYear = DateTime.Now.ToString("MMMM, yyyy");
            string subjectOver2 = "Monthly report for over two years blocked material list_" + monthYear + "超两年库存物料清单";
            string bodyOver2content = "这是" + monthYear +"超两年的清单";
            string subjectBelow2 = "Monthly OOH report for QI blocked material list_" + monthYear + "QI冻结物料清单";
            string bodyBelow2Content = "这是" + monthYear + "冻结的清单";
            //发给谁
            string sqlEmail = "select LOG1Email from [QStock_LOG].[dbo].[LOG1Email]";
            IEnumerable<dynamic> emailList = uow.Connection.Query(sqlEmail);

            foreach (var item in emailList)
            {
                //超两年
                string email = item.LOG1Email;
                string over2OOHSql = @"select * from [QStock_LOG].[dbo].[OOH] where Material in (
                  select Material from[QStock_LOG].[dbo].[QStockList] 
                  where IsOverTwoYears = 1 )";
                IEnumerable<OOHEntity> over2OOHRes = uow.Connection.Query<OOHEntity>(over2OOHSql);
                List<OOHEntity> ooh2List = over2OOHRes.ToList();
                var materials2 = over2OOHRes.Select(ooh => ooh.Material);
                if (materials2.ToList().Count > 0)
                {
                    string over2QStockSql = "select * from [QStock_LOG].[dbo].[QStockList] where IsOverTwoYears=1;";
                    IEnumerable<QStockEntity> qstockResult = uow.Connection.Query<QStockEntity>(over2QStockSql);
                    List<QStockEntity> qstock2List = qstockResult.ToList();
                    attachExcel(email, new { OOH = ooh2List, QStock = qstock2List }, subjectOver2, bodyOver2content, response);
                }

                //未超两年
                string below2OOHSql = @"  select * from [QStock_LOG].[dbo].[OOH] where Material in (
                  select Material from [QStock_LOG].[dbo].[QStockList] 
                  where IsOverTwoYears=0 )";
                IEnumerable<OOHEntity> below2OOHRes = uow.Connection.Query<OOHEntity>(below2OOHSql);
                List<OOHEntity> oohList = below2OOHRes.ToList();
                var materials = below2OOHRes.Select(ooh => ooh.Material);
                if (materials.ToList().Count > 0)
                {
                    string below2QStockSql = "select * from [QStock_LOG].[dbo].[QStockList] where IsOverTwoYears=0;";
                    IEnumerable<QStockEntity> qstockResult = uow.Connection.Query<QStockEntity>(below2QStockSql);
                    List<QStockEntity> qstockList = qstockResult.ToList();
                    attachExcel(email, new { OOH = oohList, QStock = qstockList }, subjectBelow2, bodyBelow2Content, response);
                }
            }
            return response;
        }

        public void attachExcel(string email, object emailBody, string subject, string body, SendEmailResponse response)
        {
            dynamic emailbody = emailBody;
            var oohList = (List<OOHEntity>)emailbody.OOH;
            var qstockList = (List<QStockEntity>)emailbody.QStock;
            using (var package = new ExcelPackage())
            {
                var sheet1 = package.Workbook.Worksheets.Add("Sheet1");
                sheet1.Cells.LoadFromCollection(oohList, true);
                var sheet2 = package.Workbook.Worksheets.Add("Sheet2");
                sheet2.Cells.LoadFromCollection(qstockList, true);
                var smtpSection = (SmtpSection)ConfigurationManager.GetSection("system.net/mailSettings/smtp");
                string fromAddress = smtpSection.From;
                MailMessageModel mail = new MailMessageModel()
                {
                    Subject = subject,
                    Body = body,
                    //IsBodyHtml = true
                };
                mail.CC.Add("l.han_sh@boschrexroth.com.cn");
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
}
