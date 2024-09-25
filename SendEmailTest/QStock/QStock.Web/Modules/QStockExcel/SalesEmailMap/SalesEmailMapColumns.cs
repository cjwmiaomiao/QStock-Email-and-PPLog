
namespace QStock.QStockExcel.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("QStockExcel.SalesEmailMap")]
    [BasedOnRow(typeof(Entities.SalesEmailMapRow), CheckNames = true)]
    public class SalesEmailMapColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String SalesEmployee { get; set; }
        public String SalesEmail { get; set; }
    }
}