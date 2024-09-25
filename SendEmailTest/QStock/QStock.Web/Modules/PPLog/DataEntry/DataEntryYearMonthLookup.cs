
namespace QStock.PPLog.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript]
    public class DataEntryYearMonthLookup : RowLookupScript<Entities.DataEntryRow>
    {
        public DataEntryYearMonthLookup()
        {
            IdField = TextField = "YearMonth";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.DataEntryRow.Fields;
            string currentYearMonth = DateTime.Now.ToString("yyyy-MM");

            // 使用 Union 方法进行联合
            query.Distinct(true)
                .Select(fld.YearMonth);
                
                //.From("[PP_LOG_Test].[dbo].[data_entry]")
                //.Distinct(true)
                //.Select("'" + currentYearMonth + "'", "YearMonth");

        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}