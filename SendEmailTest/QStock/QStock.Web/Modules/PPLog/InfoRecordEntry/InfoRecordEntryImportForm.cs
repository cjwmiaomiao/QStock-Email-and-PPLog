
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.InfoRecordEntryImport")]
    //[FormScript("ppLog.InfoRecordEntry")]
    [BasedOnRow(typeof(Entities.InfoRecordEntryRow))]
    //[LookupScript(typeof(Lookups.InfoRecordEntryYearMonthLookup))]
    public class InfoRecordEntryImportForm
    {

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}