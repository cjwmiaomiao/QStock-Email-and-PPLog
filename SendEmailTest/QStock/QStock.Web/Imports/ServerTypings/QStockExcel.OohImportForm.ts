namespace QStock.QStockExcel {
    export interface OohImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class OohImportForm extends Serenity.PrefixedContext {
        static formKey = 'QStockExcel.OohImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OohImportForm.init)  {
                OohImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(OohImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

