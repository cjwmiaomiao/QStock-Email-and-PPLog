
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class ProductListEntryGrid extends Serenity.EntityGrid<ProductListEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.ProductListEntry'; }
        protected getDialogType() { return ProductListEntryDialog; }
        protected getIdProperty() { return ProductListEntryRow.idProperty; }
        protected getInsertPermission() { return ProductListEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductListEntryRow.localTextPrefix; }
        protected getService() { return ProductListEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import Product List Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new ProductListEntryImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            }, {
                title: 'Delete ProductList',
                cssClass: 'delete-button',
                onClick: () => {
                    var dialog = new ProductListEntryDeleteDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
                }]
        }
    }
}