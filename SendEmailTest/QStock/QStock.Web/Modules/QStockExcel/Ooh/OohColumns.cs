
namespace QStock.QStockExcel.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("QStockExcel.Ooh")]
    [BasedOnRow(typeof(Entities.OohRow), CheckNames = true)]
    public class OohColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public String SalesOrder { get; set; }
        public String SalesOrderItem { get; set; }
        public String Material { get; set; }
        public String MaterialDescription { get; set; }
        public String ItemCategory { get; set; }
        public String SalesEmployee { get; set; }
        public String SalesEmployeename { get; set; }
        public String DCBusinessUnit { get; set; }
        public String SoldtoParty { get; set; }
        public String SoldtoPartyname { get; set; }
        public String CustPONo { get; set; }
        public String CustomerMaterial { get; set; }
        public DateTime CalendarDay { get; set; }
        public DateTime FirstRequestedDate { get; set; }
        public DateTime SOCreatedOn { get; set; }
        public Int32 RFQty { get; set; }
        public double RFNetvalue { get; set; }
    }
}