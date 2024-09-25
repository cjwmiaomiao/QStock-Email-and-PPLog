
namespace QStock.PPLog.Endpoints
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
    using System.Diagnostics;
    using System.Net.Mail;
    using System.Configuration;
    using System.Net.Configuration;
    using System.Reflection;
    using System.Linq;
    using QStockExcel.Repositories;
    using QStockExcel.Entities;
    using Common;
    using MyRepository = Repositories.GrDataEntryRepository;
    using MyRow = Entities.GrDataEntryRow;

    [RoutePrefix("Services/PPLog/GrDataEntry"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class GrDataEntryController : ServiceEndpoint
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

        public ExcelImportResponse GRUpload(IUnitOfWork uow, ExcelImportRequest request)
        {
            string sql = $"delete from [gr_data_entry] where year_month='{request.YearMonth}'";
            uow.Connection.Execute(sql);
            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            List<MyRow> PPUploadContent = ExcelImportGRUpload(uow.Connection, request);
            if (PPUploadContent == null)
            {
                stopwatch.Stop();
                response.ErrorList.Add("上传的格式有误");
                return response;
            }
            for (int i = 0; i < PPUploadContent.Count; i++)
            {
                new MyRepository().Create(uow, new SaveRequest<MyRow>
                {
                    Entity = PPUploadContent[i]
                });
                response.Inserted = response.Inserted + 1;
            }
            string sqlAddVendor = $@"UPDATE gr SET gr.vendor = vm.Vendor
            FROM [gr_data_entry] gr
            LEFT JOIN [VendorMap] vm ON vm.VendorNum = gr.vendor_number
            WHERE gr.year_month = '{request.YearMonth}';";
            string sqlAddType = $@"  UPDATE gr SET gr.[type] = pl.[type]
            FROM [gr_data_entry] gr
            LEFT JOIN [product_list_entry] pl 
            ON pl.product_number = gr.[product_number] AND pl.year_month='{request.YearMonth}'
            WHERE gr.year_month = '{request.YearMonth}';";
            uow.Connection.Execute(sqlAddVendor);
            uow.Connection.Execute(sqlAddType);
            stopwatch.Stop();
            response.SpendTime = Convert.ToInt32(stopwatch.ElapsedMilliseconds);
            return response;
        }
        public static List<MyRow> ExcelImportGRUpload(IDbConnection connection, ExcelImportRequest request)
        {
            var response = new List<MyRow>();

            var constYearMonth = request.YearMonth;

            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");
            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

           
            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);
            //很奇怪，1会报错，共有3个
            var worksheet = ep.Workbook.Worksheets["Sheet1"];
            int rowNum = worksheet.Dimension.Rows;
            //判断excel里GRinfo够不够
            int colNum = worksheet.Dimension.Columns;
            int monthGR = int.Parse(constYearMonth.Substring(constYearMonth.Length - 2));
            if (colNum != (8 + 12 + monthGR - 1)) return null;


            for (int i = 4; i <= rowNum; i++)
            {
                MyRow entityExcel = new MyRow();
                entityExcel.BusinessUnit = Convert.ToString(worksheet.Cells[i, 7].Value ?? "");
                entityExcel.Pdcl = Convert.ToString(worksheet.Cells[i, 8].Value ?? "");
                entityExcel.ProductNumber = Convert.ToString(worksheet.Cells[i, 1].Value ?? "");
                entityExcel.ProfitCenter= Convert.ToString(worksheet.Cells[i, 6].Value ?? "");
                entityExcel.VendorNumber= Convert.ToString(worksheet.Cells[i, 5].Value ?? "");
                entityExcel.YearMonth = constYearMonth;
                //设为null
                for(int j = 9;j<=19+monthGR; j++)
                {
                    string GrInfo = "GrInfo" + (j-9);
                    var cellValue = worksheet.Cells[i, j].Value;
                    double GRInfoValue;
                    if (cellValue == null || cellValue.ToString() == "*")
                    {
                        GRInfoValue = 0;
                    }
                    else
                    {
                        GRInfoValue = Convert.ToDouble(cellValue);
                    }
                    typeof(MyRow).GetProperty(GrInfo)?.SetValue(entityExcel, GRInfoValue);
                }
                response.Add(entityExcel);
            }
            return response;
        }
    }
}
