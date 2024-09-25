using Serenity.Navigation;
using MyPages = QStock.QStockExcel.Pages;

[assembly: NavigationMenu(8000, "QStockExcel", icon: "fa-envelope")]
[assembly: NavigationLink(int.MaxValue, "QStockExcel/Q Stock List", typeof(MyPages.QStockListController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "QStockExcel/OOH", typeof(MyPages.OohController), icon: "fa-envelope")]
[assembly: NavigationLink(int.MaxValue, "QStockExcel/Sales Email Map", typeof(MyPages.SalesEmailMapController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "QStockExcel/Mail Queue", typeof(QStock.Common.Pages.MailController), icon: "fa-envelope-o premium-sample")]
