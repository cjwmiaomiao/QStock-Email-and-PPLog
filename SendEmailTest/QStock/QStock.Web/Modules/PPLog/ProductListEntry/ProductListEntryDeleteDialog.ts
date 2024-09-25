
namespace QStock.PPLog {

    @Serenity.Decorators.registerClass()
    export class ProductListEntryDeleteDialog extends Serenity.PropertyDialog<any, any> {

        private form: ProductListEntryDeleteForm;

        constructor() {
            super();
            this.form = new ProductListEntryDeleteForm(this.idPrefix);
        }

        protected getDialogTitle(): string {
            return "Delete Product List";
        }

        protected getFormKey() { return ProductListEntryDeleteForm.formKey; }


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
            console.log("form", this.form.YearMonth.value)
        }

        protected getDialogButtons(): Serenity.DialogButton[] {
            return [
                {
                    text: 'Delete',
                    click: () => {
                        ProductListEntryService.pdclDelete({
                            YearMonth: this.form.YearMonth.value
                        }, response => {
                            Q.notifyInfo(response.ErrorList.join(',\r\n '));
                            this.dialogClose();
                        })
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