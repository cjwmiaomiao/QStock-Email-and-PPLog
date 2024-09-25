
namespace QStock.PPLog.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PPLog.SoldDataEntry")]
    [BasedOnRow(typeof(Entities.SoldDataEntryRow), CheckNames = true)]
    public class SoldDataEntryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Mrpcontroller { get; set; }
        public String Pdcl { get; set; }
        public String ProductNumber { get; set; }
        public Double SoldInfo0 { get; set; }
        public Double SoldInfo1 { get; set; }
        public Double SoldInfo10 { get; set; }
        public Double SoldInfo11 { get; set; }
        public Double SoldInfo12 { get; set; }
        public Double SoldInfo13 { get; set; }
        public Double SoldInfo14 { get; set; }
        public Double SoldInfo15 { get; set; }
        public Double SoldInfo16 { get; set; }
        public Double SoldInfo17 { get; set; }
        public Double SoldInfo2 { get; set; }
        public Double SoldInfo3 { get; set; }
        public Double SoldInfo4 { get; set; }
        public Double SoldInfo5 { get; set; }
        public Double SoldInfo6 { get; set; }
        public Double SoldInfo7 { get; set; }
        public Double SoldInfo8 { get; set; }
        public Double SoldInfo9 { get; set; }
        public String Type { get; set; }
        public String Vendor { get; set; }
        public String VendorNumber { get; set; }
        public String YearMonth { get; set; }
    }
}