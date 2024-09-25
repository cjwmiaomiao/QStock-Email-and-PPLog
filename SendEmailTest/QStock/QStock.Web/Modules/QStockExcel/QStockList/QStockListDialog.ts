
namespace QStock.QStockExcel {

    @Serenity.Decorators.registerClass()
    export class QStockListDialog extends Serenity.EntityDialog<QStockListRow, any> {
        protected getFormKey() { return QStockListForm.formKey; }
        protected getIdProperty() { return QStockListRow.idProperty; }
        protected getLocalTextPrefix() { return QStockListRow.localTextPrefix; }
        protected getNameProperty() { return QStockListRow.nameProperty; }
        protected getService() { return QStockListService.baseUrl; }
        protected getDeletePermission() { return QStockListRow.deletePermission; }
        protected getInsertPermission() { return QStockListRow.insertPermission; }
        protected getUpdatePermission() { return QStockListRow.updatePermission; }

        protected form = new QStockListForm(this.idPrefix);

    }
}