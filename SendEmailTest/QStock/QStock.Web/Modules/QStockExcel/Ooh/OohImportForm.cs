
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Web;

    [FormScript("QStockExcel.OohImport")]
    public class OohImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }

}