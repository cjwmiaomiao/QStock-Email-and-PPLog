
namespace QStock.PPLog.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PPLog.ProductListEntry")]
    [BasedOnRow(typeof(Entities.ProductListEntryRow), CheckNames = true)]
    public class ProductListEntryForm
    {
        public String ProductNumber { get; set; }
        public String Type { get; set; }
        public String YearMonth { get; set; }
    }
}