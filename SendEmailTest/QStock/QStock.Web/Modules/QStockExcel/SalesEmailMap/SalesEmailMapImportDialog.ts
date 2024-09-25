
namespace QStock.QStockExcel {

    @Serenity.Decorators.registerClass()
    export class SalesEmailMapImportDialog extends Serenity.EntityDialog<any, any> {

        private form: SalesEmailMapImportForm;

        constructor() {
            super();
            this.form = new SalesEmailMapImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "SalesEmail Import";
        }

        protected getToolbarButtons(): Serenity.ToolButton[] {
            var buttons = [];
            return buttons;
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Import',
                    click: () => {
                        if (!this.validateBeforeSave())
                            return;

                        if (this.form.FileName.value == null ||
                            Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                            Q.notifyError("Please select a file!");
                            return;
                        }

                        SalesEmailMapService.EmailImport({
                            FileName: this.form.FileName.value.Filename
                        }, response => {
                            Q.notifyInfo(
                                'Inserted: ' + (response.Inserted || 0) +
                                ', Updated: ' + (response.Updated || 0));

                            if (response.ErrorList != null && response.ErrorList.length > 0) {
                                Q.notifyError(response.ErrorList.join(',\r\n '));
                            }

                            this.dialogClose();
                        });
                    },
                },
                {
                    text: 'Cancel',
                    click: () => this.dialogClose()
                }
            ];
        }

        protected confirmDialogButtons(): void {
            $('#ConfirmDialogButtons').click(() => {
                Q.confirm(
                    "Click one of buttons, or close dialog with [x] on top right, I'll tell you what you did!",
                    () => {
                        Q.notifySuccess("You clicked YES. Great!");
                    },
                    {
                        onNo: () => {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: () => {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    }
                );
            });
        }
    }
}