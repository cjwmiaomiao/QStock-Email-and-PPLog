
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class MaterialMasterEntryGrid extends Serenity.EntityGrid<MaterialMasterEntryRow, any> {
        protected getColumnsKey() { return 'PPLog.MaterialMasterEntry'; }
        protected getDialogType() { return MaterialMasterEntryDialog; }
        protected getIdProperty() { return MaterialMasterEntryRow.idProperty; }
        protected getInsertPermission() { return MaterialMasterEntryRow.insertPermission; }
        protected getLocalTextPrefix() { return MaterialMasterEntryRow.localTextPrefix; }
        protected getService() { return MaterialMasterEntryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {
            return [{
                title: 'Import Material Master Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    var dialog = new MaterialMasterEntryImportDialog();
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