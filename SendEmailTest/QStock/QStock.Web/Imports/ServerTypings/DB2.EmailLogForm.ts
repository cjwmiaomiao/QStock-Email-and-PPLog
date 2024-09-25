namespace QStock.DB2 {
    export interface EmailLogForm {
        SalesId: Serenity.StringEditor;
        SendStatus: Serenity.StringEditor;
        FailReason: Serenity.StringEditor;
        SendTime: Serenity.DateEditor;
    }

    export class EmailLogForm extends Serenity.PrefixedContext {
        static formKey = 'DB2.EmailLog';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmailLogForm.init)  {
                EmailLogForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmailLogForm, [
                    'SalesId', w0,
                    'SendStatus', w0,
                    'FailReason', w0,
                    'SendTime', w1
                ]);
            }
        }
    }
}

