
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
    using MyRepository = Repositories.InfoRecordEntryRepository;
    using MyRow = Entities.InfoRecordEntryRow;

    [RoutePrefix("Services/PPLog/InfoRecordEntry"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class InfoRecordEntryController : ServiceEndpoint
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
        public ExcelImportResponse InfoRecordUpload(IDbConnection connection, ExcelImportRequest request)
        {
            //表已建好
            string sql1 = "truncate table [info_record_entry]; truncate table [tempInfoRecord]";
            connection.Execute(sql1);

            var response = new ExcelImportResponse();
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");
            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            //后续需要修改
            string csvPath = "\\\\SGHVM00055\\" + request.FileName.Replace('/', '\\');
            string bulkInsert = "EXEC [BulKInsertbyCSV] @tablename = N'tempInfoRecord',	@path = N'" + csvPath + "'";
            //string bulkInsert = $@"BULK INSERT [QStock_Default_v1].[dbo].[tempInfoRecord]
            //    FROM '{csvPath}'
            //    WITH
            //    (
            //        FIELDTERMINATOR = ',', 
            //        ROWTERMINATOR = '\n', 
            //        FIRSTROW = 2
            //    ); ";
            connection.Execute(bulkInsert);

            //对csv上传的数据去0
            string sqlZero = @"  UPDATE [tempInfoRecord]
                SET [Vendor] = STUFF([Vendor], 1, PATINDEX('%[^0]%', [Vendor]) - 1, '')
                WHERE [Vendor] LIKE '0%';";
            connection.Execute(sqlZero);

            //合并两张表，这里填充的是测试的数据库
            string sqlMerge = @"  INSERT INTO [info_record_entry] ([product_number],[vendor])
                select tir.[Material] as [product_number],vm.[Vendor] as [vendor] 
				from [tempInfoRecord] tir left join [VendorMap] vm
				on tir.[Vendor]=vm.VendorNum";
            connection.Execute(sqlMerge);

            string tempQuery = "select count(*) as num from [info_record_entry]";
            var insertNum = connection.Query(tempQuery).ToList()[0].num;
            response.Inserted = Convert.ToInt32(insertNum);
            stopwatch.Stop();
            response.SpendTime = Convert.ToInt32(stopwatch.ElapsedMilliseconds);
            return response;
        }
    }
}
