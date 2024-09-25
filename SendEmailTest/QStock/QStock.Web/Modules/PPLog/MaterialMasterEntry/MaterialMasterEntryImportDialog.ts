
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class MaterialMasterEntryImportDialog extends Serenity.PropertyDialog<any, any> {

        private form: MaterialMasterEntryImportForm;

        constructor() {
            super();
            this.form = new MaterialMasterEntryImportForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Excel Import";
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

                        MaterialMasterEntryService.MaterialMasterUpload({
                            FileName: this.form.FileName.value.Filename,
                        }, response => {
                            Q.notifyInfo(
                                'Inserted: ' + (response.Inserted || 0) +
                                ', Updated: ' + (response.Updated || 0) +
                                ',耗时: ' + (response.SpendTime || 0));

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