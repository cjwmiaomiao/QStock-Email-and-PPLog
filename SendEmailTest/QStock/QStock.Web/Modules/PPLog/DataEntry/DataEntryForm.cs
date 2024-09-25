
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.DataEntry")]
    [BasedOnRow(typeof(Entities.DataEntryRow), CheckNames = true)]
    public class DataEntryForm
    {
        public String BusinessUnit { get; set; }
        public String Pdcl { get; set; }
        public Int32 Pp0 { get; set; }
        public Int32 Pp1 { get; set; }
        public Int32 Pp10 { get; set; }
        public Int32 Pp11 { get; set; }
        public Int32 Pp12 { get; set; }
        public Int32 Pp13 { get; set; }
        public Int32 Pp14 { get; set; }
        public Int32 Pp15 { get; set; }
        public Int32 Pp16 { get; set; }
        public Int32 Pp17 { get; set; }
        public Int32 Pp18 { get; set; }
        public Int32 Pp2 { get; set; }
        public Int32 Pp3 { get; set; }
        public Int32 Pp4 { get; set; }
        public Int32 Pp5 { get; set; }
        public Int32 Pp6 { get; set; }
        public Int32 Pp7 { get; set; }
        public Int32 Pp8 { get; set; }
        public Int32 Pp9 { get; set; }
        public String ProductNumber { get; set; }
        public String ProfitCenter { get; set; }
        public Int32 Tb0 { get; set; }
        public Int32 Tb1 { get; set; }
        public Int32 Tb10 { get; set; }
        public Int32 Tb11 { get; set; }
        public Int32 Tb12 { get; set; }
        public Int32 Tb13 { get; set; }
        public Int32 Tb14 { get; set; }
        public Int32 Tb15 { get; set; }
        public Int32 Tb16 { get; set; }
        public Int32 Tb17 { get; set; }
        public Int32 Tb18 { get; set; }
        public Int32 Tb19 { get; set; }
        public Int32 Tb2 { get; set; }
        public Int32 Tb3 { get; set; }
        public Int32 Tb4 { get; set; }
        public Int32 Tb5 { get; set; }
        public Int32 Tb6 { get; set; }
        public Int32 Tb7 { get; set; }
        public Int32 Tb8 { get; set; }
        public Int32 Tb9 { get; set; }
        public String Type { get; set; }
        public String Vendor { get; set; }
        public String VendorNumber { get; set; }
        public String YearMonth { get; set; }
    }
}