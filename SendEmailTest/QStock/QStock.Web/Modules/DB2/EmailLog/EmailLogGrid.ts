
namespace QStock.DB2 {

    @Serenity.Decorators.registerClass()
    export class EmailLogGrid extends Serenity.EntityGrid<EmailLogRow, any> {
        protected getColumnsKey() { return 'DB2.EmailLog'; }
        protected getDialogType() { return EmailLogDialog; }
        protected getIdProperty() { return EmailLogRow.idProperty; }
        protected getInsertPermission() { return EmailLogRow.insertPermission; }
        protected getLocalTextPrefix() { return EmailLogRow.localTextPrefix; }
        protected getService() { return EmailLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}