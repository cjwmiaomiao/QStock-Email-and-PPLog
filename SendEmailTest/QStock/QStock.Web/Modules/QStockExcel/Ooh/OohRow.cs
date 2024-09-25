
namespace QStock.QStockExcel.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("QStockExcel"), TableName("[dbo].[OOH]")]
    [DisplayName("OOH"), InstanceName("Ooh")]
    [ReadPermission("QStockExcel:General")]
    [ModifyPermission("QStockExcel:General")]
    public sealed class OohRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("DC Business Unit (MD"), Size(255)]

        public String DCBusinessUnit
        {
            get { return Fields.DCBusinessUnit[this]; }
            set { Fields.DCBusinessUnit[this] = value; }
        }

        [DisplayName("Sold-to Party"), Size(255)]

        public String SoldtoParty
        {
            get { return Fields.SoldtoParty[this]; }
            set { Fields.SoldtoParty[this] = value; }
        }

        [DisplayName("Sold-to Party name"), Size(255)]

        public String SoldtoPartyname
        {
            get { return Fields.SoldtoPartyname[this]; }
            set { Fields.SoldtoPartyname[this] = value; }
        }

        [DisplayName("Cust. PO No. (MD)"), Size(255)]

        public String CustPONo
        {
            get { return Fields.CustPONo[this]; }
            set { Fields.CustPONo[this] = value; }
        }


        [DisplayName("Customer material"), Size(255)]

        public String CustomerMaterial
        {
            get { return Fields.CustomerMaterial[this]; }
            set { Fields.CustomerMaterial[this] = value; }
        }


        [DisplayName("Sales Order"), Size(255), QuickSearch]
        public String SalesOrder
        {
            get { return Fields.SalesOrder[this]; }
            set { Fields.SalesOrder[this] = value; }
        }

        [DisplayName("Sales Order Item"), Size(255)]

        public String SalesOrderItem
        {
            get { return Fields.SalesOrderItem[this]; }
            set { Fields.SalesOrderItem[this] = value; }
        }

        [DisplayName("Material"), Size(255)]
        public String Material
        {
            get { return Fields.Material[this]; }
            set { Fields.Material[this] = value; }
        }

        [DisplayName("Material Description"), Size(255)]
        public String MaterialDescription
        {
            get { return Fields.MaterialDescription[this]; }
            set { Fields.MaterialDescription[this] = value; }
        }

        [DisplayName("Item Category"), Size(255)]
        public String ItemCategory
        {
            get { return Fields.ItemCategory[this]; }
            set { Fields.ItemCategory[this] = value; }
        }

        [DisplayName("Calendar day"), Size(255)]

        public DateTime? CalendarDay
        {
            get { return Fields.CalendarDay[this]; }
            set { Fields.CalendarDay[this] = value; }
        }

        [DisplayName("First Requested date"), Size(255)]

        public DateTime? FirstRequestedDate
        {
            get { return Fields.FirstRequestedDate[this]; }
            set { Fields.FirstRequestedDate[this] = value; }
        }

        [DisplayName("SO Created On (MD)"), Size(255)]

        public DateTime? SOCreatedOn
        {
            get { return Fields.SOCreatedOn[this]; }
            set { Fields.SOCreatedOn[this] = value; }
        }

        [DisplayName("Sales Employee"), Size(255)]
        public String SalesEmployee
        {
            get { return Fields.SalesEmployee[this]; }
            set { Fields.SalesEmployee[this] = value; }
        }

        [DisplayName("Sales Employeename"), Size(255)]
        public String SalesEmployeename
        {
            get { return Fields.SalesEmployeename[this]; }
            set { Fields.SalesEmployeename[this] = value; }
        }

        [DisplayName("RF Qty (Base Unit)"), Size(255)]

        public Int32? RFQty
        {
            get { return Fields.RFQty[this]; }
            set { Fields.RFQty[this] = value; }
        }

        [DisplayName("RF Netvalue (Stat. Curr.)"), Size(255)]

        public Double? RFNetvalue
        {
            get { return Fields.RFNetvalue[this]; }
            set { Fields.RFNetvalue[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Material; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OohRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField SalesOrder;
            public StringField SalesOrderItem;
            public StringField Material;
            public StringField MaterialDescription;
            public StringField ItemCategory;
            public StringField SalesEmployee;
            public StringField SalesEmployeename;
            public StringField DCBusinessUnit;
            public StringField SoldtoParty;
            public StringField SoldtoPartyname;
            public StringField CustPONo;
            public StringField CustomerMaterial;
            public DateTimeField CalendarDay;
            public DateTimeField FirstRequestedDate;
            public DateTimeField SOCreatedOn;
            public Int32Field RFQty;
            public DoubleField RFNetvalue;
        }
    }
}
