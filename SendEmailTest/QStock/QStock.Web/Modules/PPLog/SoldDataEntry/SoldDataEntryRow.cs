
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[sold_data_entry]")]
    [DisplayName("Sold Data Upload"), InstanceName("Sold Data Entry")]
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    public sealed class SoldDataEntryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Mrpcontroller"), Column("mrpcontroller"), Size(255), QuickSearch]
        public String Mrpcontroller
        {
            get { return Fields.Mrpcontroller[this]; }
            set { Fields.Mrpcontroller[this] = value; }
        }

        [DisplayName("Pdcl"), Column("pdcl"), Size(255)]
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

        [DisplayName("Sold Info0"), Column("sold_info0")]
        public Double? SoldInfo0
        {
            get { return Fields.SoldInfo0[this]; }
            set { Fields.SoldInfo0[this] = value; }
        }

        [DisplayName("Sold Info1"), Column("sold_info1")]
        public Double? SoldInfo1
        {
            get { return Fields.SoldInfo1[this]; }
            set { Fields.SoldInfo1[this] = value; }
        }

        [DisplayName("Sold Info10"), Column("sold_info10")]
        public Double? SoldInfo10
        {
            get { return Fields.SoldInfo10[this]; }
            set { Fields.SoldInfo10[this] = value; }
        }

        [DisplayName("Sold Info11"), Column("sold_info11")]
        public Double? SoldInfo11
        {
            get { return Fields.SoldInfo11[this]; }
            set { Fields.SoldInfo11[this] = value; }
        }

        [DisplayName("Sold Info12"), Column("sold_info12")]
        public Double? SoldInfo12
        {
            get { return Fields.SoldInfo12[this]; }
            set { Fields.SoldInfo12[this] = value; }
        }

        [DisplayName("Sold Info13"), Column("sold_info13")]
        public Double? SoldInfo13
        {
            get { return Fields.SoldInfo13[this]; }
            set { Fields.SoldInfo13[this] = value; }
        }

        [DisplayName("Sold Info14"), Column("sold_info14")]
        public Double? SoldInfo14
        {
            get { return Fields.SoldInfo14[this]; }
            set { Fields.SoldInfo14[this] = value; }
        }

        [DisplayName("Sold Info15"), Column("sold_info15")]
        public Double? SoldInfo15
        {
            get { return Fields.SoldInfo15[this]; }
            set { Fields.SoldInfo15[this] = value; }
        }

        [DisplayName("Sold Info16"), Column("sold_info16")]
        public Double? SoldInfo16
        {
            get { return Fields.SoldInfo16[this]; }
            set { Fields.SoldInfo16[this] = value; }
        }

        [DisplayName("Sold Info17"), Column("sold_info17")]
        public Double? SoldInfo17
        {
            get { return Fields.SoldInfo17[this]; }
            set { Fields.SoldInfo17[this] = value; }
        }

        [DisplayName("Sold Info2"), Column("sold_info2")]
        public Double? SoldInfo2
        {
            get { return Fields.SoldInfo2[this]; }
            set { Fields.SoldInfo2[this] = value; }
        }

        [DisplayName("Sold Info3"), Column("sold_info3")]
        public Double? SoldInfo3
        {
            get { return Fields.SoldInfo3[this]; }
            set { Fields.SoldInfo3[this] = value; }
        }

        [DisplayName("Sold Info4"), Column("sold_info4")]
        public Double? SoldInfo4
        {
            get { return Fields.SoldInfo4[this]; }
            set { Fields.SoldInfo4[this] = value; }
        }

        [DisplayName("Sold Info5"), Column("sold_info5")]
        public Double? SoldInfo5
        {
            get { return Fields.SoldInfo5[this]; }
            set { Fields.SoldInfo5[this] = value; }
        }

        [DisplayName("Sold Info6"), Column("sold_info6")]
        public Double? SoldInfo6
        {
            get { return Fields.SoldInfo6[this]; }
            set { Fields.SoldInfo6[this] = value; }
        }

        [DisplayName("Sold Info7"), Column("sold_info7")]
        public Double? SoldInfo7
        {
            get { return Fields.SoldInfo7[this]; }
            set { Fields.SoldInfo7[this] = value; }
        }

        [DisplayName("Sold Info8"), Column("sold_info8")]
        public Double? SoldInfo8
        {
            get { return Fields.SoldInfo8[this]; }
            set { Fields.SoldInfo8[this] = value; }
        }

        [DisplayName("Sold Info9"), Column("sold_info9")]
        public Double? SoldInfo9
        {
            get { return Fields.SoldInfo9[this]; }
            set { Fields.SoldInfo9[this] = value; }
        }

        [DisplayName("Sold Info18"), Column("sold_info18")]
        public Double? SoldInfo18
        {
            get { return Fields.SoldInfo18[this]; }
            set { Fields.SoldInfo18[this] = value; }
        }

        [DisplayName("Sold Info19"), Column("sold_info19")]
        public Double? SoldInfo19
        {
            get { return Fields.SoldInfo19[this]; }
            set { Fields.SoldInfo19[this] = value; }
        }

        [DisplayName("Sold Info20"), Column("sold_info20")]
        public Double? SoldInfo20
        {
            get { return Fields.SoldInfo20[this]; }
            set { Fields.SoldInfo20[this] = value; }
        }

        [DisplayName("Sold Info21"), Column("sold_info21")]
        public Double? SoldInfo21
        {
            get { return Fields.SoldInfo21[this]; }
            set { Fields.SoldInfo21[this] = value; }
        }

        [DisplayName("Sold Info22"), Column("sold_info22")]
        public Double? SoldInfo22
        {
            get { return Fields.SoldInfo22[this]; }
            set { Fields.SoldInfo22[this] = value; }
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

        [DisplayName("Year Month"), Column("year_month"), Size(255),NotNull]
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
            get { return Fields.Mrpcontroller; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SoldDataEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Mrpcontroller;
            public StringField Pdcl;
            public StringField ProductNumber;
            public DoubleField SoldInfo0;
            public DoubleField SoldInfo1;
            public DoubleField SoldInfo10;
            public DoubleField SoldInfo11;
            public DoubleField SoldInfo12;
            public DoubleField SoldInfo13;
            public DoubleField SoldInfo14;
            public DoubleField SoldInfo15;
            public DoubleField SoldInfo16;
            public DoubleField SoldInfo17;
            public DoubleField SoldInfo2;
            public DoubleField SoldInfo3;
            public DoubleField SoldInfo4;
            public DoubleField SoldInfo5;
            public DoubleField SoldInfo6;
            public DoubleField SoldInfo7;
            public DoubleField SoldInfo8;
            public DoubleField SoldInfo9;
            public DoubleField SoldInfo18;
            public DoubleField SoldInfo19;
            public DoubleField SoldInfo20;
            public DoubleField SoldInfo21;
            public DoubleField SoldInfo22;
            public StringField Type;
            public StringField Vendor;
            public StringField VendorNumber;
            public StringField YearMonth;
        }
    }
}
