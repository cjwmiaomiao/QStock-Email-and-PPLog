
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.ProductListEntryImport")]
    //[FormScript("ppLog.ProductListEntry")]
    [BasedOnRow(typeof(Entities.ProductListEntryRow))]
    //[LookupScript(typeof(Lookups.ProductListEntryYearMonthLookup))]
    public class ProductListEntryImportForm
    {
        [DisplayName("Year Month")]
        //[DefaultValue("2024-07"), Required, LookupEditor(typeof(Lookups.ProductListEntryYearMonthLookup))]
        [DataEntryImportEditor]
        public String YearMonth { get; set; }

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}