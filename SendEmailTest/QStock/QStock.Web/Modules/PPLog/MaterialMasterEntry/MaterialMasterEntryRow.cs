
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[material_master_entry]")]
    [DisplayName("Material Master Upload"), InstanceName("Material Master Entry")]
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    public sealed class MaterialMasterEntryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Pdcl"), Column("pdcl"), Size(255), QuickSearch]
        public String Pdcl
        {
            get { return Fields.Pdcl[this]; }
            set { Fields.Pdcl[this] = value; }
        }

        [DisplayName("Product Number"), Column("product_number"), Size(255)]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }

        [DisplayName("Profit Center"), Column("profit_center"), Size(255)]
        public String ProfitCenter
        {
            get { return Fields.ProfitCenter[this]; }
            set { Fields.ProfitCenter[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Pdcl; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaterialMasterEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Pdcl;
            public StringField ProductNumber;
            public StringField ProfitCenter;
        }
    }
}
