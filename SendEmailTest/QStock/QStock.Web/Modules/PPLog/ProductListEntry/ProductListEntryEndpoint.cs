
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
    using MyRepository = Repositories.ProductListEntryRepository;
    using MyRow = Entities.ProductListEntryRow;

    [RoutePrefix("Services/PPLog/ProductListEntry"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class ProductListEntryController : ServiceEndpoint
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
        public ExcelImportResponse pdclDelete(IUnitOfWork uow, ExcelImportRequest request)
        {
            string sql = $"delete from [product_list_entry] where year_month='{request.YearMonth}'";
            uow.Connection.Execute(sql);
            var response = new ExcelImportResponse();
            response.ErrorList.Add($"已删除{request.YearMonth}的product list");
            return response;
        }
        public ExcelImportResponse PdclUpload(IUnitOfWork uow, ExcelImportRequest request)
        {
            //可能需要多次上传
            //string sql = $"delete from [PP_LOG_Test].[dbo].[data_entry] where year_month='{request.YearMonth}'";
            //uow.Connection.Execute(sql);
            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();
            List<MyRow> PPUploadContent = ExcelImportPdclUpload(uow.Connection, request);
            for (int i = 0; i < PPUploadContent.Count; i++)
            {
                new MyRepository().Create(uow, new SaveRequest<MyRow>
                {
                    Entity = PPUploadContent[i]
                });
                response.Inserted = response.Inserted + 1;
            }
            stopwatch.Stop();
            response.SpendTime = Convert.ToInt32(stopwatch.ElapsedMilliseconds);
            return response;
        }

        public static List<MyRow> ExcelImportPdclUpload(IDbConnection connection, ExcelImportRequest request)
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
            int typeCol = 0;
            for(int i=1;i<= worksheet.Dimension.Columns; i++)
            {
                if (worksheet.Cells[1, i].Value.ToString() == "type")
                {
                    typeCol = i;
                    break;
                }
            }
            for (int i = 2; i <= rowNum; i++)
            {
                if (worksheet.Cells[i, 1].Value == null || worksheet.Cells[i, 1].Value.ToString() == "") break;
                MyRow entityExcel = new MyRow();
                entityExcel.ProductNumber = Convert.ToString(worksheet.Cells[i, 1].Value ?? "");
                entityExcel.Type = Convert.ToString(worksheet.Cells[i, typeCol].Value ?? "");
                entityExcel.YearMonth = constYearMonth;
                response.Add(entityExcel);
            }
            return response;
        }
    }
}
