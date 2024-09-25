
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
    using MyRepository = Repositories.MaterialMasterEntryRepository;
    using MyRow = Entities.MaterialMasterEntryRow;

    [RoutePrefix("Services/PPLog/MaterialMasterEntry"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MaterialMasterEntryController : ServiceEndpoint
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

        public ExcelImportResponse MaterialMasterUpload(IDbConnection connection, ExcelImportRequest request)
        {
            string sql2 = "truncate table [tempMaterialMaster]";
            connection.Execute(sql2);

            var response = new ExcelImportResponse();
            request.CheckNotNull();
            Check.NotNullOrWhiteSpace(request.FileName, "filename");
            UploadHelper.CheckFileNameSecurity(request.FileName);

            if (!request.FileName.StartsWith("temporary/"))
                throw new ArgumentOutOfRangeException("filename");
            //记录时间
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            // csvPath存的是csv文件夹在服务器上的路劲，目前先手动存到本地数据库，再将数据导入[PP_LOG].[dbo].[tempMaterialMaster]
          //  string csvPath01 = UploadHelper.DbFilePath(request.FileName);
            string csvPath = "\\\\SGHVM00055\\" + request.FileName.Replace('/', '\\');
            string bulkInsert = "EXEC [BulKInsertbyCSV] @tablename = N'tempMaterialMaster',	@path = N'"+ csvPath + "'";
            //string bulkInsert = $@"BULK INSERT [tempMaterialMaster]
            //    FROM '{csvPath}'
            //    WITH
            //    (
            //        FIELDTERMINATOR = ',', 
            //        ROWTERMINATOR = '\n', 
            //        FIRSTROW = 2
            //    ); ";
            connection.Execute(bulkInsert);

            //合并两张表
            string sql1 = "truncate table [material_master_entry]";
            connection.Execute(sql1);
            string sqlMerge = @"INSERT INTO [material_master_entry] ([pdcl], [product_number], [profit_center])
                SELECT pm.[PDCL] AS pdcl, mm.[product_number], mm.[profit_center]
                FROM [ProfitCtrMap] pm
                RIGHT JOIN [tempMaterialMaster] mm
                ON pm.[ProfitCtr] = mm.profit_center;";
            connection.Execute(sqlMerge);

            string tempQuery = "select count(*) as num from [material_master_entry]";
            var insertNum = connection.Query(tempQuery).ToList()[0].num;
            response.Inserted = Convert.ToInt32(insertNum);
            stopwatch.Stop();
            response.SpendTime = Convert.ToInt32(stopwatch.ElapsedMilliseconds);
            return response;
        }
    }
}
