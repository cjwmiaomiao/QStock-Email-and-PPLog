namespace QStock.DB2 {
    export interface OohRow {
        Id?: number;
        Material?: string;
        Sales?: string;
    }

    export namespace OohRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Material';
        export const localTextPrefix = 'DB2.Ooh';
        export const deletePermission = 'OOH:General';
        export const insertPermission = 'OOH:General';
        export const readPermission = 'OOH:General';
        export const updatePermission = 'OOH:General';

        export declare const enum Fields {
            Id = "Id",
            Material = "Material",
            Sales = "Sales"
        }
    }
}

