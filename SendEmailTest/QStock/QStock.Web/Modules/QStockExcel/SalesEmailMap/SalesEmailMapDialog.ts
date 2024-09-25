
namespace QStock.QStockExcel {

    @Serenity.Decorators.registerClass()
    export class SalesEmailMapDialog extends Serenity.EntityDialog<SalesEmailMapRow, any> {

        protected getFormKey() { return SalesEmailMapForm.formKey; }
        protected getIdProperty() { return SalesEmailMapRow.idProperty; }
        protected getLocalTextPrefix() { return SalesEmailMapRow.localTextPrefix; }
        protected getNameProperty() { return SalesEmailMapRow.nameProperty; }
        protected getService() { return SalesEmailMapService.baseUrl; }
        protected getDeletePermission() { return SalesEmailMapRow.deletePermission; }
        protected getInsertPermission() { return SalesEmailMapRow.insertPermission; }
        protected getUpdatePermission() { return SalesEmailMapRow.updatePermission; }

        protected form = new SalesEmailMapForm(this.idPrefix);
    }
}