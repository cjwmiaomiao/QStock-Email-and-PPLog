namespace QStock.Common {
    export enum MailStatus {
        Failed = -1,
        InQueue = 0,
        Sent = 1
    }
    Serenity.Decorators.registerEnumType(MailStatus, 'QStock.Common.MailStatus');
}

