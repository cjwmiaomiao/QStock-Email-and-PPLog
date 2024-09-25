
namespace QStock.DB2.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DB2"), Module("DB2"), TableName("[dbo].[OOH]")]
    [DisplayName("Ooh"), InstanceName("Ooh")]
    [ReadPermission("OOH:General")]
    [ModifyPermission("OOH:General")]
    public sealed class OohRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Material"), Size(50), NotNull, QuickSearch]
        public String Material
        {
            get { return Fields.Material[this]; }
            set { Fields.Material[this] = value; }
        }

        [DisplayName("Sales"), Size(50), NotNull]
        public String Sales
        {
            get { return Fields.Sales[this]; }
            set { Fields.Sales[this] = value; }
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
            public StringField Material;
            public StringField Sales;
        }
    }
}
