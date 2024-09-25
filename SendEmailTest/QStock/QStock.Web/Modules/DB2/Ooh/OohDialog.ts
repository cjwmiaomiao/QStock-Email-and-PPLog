
namespace QStock.DB2 {

    @Serenity.Decorators.registerClass()
    export class OohDialog extends Serenity.EntityDialog<OohRow, any> {
        protected getFormKey() { return OohForm.formKey; }
        protected getIdProperty() { return OohRow.idProperty; }
        protected getLocalTextPrefix() { return OohRow.localTextPrefix; }
        protected getNameProperty() { return OohRow.nameProperty; }
        protected getService() { return OohService.baseUrl; }
        protected getDeletePermission() { return OohRow.deletePermission; }
        protected getInsertPermission() { return OohRow.insertPermission; }
        protected getUpdatePermission() { return OohRow.updatePermission; }

        protected form = new OohForm(this.idPrefix);

    }
}