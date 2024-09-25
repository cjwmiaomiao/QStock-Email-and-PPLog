
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.MaterialMasterEntryImport")]
    //[FormScript("ppLog.MaterialMasterEntry")]
    [BasedOnRow(typeof(Entities.MaterialMasterEntryRow))]
    //[LookupScript(typeof(Lookups.MaterialMasterEntryYearMonthLookup))]
    public class MaterialMasterEntryImportForm
    {

        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}