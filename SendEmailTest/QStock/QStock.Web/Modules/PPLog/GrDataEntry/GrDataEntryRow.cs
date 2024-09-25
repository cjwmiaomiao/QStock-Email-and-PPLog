
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[gr_data_entry]")]
    [DisplayName("Gr Upload"), InstanceName("Gr Data Entry")]
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    public sealed class GrDataEntryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Business Unit"), Column("business_unit"), Size(255), QuickSearch]
        public String BusinessUnit
        {
            get { return Fields.BusinessUnit[this]; }
            set { Fields.BusinessUnit[this] = value; }
        }

        [DisplayName("Gr Info0"), Column("gr_info0")]
        public Double? GrInfo0
        {
            get { return Fields.GrInfo0[this]; }
            set { Fields.GrInfo0[this] = value; }
        }

        [DisplayName("Gr Info1"), Column("gr_info1")]
        public Double? GrInfo1
        {
            get { return Fields.GrInfo1[this]; }
            set { Fields.GrInfo1[this] = value; }
        }

        [DisplayName("Gr Info10"), Column("gr_info10")]
        public Double? GrInfo10
        {
            get { return Fields.GrInfo10[this]; }
            set { Fields.GrInfo10[this] = value; }
        }

        [DisplayName("Gr Info11"), Column("gr_info11")]
        public Double? GrInfo11
        {
            get { return Fields.GrInfo11[this]; }
            set { Fields.GrInfo11[this] = value; }
        }

        [DisplayName("Gr Info12"), Column("gr_info12")]
        public Double? GrInfo12
        {
            get { return Fields.GrInfo12[this]; }
            set { Fields.GrInfo12[this] = value; }
        }

        [DisplayName("Gr Info13"), Column("gr_info13")]
        public Double? GrInfo13
        {
            get { return Fields.GrInfo13[this]; }
            set { Fields.GrInfo13[this] = value; }
        }

        [DisplayName("Gr Info14"), Column("gr_info14")]
        public Double? GrInfo14
        {
            get { return Fields.GrInfo14[this]; }
            set { Fields.GrInfo14[this] = value; }
        }

        [DisplayName("Gr Info15"), Column("gr_info15")]
        public Double? GrInfo15
        {
            get { return Fields.GrInfo15[this]; }
            set { Fields.GrInfo15[this] = value; }
        }

        [DisplayName("Gr Info16"), Column("gr_info16")]
        public Double? GrInfo16
        {
            get { return Fields.GrInfo16[this]; }
            set { Fields.GrInfo16[this] = value; }
        }

        [DisplayName("Gr Info17"), Column("gr_info17")]
        public Double? GrInfo17
        {
            get { return Fields.GrInfo17[this]; }
            set { Fields.GrInfo17[this] = value; }
        }

        [DisplayName("Gr Info2"), Column("gr_info2")]
        public Double? GrInfo2
        {
            get { return Fields.GrInfo2[this]; }
            set { Fields.GrInfo2[this] = value; }
        }

        [DisplayName("Gr Info3"), Column("gr_info3")]
        public Double? GrInfo3
        {
            get { return Fields.GrInfo3[this]; }
            set { Fields.GrInfo3[this] = value; }
        }

        [DisplayName("Gr Info4"), Column("gr_info4")]
        public Double? GrInfo4
        {
            get { return Fields.GrInfo4[this]; }
            set { Fields.GrInfo4[this] = value; }
        }

        [DisplayName("Gr Info5"), Column("gr_info5")]
        public Double? GrInfo5
        {
            get { return Fields.GrInfo5[this]; }
            set { Fields.GrInfo5[this] = value; }
        }

        [DisplayName("Gr Info6"), Column("gr_info6")]
        public Double? GrInfo6
        {
            get { return Fields.GrInfo6[this]; }
            set { Fields.GrInfo6[this] = value; }
        }

        [DisplayName("Gr Info7"), Column("gr_info7")]
        public Double? GrInfo7
        {
            get { return Fields.GrInfo7[this]; }
            set { Fields.GrInfo7[this] = value; }
        }

        [DisplayName("Gr Info8"), Column("gr_info8")]
        public Double? GrInfo8
        {
            get { return Fields.GrInfo8[this]; }
            set { Fields.GrInfo8[this] = value; }
        }

        [DisplayName("Gr Info9"), Column("gr_info9")]
        public Double? GrInfo9
        {
            get { return Fields.GrInfo9[this]; }
            set { Fields.GrInfo9[this] = value; }
        }

        [DisplayName("Gr Info18"), Column("gr_info18")]
        public Double? GrInfo18
        {
            get { return Fields.GrInfo18[this]; }
            set { Fields.GrInfo18[this] = value; }
        }

        [DisplayName("Gr Info19"), Column("gr_info19")]
        public Double? GrInfo19
        {
            get { return Fields.GrInfo19[this]; }
            set { Fields.GrInfo19[this] = value; }
        }

        [DisplayName("Gr Info20"), Column("gr_info20")]
        public Double? GrInfo20
        {
            get { return Fields.GrInfo20[this]; }
            set { Fields.GrInfo20[this] = value; }
        }

        [DisplayName("Gr Info21"), Column("gr_info21")]
        public Double? GrInfo21
        {
            get { return Fields.GrInfo21[this]; }
            set { Fields.GrInfo21[this] = value; }
        }

        [DisplayName("Gr Info22"), Column("gr_info22")]
        public Double? GrInfo22
        {
            get { return Fields.GrInfo22[this]; }
            set { Fields.GrInfo22[this] = value; }
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

        [DisplayName("Profit Center"), Column("profit_center"), Size(255)]
        public String ProfitCenter
        {
            get { return Fields.ProfitCenter[this]; }
            set { Fields.ProfitCenter[this] = value; }
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

        [DisplayName("Year Month"), Column("year_month"), Size(255), NotNull]
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
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public GrDataEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField BusinessUnit;
            public DoubleField GrInfo0;
            public DoubleField GrInfo1;
            public DoubleField GrInfo10;
            public DoubleField GrInfo11;
            public DoubleField GrInfo12;
            public DoubleField GrInfo13;
            public DoubleField GrInfo14;
            public DoubleField GrInfo15;
            public DoubleField GrInfo16;
            public DoubleField GrInfo17;
            public DoubleField GrInfo2;
            public DoubleField GrInfo3;
            public DoubleField GrInfo4;
            public DoubleField GrInfo5;
            public DoubleField GrInfo6;
            public DoubleField GrInfo7;
            public DoubleField GrInfo8;
            public DoubleField GrInfo9;
            public DoubleField GrInfo18;
            public DoubleField GrInfo19;
            public DoubleField GrInfo20;
            public DoubleField GrInfo21;
            public DoubleField GrInfo22;
            public StringField Pdcl;
            public StringField ProductNumber;
            public StringField ProfitCenter;
            public StringField Type;
            public StringField Vendor;
            public StringField VendorNumber;
            public StringField YearMonth;
        }
    }
}
