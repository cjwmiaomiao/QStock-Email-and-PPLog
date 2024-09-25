
namespace Serenity.ComponentModel
{
    public partial class SingleLineTextFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "Serenity.SingleLineTextFormatter";

        public SingleLineTextFormatterAttribute()
            : base(Key)
        {
        }
    }
}