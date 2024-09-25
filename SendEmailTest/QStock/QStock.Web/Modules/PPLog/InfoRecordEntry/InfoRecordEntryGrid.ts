
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class InfoRecordEntryGrid extends Serenity.EntityGrid<InfoRecordEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.InfoRecordEntry'; }
        protected getDialogType() { return InfoRecordEntryDialog; }
        protected getIdProperty() { return InfoRecordEntryRow.idProperty; }
        protected getInsertPermission() { return InfoRecordEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return InfoRecordEntryRow.localTextPrefix; }
        protected getService() { return InfoRecordEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import Info Record Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new InfoRecordEntryImportDialog();
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