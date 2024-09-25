
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class SoldDataEntryGrid extends Serenity.EntityGrid<SoldDataEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.SoldDataEntry'; }
        protected getDialogType() { return SoldDataEntryDialog; }
        protected getIdProperty() { return SoldDataEntryRow.idProperty; }
        protected getInsertPermission() { return SoldDataEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return SoldDataEntryRow.localTextPrefix; }
        protected getService() { return SoldDataEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import Sold Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new SoldDataEntryImportDialog();
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