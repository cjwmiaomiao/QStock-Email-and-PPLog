
namespace QStock.QStockExcel.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("QStockExcel"), TableName("[dbo].[SalesEmailMap]")]
    [DisplayName("Sales Email Map"), InstanceName("Sales Email Map")]
    [ReadPermission("QStockExcel:General")]
    [ModifyPermission("QStockExcel:General")]
    public sealed class SalesEmailMapRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Sales Employee"), Size(50), NotNull, QuickSearch]
        public String SalesEmployee
        {
            get { return Fields.SalesEmployee[this]; }
            set { Fields.SalesEmployee[this] = value; }
        }

        [DisplayName("Sales Email"), Size(50), NotNull]
        public String SalesEmail
        {
            get { return Fields.SalesEmail[this]; }
            set { Fields.SalesEmail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SalesEmployee; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SalesEmailMapRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField SalesEmployee;
            public StringField SalesEmail;
        }
    }
}
