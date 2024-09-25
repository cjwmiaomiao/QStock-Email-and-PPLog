
namespace QStock.DB2 {

    @Serenity.Decorators.registerClass()
    export class OohGrid extends Serenity.EntityGrid<OohRow, any> {
        protected getColumnsKey() { return 'DB2.Ooh'; }
        protected getDialogType() { return OohDialog; }
        protected getIdProperty() { return OohRow.idProperty; }
        protected getInsertPermission() { return OohRow.insertPermission; }
        protected getLocalTextPrefix() { return OohRow.localTextPrefix; }
        protected getService() { return OohService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            return [];
        }
    }
}