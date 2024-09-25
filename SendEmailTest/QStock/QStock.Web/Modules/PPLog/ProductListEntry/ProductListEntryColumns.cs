
namespace QStock.PPLog.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PPLog.ProductListEntry")]
    [BasedOnRow(typeof(Entities.ProductListEntryRow), CheckNames = true)]
    public class ProductListEntryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String ProductNumber { get; set; }
        public String Type { get; set; }
        public String YearMonth { get; set; }
    }
}