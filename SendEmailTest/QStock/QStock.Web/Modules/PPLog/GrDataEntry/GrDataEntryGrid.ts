
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class GrDataEntryGrid extends Serenity.EntityGrid<GrDataEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.GrDataEntry'; }
        protected getDialogType() { return GrDataEntryDialog; }
        protected getIdProperty() { return GrDataEntryRow.idProperty; }
        protected getInsertPermission() { return GrDataEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return GrDataEntryRow.localTextPrefix; }
        protected getService() { return GrDataEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import GR Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new GrDataEntryImportDialog();
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