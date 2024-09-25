namespace QStock.Common {
    export interface BackgroundTaskLogRow {
        LogId?: number;
        TaskKey?: string;
        RunAt?: string;
        Status?: number;
        Server?: string;
        Message?: string;
    }

    export namespace BackgroundTaskLogRow {
        export const idProperty = 'LogId';
        export const nameProperty = 'TaskKey';
        export const localTextPrefix = 'Common.BackgroundTaskLog';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LogId = "LogId",
            TaskKey = "TaskKey",
            RunAt = "RunAt",
            Status = "Status",
            Server = "Server",
            Message = "Message"
        }
    }
}

