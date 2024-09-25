namespace QStock.DB2 {
    export interface OohForm {
        Material: Serenity.StringEditor;
        Sales: Serenity.StringEditor;
    }

    export class OohForm extends Serenity.PrefixedContext {
        static formKey = 'DB2.Ooh';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OohForm.init)  {
                OohForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(OohForm, [
                    'Material', w0,
                    'Sales', w0
                ]);
            }
        }
    }
}

