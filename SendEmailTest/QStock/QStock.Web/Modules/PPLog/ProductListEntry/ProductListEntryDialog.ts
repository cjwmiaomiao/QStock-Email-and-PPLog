
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class ProductListEntryDialog extends Serenity.EntityDialog<ProductListEntryRow, any> {
        protected getFormKey() { return ProductListEntryForm.formKey; }
        protected getIdProperty() { return ProductListEntryRow.idProperty; }
        protected getLocalTextPrefix() { return ProductListEntryRow.localTextPrefix; }
        protected getNameProperty() { return ProductListEntryRow.nameProperty; }
        protected getService() { return ProductListEntryService.baseUrl; }
        protected getDeletePermission() { return ProductListEntryRow.deletePermission; }
        protected getInsertPermission() { return ProductListEntryRow.insertPermission; }
        protected getUpdatePermission() { return ProductListEntryRow.updatePermission; }

        protected form = new ProductListEntryForm(this.idPrefix);

    }
}