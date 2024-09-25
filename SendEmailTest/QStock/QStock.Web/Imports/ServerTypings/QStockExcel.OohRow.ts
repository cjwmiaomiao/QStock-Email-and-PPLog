namespace QStock.QStockExcel {
    export interface OohRow {
        Id?: number;
        SalesOrder?: string;
        SalesOrderItem?: string;
        Material?: string;
        MaterialDescription?: string;
        ItemCategory?: string;
        SalesEmployee?: string;
        SalesEmployeename?: string;
        DCBusinessUnit?: string;
        SoldtoParty?: string;
        SoldtoPartyname?: string;
        CustPONo?: string;
        CustomerMaterial?: string;
        CalendarDay?: string;
        FirstRequestedDate?: string;
        SOCreatedOn?: string;
        RFQty?: number;
        RFNetvalue?: number;
    }

    export namespace OohRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Material';
        export const localTextPrefix = 'QStockExcel.Ooh';
        export const deletePermission = 'QStockExcel:General';
        export const insertPermission = 'QStockExcel:General';
        export const readPermission = 'QStockExcel:General';
        export const updatePermission = 'QStockExcel:General';

        export declare const enum Fields {
            Id = "Id",
            SalesOrder = "SalesOrder",
            SalesOrderItem = "SalesOrderItem",
            Material = "Material",
            MaterialDescription = "MaterialDescription",
            ItemCategory = "ItemCategory",
            SalesEmployee = "SalesEmployee",
            SalesEmployeename = "SalesEmployeename",
            DCBusinessUnit = "DCBusinessUnit",
            SoldtoParty = "SoldtoParty",
            SoldtoPartyname = "SoldtoPartyname",
            CustPONo = "CustPONo",
            CustomerMaterial = "CustomerMaterial",
            CalendarDay = "CalendarDay",
            FirstRequestedDate = "FirstRequestedDate",
            SOCreatedOn = "SOCreatedOn",
            RFQty = "RFQty",
            RFNetvalue = "RFNetvalue"
        }
    }
}

