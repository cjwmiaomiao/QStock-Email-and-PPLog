
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[product_list_entry]")]
    [DisplayName("Product List Upload"), InstanceName("Product List Upload")]
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    [LookupScript("PPLog.ProductListEntry")]
    public sealed class ProductListEntryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Product Number"), Column("product_number"), Size(255), QuickSearch]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }

        [DisplayName("Type"), Column("type"), Size(255)]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Year Month"), Column("year_month"), Size(255), LookupInclude]
        public String YearMonth
        {
            get { return Fields.YearMonth[this]; }
            set { Fields.YearMonth[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductListEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField ProductNumber;
            public StringField Type;
            public StringField YearMonth;
        }
    }
}
