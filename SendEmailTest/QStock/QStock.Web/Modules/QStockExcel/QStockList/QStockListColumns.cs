
namespace QStock.QStockExcel.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("QStockExcel.QStockList")]
    [BasedOnRow(typeof(Entities.QStockListRow), CheckNames = true)]
    public class QStockListColumns
    {
        public String Material { get; set; }
        public String Plant { get; set; }
        public String StockCategory { get; set; }
        public Decimal AvailableStock { get; set; }
        public DateTime GrDate { get; set; }
        public Boolean IsOverTwoYears { get; set; }
        public String Reason { get; set; }
        public DateTime InsertDate { get; set; }
    }
}