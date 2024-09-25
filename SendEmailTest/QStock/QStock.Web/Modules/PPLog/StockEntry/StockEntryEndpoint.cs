﻿
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
    using System.Configuration;
    using System.Net.Configuration;
    using System.Reflection;
    using System.Linq;
    using QStockExcel.Repositories;
    using QStockExcel.Entities;
    using Common;
    using MyRepository = Repositories.StockEntryRepository;
    using MyRow = Entities.StockEntryRow;

    [RoutePrefix("Services/PPLog/StockEntry"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class StockEntryController : ServiceEndpoint
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
        public ExcelImportResponse StockUpload(IUnitOfWork uow, ExcelImportRequest request)
        {
            string sql = $"delete from [stock_entry] where year_month='{request.YearMonth}'";
            uow.Connection.Execute(sql);
            var response = new ExcelImportResponse();
            response.ErrorList = new List<string>();
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            List<MyRow> PPUploadContent = ExcelImportStockUpload(uow.Connection, request);
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
            string sqlAddVendor = $@"UPDATE st SET st.vendor = ir.vendor
	        FROM [stock_entry] st
	        LEFT JOIN [info_record_entry] ir ON ir.[product_number] = st.[product_number]
            WHERE st.year_month = '{request.YearMonth}';";
            uow.Connection.Execute(sqlAddVendor);
            string sqlAddType = $@"UPDATE st SET st.[type] = pl.[type]
            FROM [stock_entry] st
            LEFT JOIN [product_list_entry] pl 
            ON pl.product_number = st.[product_number] AND pl.year_month='{request.YearMonth}'
            WHERE st.year_month = '{request.YearMonth}';";
            uow.Connection.Execute(sqlAddType);
            stopwatch.Stop();
            response.SpendTime = Convert.ToInt32(stopwatch.ElapsedMilliseconds);
            return response;
        }
        public static List<MyRow> ExcelImportStockUpload(IDbConnection connection, ExcelImportRequest request)
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

            var worksheet = ep.Workbook.Worksheets["Sheet1"];
            int rowNum = worksheet.Dimension.Rows;
            //判断excel里GRinfo够不够,Stock表格会多出列，所以列数需要自己判断
            int colNum=0;
            for (int i=9;i<= worksheet.Dimension.Columns; i++)
            {
                if(worksheet.Cells[2, i].Value == null)
                {
                    colNum = i-1;
                    break;
                }
            }
            int monthGR = int.Parse(constYearMonth.Substring(constYearMonth.Length - 2));
            if (colNum != (8 + 12 + monthGR - 1)) return null;

            for (int i = 4; i <= rowNum; i++)
            {
                //很奇怪会多读一行，所以做个判断
                if (worksheet.Cells[i, 1].Value == null)
                {
                    break;
                }
                MyRow entityExcel = new MyRow();
                entityExcel.Pdcl = Convert.ToString(worksheet.Cells[i, 8].Value ?? "");
                entityExcel.ProductNumber = Convert.ToString(worksheet.Cells[i, 1].Value ?? "");
                entityExcel.YearMonth = constYearMonth;
                for (int j = 9; j <= 19 + monthGR; j++)
                {
                    string StockInfo = "StockInfo" + (j - 9);
                    double StockInfoValue = Convert.ToDouble(worksheet.Cells[i, j].Value ?? 0);
                    typeof(MyRow).GetProperty(StockInfo)?.SetValue(entityExcel, StockInfoValue);
                }
                response.Add(entityExcel);
            }
            return response;
        }
    }
}
