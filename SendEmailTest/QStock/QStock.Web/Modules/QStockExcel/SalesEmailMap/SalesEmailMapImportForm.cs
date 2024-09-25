
namespace QStock.QStockExcel.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("QStockExcel.SalesEmailMapImport")]
    public class SalesEmailMapImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}