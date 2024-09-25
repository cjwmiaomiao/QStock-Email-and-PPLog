
namespace QStock.QStockExcel {

    @Serenity.Decorators.registerClass()
    export class SalesEmailMapGrid extends Serenity.EntityGrid<SalesEmailMapRow, any> {
        protected getColumnsKey() { return 'QStockExcel.SalesEmailMap'; }
        // protected getDialogType() { return SalesEmailMapDialog; }
        protected getIdProperty() { return SalesEmailMapRow.idProperty; }
        protected getInsertPermission() { return SalesEmailMapRow.insertPermission; }
        protected getLocalTextPrefix() { return SalesEmailMapRow.localTextPrefix; }
        protected getService() { return SalesEmailMapService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }


        protected getButtons() {
            let isContinue = false;
            return [
                {
                    title: 'Import SalesEmail Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: () => {
                        var dialog = new SalesEmailMapImportDialog();
                        dialog.element.on('dialogclose', () => {
                            this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                }, {
                    title: "Send Email",
                    cssClass: 'mail-button',
                    onClick: () => {
                        SalesEmailMapService.getEmailData({
                            isContinue:false
                        }, response => {

                            if (response.SendThisMonth) {
                                Q.confirm(
                                    Q.text("Db.DialogText.ConfirmThisMonth"),
                                    () => {
                                        continueWithEmailSending();
                                    },
                                    {
                                        onNo: () => {
                                            Q.notifyInfo("Send Cancelled");
                                        },
                                    }
                                );
                            }
                            else {
                                Q.confirm(
                                    Q.text("Db.DialogText.ConfirmNotThisMonth"),
                                    () => {
                                        continueWithEmailSending();
                                    },
                                    {
                                        onNo: () => {
                                            Q.notifyInfo("Send Cancelled");
                                        },
                                    }
                                );
                            }

                        });



                    }
                }
            ];
        }
    }
    function continueWithEmailSending() {
        let isContinue = true;
        SalesEmailMapService.getEmailData({
            isContinue
        }, response => {
            Q.notifyInfo('Updated: ' + (response.Updated || 0));
            if (response.ErrorList != null && response.ErrorList.length > 0) {
                Q.notifyError(response.ErrorList.join(',\r\n '));
            } else {
                Q.notifySuccess("Emails have been sent");
            }
        });
    }
}