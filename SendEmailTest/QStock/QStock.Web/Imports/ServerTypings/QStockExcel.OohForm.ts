namespace QStock.QStockExcel {
    export interface OohForm {
        SalesOrderItem: Serenity.StringEditor;
        Material: Serenity.StringEditor;
        MaterialDescription: Serenity.StringEditor;
        ItemCategory: Serenity.StringEditor;
        SalesEmployee: Serenity.StringEditor;
        SalesEmployeename: Serenity.StringEditor;
    }

    export class OohForm extends Serenity.PrefixedContext {
        static formKey = 'QStockExcel.Ooh';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OohForm.init)  {
                OohForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OohForm, [
                    'SalesOrderItem', w0,
                    'Material', w0,
                    'MaterialDescription', w0,
                    'ItemCategory', w0,
                    'SalesEmployee', w0,
                    'SalesEmployeename', w0
                ]);
            }
        }
    }
}

