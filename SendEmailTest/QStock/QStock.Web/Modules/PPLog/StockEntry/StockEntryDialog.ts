
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class StockEntryDialog extends Serenity.EntityDialog<StockEntryRow, any> {
        protected getFormKey() { return StockEntryForm.formKey; }
        protected getIdProperty() { return StockEntryRow.idProperty; }
        protected getLocalTextPrefix() { return StockEntryRow.localTextPrefix; }
        protected getNameProperty() { return StockEntryRow.nameProperty; }
        protected getService() { return StockEntryService.baseUrl; }
        protected getDeletePermission() { return StockEntryRow.deletePermission; }
        protected getInsertPermission() { return StockEntryRow.insertPermission; }
        protected getUpdatePermission() { return StockEntryRow.updatePermission; }

        protected form = new StockEntryForm(this.idPrefix);

    }
}