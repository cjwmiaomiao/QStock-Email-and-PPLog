namespace QStock.DB2 {
    export interface EmailLogRow {
        SalesId?: string;
        SendStatus?: string;
        FailReason?: string;
        Id?: number;
        SendTime?: string;
    }

    export namespace EmailLogRow {
        export const idProperty = 'Id';
        export const nameProperty = 'SalesId';
        export const localTextPrefix = 'DB2.EmailLog';
        export const deletePermission = 'OOH:General';
        export const insertPermission = 'OOH:General';
        export const readPermission = 'OOH:General';
        export const updatePermission = 'OOH:General';

        export declare const enum Fields {
            SalesId = "SalesId",
            SendStatus = "SendStatus",
            FailReason = "FailReason",
            Id = "Id",
            SendTime = "SendTime"
        }
    }
}

