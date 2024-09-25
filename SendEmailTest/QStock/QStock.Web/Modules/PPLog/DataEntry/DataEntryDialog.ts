
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class DataEntryDialog extends Serenity.EntityDialog<DataEntryRow, any> {
        protected getFormKey() { return DataEntryForm.formKey; }
        protected getIdProperty() { return DataEntryRow.idProperty; }
        protected getLocalTextPrefix() { return DataEntryRow.localTextPrefix; }
        protected getNameProperty() { return DataEntryRow.nameProperty; }
        protected getService() { return DataEntryService.baseUrl; }
        protected getDeletePermission() { return DataEntryRow.deletePermission; }
        protected getInsertPermission() { return DataEntryRow.insertPermission; }
        protected getUpdatePermission() { return DataEntryRow.updatePermission; }

        protected form = new DataEntryForm(this.idPrefix);

    }
}