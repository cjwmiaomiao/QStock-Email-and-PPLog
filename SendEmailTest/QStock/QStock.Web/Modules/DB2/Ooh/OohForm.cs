
namespace QStock.DB2.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("DB2.Ooh")]
    [BasedOnRow(typeof(Entities.OohRow), CheckNames = true)]
    public class OohForm
    {
        public String Material { get; set; }
        public String Sales { get; set; }
    }
}