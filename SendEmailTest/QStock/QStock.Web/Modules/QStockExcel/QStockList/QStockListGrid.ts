
namespace QStock.QStockExcel {

    @Serenity.Decorators.registerClass()
    export class QStockListGrid extends Serenity.EntityGrid<QStockListRow, any> {
        protected getColumnsKey() { return 'QStockExcel.QStockList'; }
        protected getDialogType() { return QStockListDialog; }
        protected getIdProperty() { return QStockListRow.idProperty; }
        protected getInsertPermission() { return QStockListRow.insertPermission; }
        protected getLocalTextPrefix() { return QStockListRow.localTextPrefix; }
        protected getService() { return QStockListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {

            var buttons = super.getButtons();
            buttons.shift();
            return buttons;
        }
    }
}