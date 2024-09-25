
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.DataEntryImport")]
    //[FormScript("ppLog.DataEntry")]
    [BasedOnRow(typeof(Entities.DataEntryRow))]
    //[LookupScript(typeof(Lookups.DataEntryYearMonthLookup))]
    public class DataEntryImportForm
    {
        [DisplayName("Year Month")]
        //[DefaultValue("2024-07"), Required, LookupEditor(typeof(Lookups.DataEntryYearMonthLookup))]
        [DataEntryImportEditor]
        public String YearMonth { get; set; }

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}