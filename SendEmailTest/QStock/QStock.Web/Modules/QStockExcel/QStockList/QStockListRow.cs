
namespace QStock.QStockExcel.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("QStockExcel"), TableName("[dbo].[QStockList]")]
    [DisplayName("Q Stock List"), InstanceName("Q Stock List")]
    [ReadPermission("QStockExcel:General")]
    [ModifyPermission("QStockExcel:General")]
    public sealed class QStockListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Material"), Size(500), NotNull, QuickSearch]
        public String Material
        {
            get { return Fields.Material[this]; }
            set { Fields.Material[this] = value; }
        }

        [DisplayName("Plant"), Size(50), NotNull]
        public String Plant
        {
            get { return Fields.Plant[this]; }
            set { Fields.Plant[this] = value; }
        }

        [DisplayName("Stock Category"), Size(50), NotNull]
        public String StockCategory
        {
            get { return Fields.StockCategory[this]; }
            set { Fields.StockCategory[this] = value; }
        }

        [DisplayName("Available Stock"), Size(18), Scale(3), NotNull]
        public Decimal? AvailableStock
        {
            get { return Fields.AvailableStock[this]; }
            set { Fields.AvailableStock[this] = value; }
        }

        [DisplayName("Gr Date"), Column("GRDate"), NotNull]
        public DateTime? GrDate
        {
            get { return Fields.GrDate[this]; }
            set { Fields.GrDate[this] = value; }
        }

        [DisplayName("Is Over Two Years")]
        public Boolean? IsOverTwoYears
        {
            get { return Fields.IsOverTwoYears[this]; }
            set { Fields.IsOverTwoYears[this] = value; }
        }

        [DisplayName("Reason")]
        public String Reason
        {
            get { return Fields.Reason[this]; }
            set { Fields.Reason[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
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

        public QStockListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Material;
            public StringField Plant;
            public StringField StockCategory;
            public DecimalField AvailableStock;
            public DateTimeField GrDate;
            public BooleanField IsOverTwoYears;
            public StringField Reason;
            public DateTimeField InsertDate;
        }
    }
}
