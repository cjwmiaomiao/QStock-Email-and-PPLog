
namespace QStock.QStockExcel {

    @Serenity.Decorators.registerClass()
    export class OohGrid extends Serenity.EntityGrid<OohRow, any> {
        protected getColumnsKey() { return 'QStockExcel.Ooh'; }
        protected getDialogType() { return OohDialog; }
        protected getIdProperty() { return OohRow.idProperty; }
        protected getInsertPermission() { return OohRow.insertPermission; }
        protected getLocalTextPrefix() { return OohRow.localTextPrefix; }
        protected getService() { return OohService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons(): Serenity.ToolButton[] {

            return [
                {
                    title: 'Import OOH Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: () => {
                        // open import dialog, let it handle rest
                        var dialog = new OohImportDialog();
                        dialog.element.on('dialogclose', () => {
                            this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                }, {
                    title: "LOG1 Email",
                    cssClass: 'mail-button',
                    onClick: () => {
                        OohService.getEmailData({},
                            response => {
                                Q.notifyInfo(
                                    'Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                            }
                        );
                    }
                }];  
        }

    }
}