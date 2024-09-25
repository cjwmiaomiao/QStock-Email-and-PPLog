
namespace QStock.DB2.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("DB2.Ooh")]
    [BasedOnRow(typeof(Entities.OohRow), CheckNames = true)]
    public class OohColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Material { get; set; }
        public String Sales { get; set; }
    }
}