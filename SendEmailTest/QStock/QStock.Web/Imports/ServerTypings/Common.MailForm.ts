namespace QStock.Common {
    export interface MailForm {
        Uid: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: Serenity.HtmlNoteContentEditor;
        MailFrom: Serenity.StringEditor;
        MailTo: Serenity.StringEditor;
        ReplyTo: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
        Bcc: Serenity.StringEditor;
        Priority: Serenity.EnumEditor;
        Status: Serenity.EnumEditor;
        RetryCount: Serenity.IntegerEditor;
        LockExpiration: Serenity.DateTimeEditor;
        ErrorMessage: Serenity.StringEditor;
        SentDate: Serenity.DateTimeEditor;
        InsertUser: Serenity.IntegerEditor;
        InsertDate: Serenity.DateTimeEditor;
    }

    export class MailForm extends Serenity.PrefixedContext {
        static formKey = 'Common.Mail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MailForm.init)  {
                MailForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.HtmlNoteContentEditor;
                var w2 = s.EnumEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DateTimeEditor;

                Q.initFormType(MailForm, [
                    'Uid', w0,
                    'Subject', w0,
                    'Body', w1,
                    'MailFrom', w0,
                    'MailTo', w0,
                    'ReplyTo', w0,
                    'Cc', w0,
                    'Bcc', w0,
                    'Priority', w2,
                    'Status', w2,
                    'RetryCount', w3,
                    'LockExpiration', w4,
                    'ErrorMessage', w0,
                    'SentDate', w4,
                    'InsertUser', w3,
                    'InsertDate', w4
                ]);
            }
        }
    }
}

