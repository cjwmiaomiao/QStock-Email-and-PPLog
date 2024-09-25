namespace QStock {
    export interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        SendThisMonth?: boolean;
        ErrorList?: string[];
    }
}

