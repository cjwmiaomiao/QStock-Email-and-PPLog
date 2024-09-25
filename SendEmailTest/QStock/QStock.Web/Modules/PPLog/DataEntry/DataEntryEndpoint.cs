
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
    using System.Text;
    using System.Globalization;
    using System.Diagnostics;
    using System.Configuration;
    using System.Net.Configuration;
    using System.Reflection;
    using System.Linq;
    using QStockExcel.Repositories;
    using QStockExcel.Entities;
    using Common;
    using MyRepository = Repositories.DataEntryRepository;
    using MyRow = Entities.DataEntryRow;

    [RoutePrefix("Services/PPLog/DataEntry"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DataEntryController : ServiceEndpoint
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

        public ExcelImportResponse PPUpload(IUnitOfWork uow, ExcelImportRequest request)
        {
            string sql = $"delete from [data_entry] where year_month='{request.YearMonth}'";
            uow.Connection.Execute(sql);
            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            //将全部数据提出到一个list里
            List < MyRow > PPUploadContent= ExcelImportPPUpload(uow.Connection, request);
            for(int i = 0; i < PPUploadContent.Count; i++)
            {
                new MyRepository().Create(uow, new SaveRequest<MyRow>
                {
                    Entity = PPUploadContent[i]
                });
                response.Inserted = response.Inserted + 1;
            }
            string sqlAddVendor= $@"UPDATE pp
            SET pp.vendor = vm.vendor
            FROM [data_entry] pp
            LEFT JOIN [VendorMap] vm ON vm.VendorNum = pp.vendor_number
            WHERE pp.year_month = '{request.YearMonth}';";
            uow.Connection.Execute(sqlAddVendor);
            stopwatch.Stop();
            response.SpendTime = Convert.ToInt32(stopwatch.ElapsedMilliseconds);
            return response;
        }
        public static List<MyRow> ExcelImportPPUpload(IDbConnection connection, ExcelImportRequest request)
        {
            var response = new List<MyRow>();

            var constYearMonth = request.YearMonth;

            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");
            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");

            // Load Excel file using EPPlus
            //ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
            ExcelPackage ep = new ExcelPackage();
            using (var fs = new FileStream(UploadHelper.DbFilePath(request.FileName), FileMode.Open, FileAccess.Read))
                ep.Load(fs);

            var worksheet = ep.Workbook.Worksheets[1];
            int rowNum = worksheet.Dimension.Rows;
            for(int i = 9; i <= rowNum; i++)
            {
                MyRow entityExcel = new MyRow();
                entityExcel.BusinessUnit = Convert.ToString(worksheet.Cells[i, 134].Value ?? "");
                entityExcel.Pdcl= Convert.ToString(worksheet.Cells[i, 135].Value ?? "");
                for(int j = 0; j <= 18; j++)
                {
                    string ppName = "Pp" + j;
                    int ppIndex = 88 + j;
                    int ppValue = Convert.ToInt32(worksheet.Cells[i, ppIndex].Value ?? 0);
                    typeof(MyRow).GetProperty(ppName)?.SetValue(entityExcel, ppValue);
                }
                for(int k = 0; k <= 19; k++)
                {
                    string tbName = "Tb" + k;
                    int tbIndex = 21 + k;
                    int tbValue = Convert.ToInt32(worksheet.Cells[i, tbIndex].Value ?? 0);
                    typeof(MyRow).GetProperty(tbName)?.SetValue(entityExcel, tbValue);
                }
                entityExcel.ProductNumber= Convert.ToString(worksheet.Cells[i, 1].Value ?? "");
                entityExcel.ProfitCenter= Convert.ToString(worksheet.Cells[i, 133].Value ?? "");
                entityExcel.Type = Convert.ToString(worksheet.Cells[i, 13].Value ?? "");
                entityExcel.VendorNumber = Convert.ToString(worksheet.Cells[i, 3].Value ?? "");
                entityExcel.YearMonth = constYearMonth;
                response.Add(entityExcel);
            }
            return response;
        }
    }
}
