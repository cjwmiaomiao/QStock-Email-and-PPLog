
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.SoldDataEntryImport")]
    //[FormScript("ppLog.SoldDataEntry")]
    [BasedOnRow(typeof(Entities.SoldDataEntryRow))]
    //[LookupScript(typeof(Lookups.SoldDataEntryYearMonthLookup))]
    public class SoldDataEntryImportForm
    {
        [DisplayName("Year Month")]
        //[DefaultValue("2024-07"), Required, LookupEditor(typeof(Lookups.SoldDataEntryYearMonthLookup))]
        [DataEntryImportEditor]
        public String YearMonth { get; set; }

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}