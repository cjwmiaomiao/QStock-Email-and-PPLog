
namespace QStock.PPLog.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PPLog.StockEntry")]
    [BasedOnRow(typeof(Entities.StockEntryRow), CheckNames = true)]
    public class StockEntryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Pdcl { get; set; }
        public String Type { get; set; }
        public String Vendor { get; set; }
        public String ProductNumber { get; set; }
        public Double StockInfo0 { get; set; }
        public Double StockInfo1 { get; set; }
        public Double StockInfo10 { get; set; }
        public Double StockInfo11 { get; set; }
        public Double StockInfo12 { get; set; }
        public Double StockInfo13 { get; set; }
        public Double StockInfo14 { get; set; }
        public Double StockInfo15 { get; set; }
        public Double StockInfo16 { get; set; }
        public Double StockInfo17 { get; set; }
        public Double StockInfo2 { get; set; }
        public Double StockInfo3 { get; set; }
        public Double StockInfo4 { get; set; }
        public Double StockInfo5 { get; set; }
        public Double StockInfo6 { get; set; }
        public Double StockInfo7 { get; set; }
        public Double StockInfo8 { get; set; }
        public Double StockInfo9 { get; set; }
        public Double StockInfo18 { get; set; }
        public Double StockInfo19 { get; set; }
        public Double StockInfo20 { get; set; }
        public Double StockInfo21 { get; set; }
        public Double StockInfo22 { get; set; }
        public Double Totalstock0 { get; set; }
        public Double Totalstock1 { get; set; }
        public Double Totalstock10 { get; set; }
        public Double Totalstock11 { get; set; }
        public Double Totalstock12 { get; set; }
        public Double Totalstock13 { get; set; }
        public Double Totalstock14 { get; set; }
        public Double Totalstock15 { get; set; }
        public Double Totalstock16 { get; set; }
        public Double Totalstock17 { get; set; }
        public Double Totalstock2 { get; set; }
        public Double Totalstock3 { get; set; }
        public Double Totalstock4 { get; set; }
        public Double Totalstock5 { get; set; }
        public Double Totalstock6 { get; set; }
        public Double Totalstock7 { get; set; }
        public Double Totalstock8 { get; set; }
        public Double Totalstock9 { get; set; }
        public String VendorNumber { get; set; }
        public String YearMonth { get; set; }
    }
}