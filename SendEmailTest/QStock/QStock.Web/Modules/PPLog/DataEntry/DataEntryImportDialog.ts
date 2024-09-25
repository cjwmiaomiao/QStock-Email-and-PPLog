
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class DataEntryImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: DataEntryImportForm;

        constructor() {
            super();
            console.log("constructor")
            this.form = new DataEntryImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel Import";
        }


        protected getToolbarButtons(): Serenity.ToolButton[] {
            var buttons = [];
            return buttons;
        }
        protected onDialogOpen() {
            super.onDialogOpen();
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            let month: number = currentDate.getMonth() + 1;
            const yearMonth = `${year}-${month < 10 ? '0' + month : month}`;
            this.form.YearMonth.value = yearMonth;

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

                        DataEntryService.PPUpload({
                            FileName: this.form.FileName.value.Filename,
                            YearMonth: this.form.YearMonth.value
                        }, response => {
                            Q.notifyInfo(
                                'Inserted: ' + (response.Inserted || 0) +
                                ', Updated: ' + (response.Updated || 0) +
                                ',耗时:' + (response.SpendTime || 0));

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
    }
}