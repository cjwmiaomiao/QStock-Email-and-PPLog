namespace Serenity.EmailClient {
    export interface EmailComposeForm {
        To: EmailSuggestEditor;
        Cc: EmailSuggestEditor;
        Bcc: EmailSuggestEditor;
        Subject: StringEditor;
        BodyHtml: EmailContentEditor;
        Attachments: MultipleImageUploadEditor;
        ReplyToFolder: StringEditor;
        ReplyToUniqueId: StringEditor;
    }

    export class EmailComposeForm extends Serenity.PrefixedContext {
        static formKey = 'Serenity.EmailClient.EmailCompose';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmailComposeForm.init)  {
                EmailComposeForm.init = true;

                var s = Serenity;
                var w0 = EmailSuggestEditor;
                var w1 = StringEditor;
                var w2 = EmailContentEditor;
                var w3 = MultipleImageUploadEditor;

                Q.initFormType(EmailComposeForm, [
                    'To', w0,
                    'Cc', w0,
                    'Bcc', w0,
                    'Subject', w1,
                    'BodyHtml', w2,
                    'Attachments', w3,
                    'ReplyToFolder', w1,
                    'ReplyToUniqueId', w1
                ]);
            }
        }
    }
}

