
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class StockEntryGrid extends Serenity.EntityGrid<StockEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.StockEntry'; }
        protected getDialogType() { return StockEntryDialog; }
        protected getIdProperty() { return StockEntryRow.idProperty; }
        protected getInsertPermission() { return StockEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return StockEntryRow.localTextPrefix; }
        protected getService() { return StockEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import Stock Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new StockEntryImportDialog();
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