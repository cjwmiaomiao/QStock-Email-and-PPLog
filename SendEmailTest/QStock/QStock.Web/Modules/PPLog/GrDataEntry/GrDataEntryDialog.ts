
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class GrDataEntryDialog extends Serenity.EntityDialog<GrDataEntryRow, any> {
        protected getFormKey() { return GrDataEntryForm.formKey; }
        protected getIdProperty() { return GrDataEntryRow.idProperty; }
        protected getLocalTextPrefix() { return GrDataEntryRow.localTextPrefix; }
        protected getNameProperty() { return GrDataEntryRow.nameProperty; }
        protected getService() { return GrDataEntryService.baseUrl; }
        protected getDeletePermission() { return GrDataEntryRow.deletePermission; }
        protected getInsertPermission() { return GrDataEntryRow.insertPermission; }
        protected getUpdatePermission() { return GrDataEntryRow.updatePermission; }

        protected form = new GrDataEntryForm(this.idPrefix);

    }
}