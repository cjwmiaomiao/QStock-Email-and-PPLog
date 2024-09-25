
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class SoldDataEntryDialog extends Serenity.EntityDialog<SoldDataEntryRow, any> {
        protected getFormKey() { return SoldDataEntryForm.formKey; }
        protected getIdProperty() { return SoldDataEntryRow.idProperty; }
        protected getLocalTextPrefix() { return SoldDataEntryRow.localTextPrefix; }
        protected getNameProperty() { return SoldDataEntryRow.nameProperty; }
        protected getService() { return SoldDataEntryService.baseUrl; }
        protected getDeletePermission() { return SoldDataEntryRow.deletePermission; }
        protected getInsertPermission() { return SoldDataEntryRow.insertPermission; }
        protected getUpdatePermission() { return SoldDataEntryRow.updatePermission; }

        protected form = new SoldDataEntryForm(this.idPrefix);

    }
}