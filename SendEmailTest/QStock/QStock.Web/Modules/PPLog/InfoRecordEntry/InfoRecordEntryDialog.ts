
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class InfoRecordEntryDialog extends Serenity.EntityDialog<InfoRecordEntryRow, any> {
        protected getFormKey() { return InfoRecordEntryForm.formKey; }
        protected getIdProperty() { return InfoRecordEntryRow.idProperty; }
        protected getLocalTextPrefix() { return InfoRecordEntryRow.localTextPrefix; }
        protected getNameProperty() { return InfoRecordEntryRow.nameProperty; }
        protected getService() { return InfoRecordEntryService.baseUrl; }
        protected getDeletePermission() { return InfoRecordEntryRow.deletePermission; }
        protected getInsertPermission() { return InfoRecordEntryRow.insertPermission; }
        protected getUpdatePermission() { return InfoRecordEntryRow.updatePermission; }

        protected form = new InfoRecordEntryForm(this.idPrefix);

    }
}