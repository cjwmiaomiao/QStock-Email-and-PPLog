
namespace QStock.DB2.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("DB2"), Module("DB2"), TableName("[dbo].[EmailLog]")]
    [DisplayName("Email Log"), InstanceName("Email Log")]
    [ReadPermission("OOH:General")]
    [ModifyPermission("OOH:General")]
    public sealed class EmailLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Sales Id"), Size(10), NotNull, QuickSearch]
        public String SalesId
        {
            get { return Fields.SalesId[this]; }
            set { Fields.SalesId[this] = value; }
        }

        [DisplayName("Send Status"), Column("sendStatus"), Size(10), NotNull]
        public String SendStatus
        {
            get { return Fields.SendStatus[this]; }
            set { Fields.SendStatus[this] = value; }
        }

        [DisplayName("Fail Reason"), Column("failReason")]
        public String FailReason
        {
            get { return Fields.FailReason[this]; }
            set { Fields.FailReason[this] = value; }
        }

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Send Time"), Column("sendTime")]
        public DateTime? SendTime
        {
            get { return Fields.SendTime[this]; }
            set { Fields.SendTime[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SalesId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmailLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField SalesId;
            public StringField SendStatus;
            public StringField FailReason;
            public Int32Field Id;
            public DateTimeField SendTime;
        }
    }
}
