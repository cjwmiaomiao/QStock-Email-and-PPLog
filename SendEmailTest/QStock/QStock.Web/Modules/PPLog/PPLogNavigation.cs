using Serenity.Navigation;
using MyPages = QStock.PPLog.Pages;

[assembly: NavigationMenu(7000, "PPLog", icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "PPLog/Data Entry", typeof(MyPages.DataEntryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PPLog/Product List Entry", typeof(MyPages.ProductListEntryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PPLog/Gr Data Entry", typeof(MyPages.GrDataEntryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PPLog/Material Master Entry", typeof(MyPages.MaterialMasterEntryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PPLog/Info Record Entry", typeof(MyPages.InfoRecordEntryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PPLog/Stock Entry", typeof(MyPages.StockEntryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PPLog/Sold Data Entry", typeof(MyPages.SoldDataEntryController), icon: null)]
[assembly:NavigationLink(int.MaxValue,"PPLog/Summary",typeof(MyPages.SummaryController),icon:null)]