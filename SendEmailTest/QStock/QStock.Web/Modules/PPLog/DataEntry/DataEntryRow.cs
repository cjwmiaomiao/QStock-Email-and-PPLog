
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[data_entry]")]
    [DisplayName("PP Upload"), InstanceName("PP Upload")]//修改页面标题名
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    [LookupScript("PPLog.DataEntry")]

    public sealed class DataEntryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity, QuickSearch]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("DC Business Unit"), Column("business_unit"), Size(255)]
        public String BusinessUnit
        {
            get { return Fields.BusinessUnit[this]; }
            set { Fields.BusinessUnit[this] = value; }
        }

        [DisplayName("Pdcl"), Column("pdcl"), Size(255)]
        public String Pdcl
        {
            get { return Fields.Pdcl[this]; }
            set { Fields.Pdcl[this] = value; }
        }

        [DisplayName("Pp0"), Column("pp0")]
        public Int32? Pp0
        {
            get { return Fields.Pp0[this]; }
            set { Fields.Pp0[this] = value; }
        }

        [DisplayName("Pp1"), Column("pp1")]
        public Int32? Pp1
        {
            get { return Fields.Pp1[this]; }
            set { Fields.Pp1[this] = value; }
        }

        [DisplayName("Pp10"), Column("pp10")]
        public Int32? Pp10
        {
            get { return Fields.Pp10[this]; }
            set { Fields.Pp10[this] = value; }
        }

        [DisplayName("Pp11"), Column("pp11")]
        public Int32? Pp11
        {
            get { return Fields.Pp11[this]; }
            set { Fields.Pp11[this] = value; }
        }

        [DisplayName("Pp12"), Column("pp12")]
        public Int32? Pp12
        {
            get { return Fields.Pp12[this]; }
            set { Fields.Pp12[this] = value; }
        }

        [DisplayName("Pp13"), Column("pp13")]
        public Int32? Pp13
        {
            get { return Fields.Pp13[this]; }
            set { Fields.Pp13[this] = value; }
        }

        [DisplayName("Pp14"), Column("pp14")]
        public Int32? Pp14
        {
            get { return Fields.Pp14[this]; }
            set { Fields.Pp14[this] = value; }
        }

        [DisplayName("Pp15"), Column("pp15")]
        public Int32? Pp15
        {
            get { return Fields.Pp15[this]; }
            set { Fields.Pp15[this] = value; }
        }

        [DisplayName("Pp16"), Column("pp16")]
        public Int32? Pp16
        {
            get { return Fields.Pp16[this]; }
            set { Fields.Pp16[this] = value; }
        }

        [DisplayName("Pp17"), Column("pp17")]
        public Int32? Pp17
        {
            get { return Fields.Pp17[this]; }
            set { Fields.Pp17[this] = value; }
        }

        [DisplayName("Pp18"), Column("pp18")]
        public Int32? Pp18
        {
            get { return Fields.Pp18[this]; }
            set { Fields.Pp18[this] = value; }
        }

        [DisplayName("Pp2"), Column("pp2")]
        public Int32? Pp2
        {
            get { return Fields.Pp2[this]; }
            set { Fields.Pp2[this] = value; }
        }

        [DisplayName("Pp3"), Column("pp3")]
        public Int32? Pp3
        {
            get { return Fields.Pp3[this]; }
            set { Fields.Pp3[this] = value; }
        }

        [DisplayName("Pp4"), Column("pp4")]
        public Int32? Pp4
        {
            get { return Fields.Pp4[this]; }
            set { Fields.Pp4[this] = value; }
        }

        [DisplayName("Pp5"), Column("pp5")]
        public Int32? Pp5
        {
            get { return Fields.Pp5[this]; }
            set { Fields.Pp5[this] = value; }
        }

        [DisplayName("Pp6"), Column("pp6")]
        public Int32? Pp6
        {
            get { return Fields.Pp6[this]; }
            set { Fields.Pp6[this] = value; }
        }

        [DisplayName("Pp7"), Column("pp7")]
        public Int32? Pp7
        {
            get { return Fields.Pp7[this]; }
            set { Fields.Pp7[this] = value; }
        }

        [DisplayName("Pp8"), Column("pp8")]
        public Int32? Pp8
        {
            get { return Fields.Pp8[this]; }
            set { Fields.Pp8[this] = value; }
        }

        [DisplayName("Pp9"), Column("pp9")]
        public Int32? Pp9
        {
            get { return Fields.Pp9[this]; }
            set { Fields.Pp9[this] = value; }
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

        [DisplayName("Tb0"), Column("tb0")]
        public Int32? Tb0
        {
            get { return Fields.Tb0[this]; }
            set { Fields.Tb0[this] = value; }
        }

        [DisplayName("Tb1"), Column("tb1")]
        public Int32? Tb1
        {
            get { return Fields.Tb1[this]; }
            set { Fields.Tb1[this] = value; }
        }

        [DisplayName("Tb10"), Column("tb10")]
        public Int32? Tb10
        {
            get { return Fields.Tb10[this]; }
            set { Fields.Tb10[this] = value; }
        }

        [DisplayName("Tb11"), Column("tb11")]
        public Int32? Tb11
        {
            get { return Fields.Tb11[this]; }
            set { Fields.Tb11[this] = value; }
        }

        [DisplayName("Tb12"), Column("tb12")]
        public Int32? Tb12
        {
            get { return Fields.Tb12[this]; }
            set { Fields.Tb12[this] = value; }
        }

        [DisplayName("Tb13"), Column("tb13")]
        public Int32? Tb13
        {
            get { return Fields.Tb13[this]; }
            set { Fields.Tb13[this] = value; }
        }

        [DisplayName("Tb14"), Column("tb14")]
        public Int32? Tb14
        {
            get { return Fields.Tb14[this]; }
            set { Fields.Tb14[this] = value; }
        }

        [DisplayName("Tb15"), Column("tb15")]
        public Int32? Tb15
        {
            get { return Fields.Tb15[this]; }
            set { Fields.Tb15[this] = value; }
        }

        [DisplayName("Tb16"), Column("tb16")]
        public Int32? Tb16
        {
            get { return Fields.Tb16[this]; }
            set { Fields.Tb16[this] = value; }
        }

        [DisplayName("Tb17"), Column("tb17")]
        public Int32? Tb17
        {
            get { return Fields.Tb17[this]; }
            set { Fields.Tb17[this] = value; }
        }

        [DisplayName("Tb18"), Column("tb18")]
        public Int32? Tb18
        {
            get { return Fields.Tb18[this]; }
            set { Fields.Tb18[this] = value; }
        }

        [DisplayName("Tb19"), Column("tb19")]
        public Int32? Tb19
        {
            get { return Fields.Tb19[this]; }
            set { Fields.Tb19[this] = value; }
        }

        [DisplayName("Tb2"), Column("tb2")]
        public Int32? Tb2
        {
            get { return Fields.Tb2[this]; }
            set { Fields.Tb2[this] = value; }
        }

        [DisplayName("Tb3"), Column("tb3")]
        public Int32? Tb3
        {
            get { return Fields.Tb3[this]; }
            set { Fields.Tb3[this] = value; }
        }

        [DisplayName("Tb4"), Column("tb4")]
        public Int32? Tb4
        {
            get { return Fields.Tb4[this]; }
            set { Fields.Tb4[this] = value; }
        }

        [DisplayName("Tb5"), Column("tb5")]
        public Int32? Tb5
        {
            get { return Fields.Tb5[this]; }
            set { Fields.Tb5[this] = value; }
        }

        [DisplayName("Tb6"), Column("tb6")]
        public Int32? Tb6
        {
            get { return Fields.Tb6[this]; }
            set { Fields.Tb6[this] = value; }
        }

        [DisplayName("Tb7"), Column("tb7")]
        public Int32? Tb7
        {
            get { return Fields.Tb7[this]; }
            set { Fields.Tb7[this] = value; }
        }

        [DisplayName("Tb8"), Column("tb8")]
        public Int32? Tb8
        {
            get { return Fields.Tb8[this]; }
            set { Fields.Tb8[this] = value; }
        }

        [DisplayName("Tb9"), Column("tb9")]
        public Int32? Tb9
        {
            get { return Fields.Tb9[this]; }
            set { Fields.Tb9[this] = value; }
        }

        [DisplayName("Type"), Column("type"), Size(255)]
        public String Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [DisplayName("Vendor"), Column("vendor"), Size(255)]
        public String Vendor
        {
            get { return Fields.Vendor[this]; }
            set { Fields.Vendor[this] = value; }
        }

        [DisplayName("Vendor Number"), Column("vendor_number"), Size(255)]
        public String VendorNumber
        {
            get { return Fields.VendorNumber[this]; }
            set { Fields.VendorNumber[this] = value; }
        }

        [DisplayName("Year Month"), Column("year_month"), Size(255),LookupInclude]
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
            get { return Fields.BusinessUnit; }
            //get { return Fields.YearMonth; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DataEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField BusinessUnit;
            public StringField Pdcl;
            public Int32Field Pp0;
            public Int32Field Pp1;
            public Int32Field Pp10;
            public Int32Field Pp11;
            public Int32Field Pp12;
            public Int32Field Pp13;
            public Int32Field Pp14;
            public Int32Field Pp15;
            public Int32Field Pp16;
            public Int32Field Pp17;
            public Int32Field Pp18;
            public Int32Field Pp2;
            public Int32Field Pp3;
            public Int32Field Pp4;
            public Int32Field Pp5;
            public Int32Field Pp6;
            public Int32Field Pp7;
            public Int32Field Pp8;
            public Int32Field Pp9;
            public StringField ProductNumber;
            public StringField ProfitCenter;
            public Int32Field Tb0;
            public Int32Field Tb1;
            public Int32Field Tb10;
            public Int32Field Tb11;
            public Int32Field Tb12;
            public Int32Field Tb13;
            public Int32Field Tb14;
            public Int32Field Tb15;
            public Int32Field Tb16;
            public Int32Field Tb17;
            public Int32Field Tb18;
            public Int32Field Tb19;
            public Int32Field Tb2;
            public Int32Field Tb3;
            public Int32Field Tb4;
            public Int32Field Tb5;
            public Int32Field Tb6;
            public Int32Field Tb7;
            public Int32Field Tb8;
            public Int32Field Tb9;
            public StringField Type;
            public StringField Vendor;
            public StringField VendorNumber;
            public StringField YearMonth;
        }
    }
}
