
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class MaterialMasterEntryDialog extends Serenity.EntityDialog<MaterialMasterEntryRow, any> {
        protected getFormKey() { return MaterialMasterEntryForm.formKey; }
        protected getIdProperty() { return MaterialMasterEntryRow.idProperty; }
        protected getLocalTextPrefix() { return MaterialMasterEntryRow.localTextPrefix; }
        protected getNameProperty() { return MaterialMasterEntryRow.nameProperty; }
        protected getService() { return MaterialMasterEntryService.baseUrl; }
        protected getDeletePermission() { return MaterialMasterEntryRow.deletePermission; }
        protected getInsertPermission() { return MaterialMasterEntryRow.insertPermission; }
        protected getUpdatePermission() { return MaterialMasterEntryRow.updatePermission; }

        protected form = new MaterialMasterEntryForm(this.idPrefix);

    }
}