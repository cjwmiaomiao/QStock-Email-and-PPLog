
namespace QStock.DB2 {

    @Serenity.Decorators.registerClass()
    export class EmailLogDialog extends Serenity.EntityDialog<EmailLogRow, any> {
        protected getFormKey() { return EmailLogForm.formKey; }
        protected getIdProperty() { return EmailLogRow.idProperty; }
        protected getLocalTextPrefix() { return EmailLogRow.localTextPrefix; }
        protected getNameProperty() { return EmailLogRow.nameProperty; }
        protected getService() { return EmailLogService.baseUrl; }
        protected getDeletePermission() { return EmailLogRow.deletePermission; }
        protected getInsertPermission() { return EmailLogRow.insertPermission; }
        protected getUpdatePermission() { return EmailLogRow.updatePermission; }

        protected form = new EmailLogForm(this.idPrefix);

    }
}