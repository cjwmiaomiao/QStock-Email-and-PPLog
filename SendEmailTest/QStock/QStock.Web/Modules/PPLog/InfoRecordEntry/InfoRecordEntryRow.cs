
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[info_record_entry]")]
    [DisplayName("Info Record Upload"), InstanceName("Info Record Entry")]
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    public sealed class InfoRecordEntryRow : Row, IIdRow, INameRow
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

        [DisplayName("Vendor"), Column("vendor"), Size(255)]
        public String Vendor
        {
            get { return Fields.Vendor[this]; }
            set { Fields.Vendor[this] = value; }
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

        public InfoRecordEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField ProductNumber;
            public StringField Vendor;
        }
    }
}
