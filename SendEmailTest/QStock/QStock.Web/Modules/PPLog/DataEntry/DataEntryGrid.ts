
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class DataEntryGrid extends Serenity.EntityGrid<DataEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.DataEntry'; }
        protected getDialogType() { return DataEntryDialog; }
        protected getIdProperty() { return DataEntryRow.idProperty; }
        protected getInsertPermission() { return DataEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return DataEntryRow.localTextPrefix; }
        protected getService() { return DataEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import PP Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new DataEntryImportDialog();
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