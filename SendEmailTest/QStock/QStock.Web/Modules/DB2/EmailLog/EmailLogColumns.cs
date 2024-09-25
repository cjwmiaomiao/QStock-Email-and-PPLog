
namespace QStock.DB2.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DB2.EmailLog")]
    [BasedOnRow(typeof(Entities.EmailLogRow), CheckNames = true)]
    public class EmailLogColumns
    {
        [EditLink]
        public String SalesId { get; set; }
        public String SendStatus { get; set; }
        public String FailReason { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public DateTime SendTime { get; set; }
    }
}