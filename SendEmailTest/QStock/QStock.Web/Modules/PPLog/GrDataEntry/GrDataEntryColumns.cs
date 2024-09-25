
namespace QStock.PPLog.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PPLog.GrDataEntry")]
    [BasedOnRow(typeof(Entities.GrDataEntryRow), CheckNames = true)]
    public class GrDataEntryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String BusinessUnit { get; set; }
        public Double GrInfo0 { get; set; }
        public Double GrInfo1 { get; set; }
        public Double GrInfo10 { get; set; }
        public Double GrInfo11 { get; set; }
        public Double GrInfo12 { get; set; }
        public Double GrInfo13 { get; set; }
        public Double GrInfo14 { get; set; }
        public Double GrInfo15 { get; set; }
        public Double GrInfo16 { get; set; }
        public Double GrInfo17 { get; set; }
        public Double GrInfo2 { get; set; }
        public Double GrInfo3 { get; set; }
        public Double GrInfo4 { get; set; }
        public Double GrInfo5 { get; set; }
        public Double GrInfo6 { get; set; }
        public Double GrInfo7 { get; set; }
        public Double GrInfo8 { get; set; }
        public Double GrInfo9 { get; set; }
        public Double GrInfo18 { get; set; }
        public Double GrInfo19 { get; set; }
        public Double GrInfo20 { get; set; }
        public Double GrInfo21 { get; set; }
        public Double GrInfo22 { get; set; }
        public String Pdcl { get; set; }
        public String ProductNumber { get; set; }
        public String ProfitCenter { get; set; }
        public String Type { get; set; }
        public String Vendor { get; set; }
        public String VendorNumber { get; set; }
        public String YearMonth { get; set; }
    }
}