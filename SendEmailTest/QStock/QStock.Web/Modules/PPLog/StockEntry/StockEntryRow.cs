
namespace QStock.PPLog.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("PP_Log"), Module("PPLog"), TableName("[dbo].[stock_entry]")]
    [DisplayName("Stock Upload"), InstanceName("Stock Entry")]
    [ReadPermission("PPLog:General")]
    [ModifyPermission("PPLog:General")]
    public sealed class StockEntryRow : Row, IIdRow, INameRow
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

        [DisplayName("Product Number"), Column("product_number"), Size(255)]
        public String ProductNumber
        {
            get { return Fields.ProductNumber[this]; }
            set { Fields.ProductNumber[this] = value; }
        }

        [DisplayName("Stock Info0"), Column("stock_info0")]
        public Double? StockInfo0
        {
            get { return Fields.StockInfo0[this]; }
            set { Fields.StockInfo0[this] = value; }
        }

        [DisplayName("Stock Info1"), Column("stock_info1")]
        public Double? StockInfo1
        {
            get { return Fields.StockInfo1[this]; }
            set { Fields.StockInfo1[this] = value; }
        }

        [DisplayName("Stock Info10"), Column("stock_info10")]
        public Double? StockInfo10
        {
            get { return Fields.StockInfo10[this]; }
            set { Fields.StockInfo10[this] = value; }
        }

        [DisplayName("Stock Info11"), Column("stock_info11")]
        public Double? StockInfo11
        {
            get { return Fields.StockInfo11[this]; }
            set { Fields.StockInfo11[this] = value; }
        }

        [DisplayName("Stock Info12"), Column("stock_info12")]
        public Double? StockInfo12
        {
            get { return Fields.StockInfo12[this]; }
            set { Fields.StockInfo12[this] = value; }
        }

        [DisplayName("Stock Info13"), Column("stock_info13")]
        public Double? StockInfo13
        {
            get { return Fields.StockInfo13[this]; }
            set { Fields.StockInfo13[this] = value; }
        }

        [DisplayName("Stock Info14"), Column("stock_info14")]
        public Double? StockInfo14
        {
            get { return Fields.StockInfo14[this]; }
            set { Fields.StockInfo14[this] = value; }
        }

        [DisplayName("Stock Info15"), Column("stock_info15")]
        public Double? StockInfo15
        {
            get { return Fields.StockInfo15[this]; }
            set { Fields.StockInfo15[this] = value; }
        }

        [DisplayName("Stock Info16"), Column("stock_info16")]
        public Double? StockInfo16
        {
            get { return Fields.StockInfo16[this]; }
            set { Fields.StockInfo16[this] = value; }
        }

        [DisplayName("Stock Info17"), Column("stock_info17")]
        public Double? StockInfo17
        {
            get { return Fields.StockInfo17[this]; }
            set { Fields.StockInfo17[this] = value; }
        }

        [DisplayName("Stock Info2"), Column("stock_info2")]
        public Double? StockInfo2
        {
            get { return Fields.StockInfo2[this]; }
            set { Fields.StockInfo2[this] = value; }
        }

        [DisplayName("Stock Info3"), Column("stock_info3")]
        public Double? StockInfo3
        {
            get { return Fields.StockInfo3[this]; }
            set { Fields.StockInfo3[this] = value; }
        }

        [DisplayName("Stock Info4"), Column("stock_info4")]
        public Double? StockInfo4
        {
            get { return Fields.StockInfo4[this]; }
            set { Fields.StockInfo4[this] = value; }
        }

        [DisplayName("Stock Info5"), Column("stock_info5")]
        public Double? StockInfo5
        {
            get { return Fields.StockInfo5[this]; }
            set { Fields.StockInfo5[this] = value; }
        }

        [DisplayName("Stock Info6"), Column("stock_info6")]
        public Double? StockInfo6
        {
            get { return Fields.StockInfo6[this]; }
            set { Fields.StockInfo6[this] = value; }
        }

        [DisplayName("Stock Info7"), Column("stock_info7")]
        public Double? StockInfo7
        {
            get { return Fields.StockInfo7[this]; }
            set { Fields.StockInfo7[this] = value; }
        }

        [DisplayName("Stock Info8"), Column("stock_info8")]
        public Double? StockInfo8
        {
            get { return Fields.StockInfo8[this]; }
            set { Fields.StockInfo8[this] = value; }
        }

        [DisplayName("Stock Info9"), Column("stock_info9")]
        public Double? StockInfo9
        {
            get { return Fields.StockInfo9[this]; }
            set { Fields.StockInfo9[this] = value; }
        }

        [DisplayName("Stock Info18"), Column("stock_info18")]
        public Double? StockInfo18
        {
            get { return Fields.StockInfo18[this]; }
            set { Fields.StockInfo18[this] = value; }
        }

        [DisplayName("Stock Info19"), Column("stock_info19")]
        public Double? StockInfo19
        {
            get { return Fields.StockInfo19[this]; }
            set { Fields.StockInfo19[this] = value; }
        }

        [DisplayName("Stock Info20"), Column("stock_info20")]
        public Double? StockInfo20
        {
            get { return Fields.StockInfo20[this]; }
            set { Fields.StockInfo20[this] = value; }
        }

        [DisplayName("Stock Info21"), Column("stock_info21")]
        public Double? StockInfo21
        {
            get { return Fields.StockInfo21[this]; }
            set { Fields.StockInfo21[this] = value; }
        }

        [DisplayName("Stock Info22"), Column("stock_info22")]
        public Double? StockInfo22
        {
            get { return Fields.StockInfo22[this]; }
            set { Fields.StockInfo22[this] = value; }
        }

        [DisplayName("Totalstock0"), Column("totalstock0")]
        public Double? Totalstock0
        {
            get { return Fields.Totalstock0[this]; }
            set { Fields.Totalstock0[this] = value; }
        }

        [DisplayName("Totalstock1"), Column("totalstock1")]
        public Double? Totalstock1
        {
            get { return Fields.Totalstock1[this]; }
            set { Fields.Totalstock1[this] = value; }
        }

        [DisplayName("Totalstock10"), Column("totalstock10")]
        public Double? Totalstock10
        {
            get { return Fields.Totalstock10[this]; }
            set { Fields.Totalstock10[this] = value; }
        }

        [DisplayName("Totalstock11"), Column("totalstock11")]
        public Double? Totalstock11
        {
            get { return Fields.Totalstock11[this]; }
            set { Fields.Totalstock11[this] = value; }
        }

        [DisplayName("Totalstock12"), Column("totalstock12")]
        public Double? Totalstock12
        {
            get { return Fields.Totalstock12[this]; }
            set { Fields.Totalstock12[this] = value; }
        }

        [DisplayName("Totalstock13"), Column("totalstock13")]
        public Double? Totalstock13
        {
            get { return Fields.Totalstock13[this]; }
            set { Fields.Totalstock13[this] = value; }
        }

        [DisplayName("Totalstock14"), Column("totalstock14")]
        public Double? Totalstock14
        {
            get { return Fields.Totalstock14[this]; }
            set { Fields.Totalstock14[this] = value; }
        }

        [DisplayName("Totalstock15"), Column("totalstock15")]
        public Double? Totalstock15
        {
            get { return Fields.Totalstock15[this]; }
            set { Fields.Totalstock15[this] = value; }
        }

        [DisplayName("Totalstock16"), Column("totalstock16")]
        public Double? Totalstock16
        {
            get { return Fields.Totalstock16[this]; }
            set { Fields.Totalstock16[this] = value; }
        }

        [DisplayName("Totalstock17"), Column("totalstock17")]
        public Double? Totalstock17
        {
            get { return Fields.Totalstock17[this]; }
            set { Fields.Totalstock17[this] = value; }
        }

        [DisplayName("Totalstock2"), Column("totalstock2")]
        public Double? Totalstock2
        {
            get { return Fields.Totalstock2[this]; }
            set { Fields.Totalstock2[this] = value; }
        }

        [DisplayName("Totalstock3"), Column("totalstock3")]
        public Double? Totalstock3
        {
            get { return Fields.Totalstock3[this]; }
            set { Fields.Totalstock3[this] = value; }
        }

        [DisplayName("Totalstock4"), Column("totalstock4")]
        public Double? Totalstock4
        {
            get { return Fields.Totalstock4[this]; }
            set { Fields.Totalstock4[this] = value; }
        }

        [DisplayName("Totalstock5"), Column("totalstock5")]
        public Double? Totalstock5
        {
            get { return Fields.Totalstock5[this]; }
            set { Fields.Totalstock5[this] = value; }
        }

        [DisplayName("Totalstock6"), Column("totalstock6")]
        public Double? Totalstock6
        {
            get { return Fields.Totalstock6[this]; }
            set { Fields.Totalstock6[this] = value; }
        }

        [DisplayName("Totalstock7"), Column("totalstock7")]
        public Double? Totalstock7
        {
            get { return Fields.Totalstock7[this]; }
            set { Fields.Totalstock7[this] = value; }
        }

        [DisplayName("Totalstock8"), Column("totalstock8")]
        public Double? Totalstock8
        {
            get { return Fields.Totalstock8[this]; }
            set { Fields.Totalstock8[this] = value; }
        }

        [DisplayName("Totalstock9"), Column("totalstock9")]
        public Double? Totalstock9
        {
            get { return Fields.Totalstock9[this]; }
            set { Fields.Totalstock9[this] = value; }
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
            get { return Fields.Pdcl; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StockEntryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Pdcl;
            public StringField Type;
            public StringField Vendor;
            public StringField ProductNumber;
            public DoubleField StockInfo0;
            public DoubleField StockInfo1;
            public DoubleField StockInfo10;
            public DoubleField StockInfo11;
            public DoubleField StockInfo12;
            public DoubleField StockInfo13;
            public DoubleField StockInfo14;
            public DoubleField StockInfo15;
            public DoubleField StockInfo16;
            public DoubleField StockInfo17;
            public DoubleField StockInfo2;
            public DoubleField StockInfo3;
            public DoubleField StockInfo4;
            public DoubleField StockInfo5;
            public DoubleField StockInfo6;
            public DoubleField StockInfo7;
            public DoubleField StockInfo8;
            public DoubleField StockInfo9;
            public DoubleField StockInfo18;
            public DoubleField StockInfo19;
            public DoubleField StockInfo20;
            public DoubleField StockInfo21;
            public DoubleField StockInfo22;
            public DoubleField Totalstock0;
            public DoubleField Totalstock1;
            public DoubleField Totalstock10;
            public DoubleField Totalstock11;
            public DoubleField Totalstock12;
            public DoubleField Totalstock13;
            public DoubleField Totalstock14;
            public DoubleField Totalstock15;
            public DoubleField Totalstock16;
            public DoubleField Totalstock17;
            public DoubleField Totalstock2;
            public DoubleField Totalstock3;
            public DoubleField Totalstock4;
            public DoubleField Totalstock5;
            public DoubleField Totalstock6;
            public DoubleField Totalstock7;
            public DoubleField Totalstock8;
            public DoubleField Totalstock9;
            public StringField VendorNumber;
            public StringField YearMonth;
        }
    }
}
