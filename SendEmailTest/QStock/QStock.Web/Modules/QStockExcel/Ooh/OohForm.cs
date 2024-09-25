
namespace QStock.QStockExcel.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("QStockExcel.Ooh")]
    [BasedOnRow(typeof(Entities.OohRow), CheckNames = true)]
    public class OohForm
    {

        public String SalesOrderItem { get; set; }
        public String Material { get; set; }
        public String MaterialDescription { get; set; }
        public String ItemCategory { get; set; }
        public String SalesEmployee { get; set; }
        public String SalesEmployeename { get; set; }
    }
}