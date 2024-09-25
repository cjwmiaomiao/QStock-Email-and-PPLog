
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.GrDataEntryImport")]
    //[FormScript("ppLog.GrDataEntry")]
    [BasedOnRow(typeof(Entities.GrDataEntryRow))]
    //[LookupScript(typeof(Lookups.GrDataEntryYearMonthLookup))]
    public class GrDataEntryImportForm
    {
        [DisplayName("Year Month")]
        //[DefaultValue("2024-07"), Required, LookupEditor(typeof(Lookups.GrDataEntryYearMonthLookup))]
        [DataEntryImportEditor]
        public String YearMonth { get; set; }

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}