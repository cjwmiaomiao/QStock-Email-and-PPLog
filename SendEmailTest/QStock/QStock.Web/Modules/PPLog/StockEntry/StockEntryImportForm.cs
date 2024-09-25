
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.StockEntryImport")]
    //[FormScript("ppLog.StockEntry")]
    [BasedOnRow(typeof(Entities.StockEntryRow))]
    //[LookupScript(typeof(Lookups.StockEntryYearMonthLookup))]
    public class StockEntryImportForm
    {
        [DisplayName("Year Month")]
        //[DefaultValue("2024-07"), Required, LookupEditor(typeof(Lookups.StockEntryYearMonthLookup))]
        [DataEntryImportEditor]
        public String YearMonth { get; set; }

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}