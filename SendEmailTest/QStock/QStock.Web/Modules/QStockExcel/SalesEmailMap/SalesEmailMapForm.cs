
namespace QStock.QStockExcel.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("QStockExcel.SalesEmailMap")]
    [BasedOnRow(typeof(Entities.SalesEmailMapRow), CheckNames = true)]
    public class SalesEmailMapForm
    {
        public String SalesEmployee { get; set; }
        public String SalesEmail { get; set; }
    }
}