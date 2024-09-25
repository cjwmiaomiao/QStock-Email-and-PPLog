/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace QStock.Administration {
}
declare namespace QStock.Administration {
    interface DataAuditLogForm {
        LogType: Serenity.EnumEditor;
        LogDate: Serenity.DateTimeEditor;
        UserId: Serenity.IntegerEditor;
        Tablename: Serenity.LookupEditor;
        RecordId: Serenity.StringEditor;
        FieldName: Serenity.LookupEditor;
        OldValue: Serenity.StringEditor;
        NewValue: Serenity.StringEditor;
    }
    class DataAuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Administration {
    interface DataAuditLogRow {
        LogId?: number;
        LogType?: DataAuditLogType;
        LogDate?: string;
        UserId?: number;
        Tablename?: string;
        RecordId?: string;
        FieldName?: string;
        OldValue?: string;
        NewValue?: string;
        Username?: string;
        UserDisplayName?: string;
    }
    namespace DataAuditLogRow {
        const idProperty = "LogId";
        const localTextPrefix = "Administration.DataAuditLog";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            LogId = "LogId",
            LogType = "LogType",
            LogDate = "LogDate",
            UserId = "UserId",
            Tablename = "Tablename",
            RecordId = "RecordId",
            FieldName = "FieldName",
            OldValue = "OldValue",
            NewValue = "NewValue",
            Username = "Username",
            UserDisplayName = "UserDisplayName"
        }
    }
}
declare namespace QStock.Administration {
    namespace DataAuditLogService {
        const baseUrl = "Administration/DataAuditLog";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DataAuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Administration/DataAuditLog/Retrieve",
            List = "Administration/DataAuditLog/List"
        }
    }
}
declare namespace QStock.Administration {
    enum DataAuditLogType {
        Insert = 1,
        Update = 2,
        Delete = 3
    }
}
declare namespace QStock.Administration {
}
declare namespace QStock.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace QStock.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace QStock.Administration {
}
declare namespace QStock.Administration {
}
declare namespace QStock.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
        RoleKey: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace QStock.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace QStock.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace QStock.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace QStock.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace QStock.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        RoleKey?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            RoleKey = "RoleKey"
        }
    }
}
declare namespace QStock.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace QStock.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace QStock.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace QStock.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace QStock.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace QStock.Administration {
    enum TwoFactorAuthType {
        Email = 1,
        SMS = 2
    }
}
declare namespace QStock.Administration {
}
declare namespace QStock.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        MobilePhoneNumber: Serenity.StringEditor;
        MobilePhoneVerified: Serenity.BooleanEditor;
        TwoFactorAuth: Serenity.EnumEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Administration {
    interface UserListRequest extends Serenity.ListRequest {
    }
}
declare namespace QStock.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace QStock.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace QStock.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace QStock.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace QStock.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace QStock.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace QStock.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace QStock.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace QStock.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace QStock.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        MobilePhoneNumber?: string;
        MobilePhoneVerified?: boolean;
        TwoFactorAuth?: TwoFactorAuthType;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        ImpersonationToken?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            MobilePhoneNumber = "MobilePhoneNumber",
            MobilePhoneVerified = "MobilePhoneVerified",
            TwoFactorAuth = "TwoFactorAuth",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            ImpersonationToken = "ImpersonationToken",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace QStock.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace QStock.Common {
    interface BackgroundTaskLogRow {
        LogId?: number;
        TaskKey?: string;
        RunAt?: string;
        Status?: number;
        Server?: string;
        Message?: string;
    }
    namespace BackgroundTaskLogRow {
        const idProperty = "LogId";
        const nameProperty = "TaskKey";
        const localTextPrefix = "Common.BackgroundTaskLog";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LogId = "LogId",
            TaskKey = "TaskKey",
            RunAt = "RunAt",
            Status = "Status",
            Server = "Server",
            Message = "Message"
        }
    }
}
declare namespace QStock.Common {
}
declare namespace QStock.Common {
    interface MailForm {
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
    class MailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Common {
    enum MailQueuePriority {
        High = 1,
        Medium = 2,
        Low = 3
    }
}
declare namespace QStock.Common {
    interface MailRow {
        MailId?: number;
        Uid?: string;
        Subject?: string;
        Body?: string;
        MailFrom?: string;
        MailTo?: string;
        ReplyTo?: string;
        Cc?: string;
        Bcc?: string;
        Attachments?: number[];
        Priority?: MailQueuePriority;
        Status?: MailStatus;
        RetryCount?: number;
        ErrorMessage?: string;
        LockExpiration?: string;
        SentDate?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUser?: string;
    }
    namespace MailRow {
        const idProperty = "MailId";
        const nameProperty = "Subject";
        const localTextPrefix = "Common.Mail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MailId = "MailId",
            Uid = "Uid",
            Subject = "Subject",
            Body = "Body",
            MailFrom = "MailFrom",
            MailTo = "MailTo",
            ReplyTo = "ReplyTo",
            Cc = "Cc",
            Bcc = "Bcc",
            Attachments = "Attachments",
            Priority = "Priority",
            Status = "Status",
            RetryCount = "RetryCount",
            ErrorMessage = "ErrorMessage",
            LockExpiration = "LockExpiration",
            SentDate = "SentDate",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUser = "InsertUser"
        }
    }
}
declare namespace QStock.Common {
    namespace MailService {
        const baseUrl = "Common/Mail";
        function Create(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Common/Mail/Create",
            Update = "Common/Mail/Update",
            Delete = "Common/Mail/Delete",
            Retrieve = "Common/Mail/Retrieve",
            List = "Common/Mail/List"
        }
    }
}
declare namespace QStock.Common {
    enum MailStatus {
        Failed = -1,
        InQueue = 0,
        Sent = 1
    }
}
declare namespace QStock.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace QStock.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace QStock.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace QStock.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace QStock.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace QStock.DB2 {
}
declare namespace QStock.DB2 {
    interface EmailLogForm {
        SalesId: Serenity.StringEditor;
        SendStatus: Serenity.StringEditor;
        FailReason: Serenity.StringEditor;
        SendTime: Serenity.DateEditor;
    }
    class EmailLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.DB2 {
    interface EmailLogRow {
        SalesId?: string;
        SendStatus?: string;
        FailReason?: string;
        Id?: number;
        SendTime?: string;
    }
    namespace EmailLogRow {
        const idProperty = "Id";
        const nameProperty = "SalesId";
        const localTextPrefix = "DB2.EmailLog";
        const deletePermission = "OOH:General";
        const insertPermission = "OOH:General";
        const readPermission = "OOH:General";
        const updatePermission = "OOH:General";
        const enum Fields {
            SalesId = "SalesId",
            SendStatus = "SendStatus",
            FailReason = "FailReason",
            Id = "Id",
            SendTime = "SendTime"
        }
    }
}
declare namespace QStock.DB2 {
    namespace EmailLogService {
        const baseUrl = "DB2/EmailLog";
        function Create(request: Serenity.SaveRequest<EmailLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmailLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmailLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DB2/EmailLog/Create",
            Update = "DB2/EmailLog/Update",
            Delete = "DB2/EmailLog/Delete",
            Retrieve = "DB2/EmailLog/Retrieve",
            List = "DB2/EmailLog/List"
        }
    }
}
declare namespace QStock.DB2 {
}
declare namespace QStock.DB2 {
    interface OohForm {
        Material: Serenity.StringEditor;
        Sales: Serenity.StringEditor;
    }
    class OohForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.DB2 {
    interface OohRow {
        Id?: number;
        Material?: string;
        Sales?: string;
    }
    namespace OohRow {
        const idProperty = "Id";
        const nameProperty = "Material";
        const localTextPrefix = "DB2.Ooh";
        const deletePermission = "OOH:General";
        const insertPermission = "OOH:General";
        const readPermission = "OOH:General";
        const updatePermission = "OOH:General";
        const enum Fields {
            Id = "Id",
            Material = "Material",
            Sales = "Sales"
        }
    }
}
declare namespace QStock.DB2 {
    namespace OohService {
        const baseUrl = "DB2/Ooh";
        function Create(request: Serenity.SaveRequest<OohRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OohRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OohRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OohRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "DB2/Ooh/Create",
            Update = "DB2/Ooh/Update",
            Delete = "DB2/Ooh/Delete",
            Retrieve = "DB2/Ooh/Retrieve",
            List = "DB2/Ooh/List"
        }
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachment {
        Key?: number;
        FileName?: string;
        DownloadUrl?: string;
        Size?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailAttachmentRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        Key?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeForm {
        To: EmailSuggestEditor;
        Cc: EmailSuggestEditor;
        Bcc: EmailSuggestEditor;
        Subject: StringEditor;
        BodyHtml: EmailContentEditor;
        Attachments: MultipleImageUploadEditor;
        ReplyToFolder: StringEditor;
        ReplyToUniqueId: StringEditor;
    }
    class EmailComposeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serenity.EmailClient {
    interface EmailComposeRequest extends Serenity.ServiceRequest {
        To?: string;
        Cc?: string;
        Bcc?: string;
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToFolder?: string;
        ReplyToUniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailDeleteRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailFolder {
        Kind?: string;
        Name?: string;
        FullName?: string;
        UnreadCount?: number;
        SubFolders?: EmailFolder[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailItem {
        UniqueId?: number;
        Subject?: string;
        Date?: string;
        From?: string;
        To?: string;
        Cc?: string;
        Seen?: boolean;
        Important?: boolean;
        Deleted?: boolean;
        HasAttachments?: boolean;
        Size?: number;
        HtmlBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailListRequest extends Serenity.ListRequest {
        Folder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginInfo {
        ImapHost?: string;
        ImapPort?: number;
        ImapUsername?: string;
        ImapPassword?: string;
        SmtpHost?: string;
        SmtpPort?: number;
        SmtpUsername?: string;
        SmtpPassword?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailLoginRequest extends Serenity.ServiceRequest {
        LoginInfo?: EmailLoginInfo;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailMoveRequest extends Serenity.ServiceRequest {
        SourceFolder?: string;
        UniqueIds?: number[];
        TargetFolder?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
        ReplyToAll?: boolean;
        Forward?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailReplyResponse extends Serenity.ServiceResponse {
        Subject?: string;
        To?: string;
        Cc?: string;
        ReplyBody?: string;
        Attachments?: EmailAttachment[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailRetrieveRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueId?: number;
    }
}
declare namespace Serenity.EmailClient {
    namespace EmailService {
        const baseUrl = "Common/Email";
        function Login(request: EmailLoginRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Signout(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function UnreadCount(request: EmailUnreadCountRequest, onSuccess?: (response: EmailUnreadCountResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Suggest(request: EmailSuggestRequest, onSuccess?: (response: EmailSuggestResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Reply(request: EmailReplyRequest, onSuccess?: (response: EmailReplyResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Compose(request: EmailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DeleteMessages(request: EmailDeleteRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ToggleSeen(request: EmailToggleSeenRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Move(request: EmailMoveRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListMessages(request: EmailListRequest, onSuccess?: (response: Serenity.ListResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListFolders(request: ServiceRequest, onSuccess?: (response: Serenity.ListResponse<EmailFolder>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveMessage(request: EmailRetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmailItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Login = "Common/Email/Login",
            Signout = "Common/Email/Signout",
            UnreadCount = "Common/Email/UnreadCount",
            Suggest = "Common/Email/Suggest",
            Reply = "Common/Email/Reply",
            Compose = "Common/Email/Compose",
            DeleteMessages = "Common/Email/DeleteMessages",
            ToggleSeen = "Common/Email/ToggleSeen",
            Move = "Common/Email/Move",
            ListMessages = "Common/Email/ListMessages",
            ListFolders = "Common/Email/ListFolders",
            RetrieveMessage = "Common/Email/RetrieveMessage"
        }
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestRequest extends Serenity.ServiceRequest {
        ContainsText?: string;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailSuggestResponse extends Serenity.ServiceResponse {
        Suggestions?: string[];
    }
}
declare namespace Serenity.EmailClient {
    interface EmailToggleSeenRequest extends Serenity.ServiceRequest {
        Folder?: string;
        UniqueIds?: number[];
        Seen?: boolean;
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Serenity.EmailClient {
    interface EmailUnreadCountResponse extends Serenity.ServiceResponse {
        UnreadCount?: number;
    }
}
declare namespace QStock {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace QStock {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        SendThisMonth?: boolean;
        ErrorList?: string[];
    }
}
declare namespace QStock {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace QStock {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace QStock.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace QStock.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace QStock.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
        TwoFactorGuid?: string;
        TwoFactorCode?: number;
    }
}
declare namespace QStock.Membership {
    interface PortalLoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Token?: string;
    }
}
declare namespace QStock.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace QStock.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace QStock.QStockExcel {
}
declare namespace QStock.QStockExcel {
    interface OohForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class OohForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.QStockExcel {
    interface OohImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class OohImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.QStockExcel {
    interface OohRow {
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
    namespace OohRow {
        const idProperty = "Id";
        const nameProperty = "Material";
        const localTextPrefix = "QStockExcel.Ooh";
        const deletePermission = "QStockExcel:General";
        const insertPermission = "QStockExcel:General";
        const readPermission = "QStockExcel:General";
        const updatePermission = "QStockExcel:General";
        const enum Fields {
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
declare namespace QStock.QStockExcel {
    namespace OohService {
        const baseUrl = "QStockExcel/Ooh";
        function Create(request: Serenity.SaveRequest<OohRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OohRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OohRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OohRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "QStockExcel/Ooh/Create",
            Update = "QStockExcel/Ooh/Update",
            Delete = "QStockExcel/Ooh/Delete",
            Retrieve = "QStockExcel/Ooh/Retrieve",
            List = "QStockExcel/Ooh/List",
            ExcelImport = "QStockExcel/Ooh/ExcelImport"
        }
    }
}
declare namespace QStock.QStockExcel {
}
declare namespace QStock.QStockExcel {
    interface SalesEmailMapImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class SalesEmailMapImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace QStock.QStockExcel {
    interface SalesEmailMapRow {
        Id?: number;
        SalesEmployee?: string;
        SalesEmail?: string;
    }
    namespace SalesEmailMapRow {
        const idProperty = "Id";
        const nameProperty = "SalesEmployee";
        const localTextPrefix = "QStockExcel.SalesEmailMap";
        const deletePermission = "QStockExcel:General";
        const insertPermission = "QStockExcel:General";
        const readPermission = "QStockExcel:General";
        const updatePermission = "QStockExcel:General";
        const enum Fields {
            Id = "Id",
            SalesEmployee = "SalesEmployee",
            SalesEmail = "SalesEmail"
        }
    }
}
declare namespace QStock.QStockExcel {
    namespace SalesEmailMapService {
        const baseUrl = "QStockExcel/SalesEmailMap";
        function Create(request: Serenity.SaveRequest<SalesEmailMapRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesEmailMapRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesEmailMapRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesEmailMapRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function EmailImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function getEmailData(request: SendEmailRequest, onSuccess?: (response: SendEmailResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "QStockExcel/SalesEmailMap/Create",
            Update = "QStockExcel/SalesEmailMap/Update",
            Delete = "QStockExcel/SalesEmailMap/Delete",
            Retrieve = "QStockExcel/SalesEmailMap/Retrieve",
            List = "QStockExcel/SalesEmailMap/List",
            EmailImport = "QStockExcel/SalesEmailMap/EmailImport",
            getEmailData = "QStockExcel/SalesEmailMap/getEmailData"
        }
    }
}
declare namespace Serenity.Reporting {
    interface ReportRetrieveResult extends Serenity.ServiceResponse {
        IsExternalReport?: boolean;
        ReportKey?: string;
        Title?: string;
        Properties?: Serenity.PropertyItem[];
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}
declare namespace QStock {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace QStock {
    interface SendEmailRequest extends Serenity.ServiceRequest {
        isContinue?: boolean;
    }
}
declare namespace QStock {
    interface SendEmailResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        SendThisMonth?: boolean;
        ErrorList?: string[];
    }
}
declare namespace QStock.Texts {
}
declare namespace QStock.Administration {
    class DataAuditLogDialog extends Serenity.EntityDialog<DataAuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: DataAuditLogForm;
        protected getToolbarButtons(): any[];
        protected updateInterface(): void;
    }
}
declare namespace QStock.Administration {
    class DataAuditLogGrid extends Serenity.EntityGrid<DataAuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DataAuditLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace QStock.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace QStock.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace QStock.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace QStock.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace QStock.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace QStock.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace QStock.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace QStock.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace QStock.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace QStock.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace QStock.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace QStock.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace QStock.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace QStock.LanguageList {
    function getValue(): string[][];
}
declare namespace QStock.ScriptInitialization {
}
declare namespace QStock {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        get title(): string;
        set title(value: string);
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace QStock.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace QStock.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace QStock.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace QStock.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        icon?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace QStock.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace QStock.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace QStock.Membership {
    interface PromptDialogOptions {
        cssClass?: string;
        editorType?: string;
        editorOptions?: any;
        title?: string;
        message?: string;
        isHtml?: boolean;
        value?: any;
        required?: boolean;
        validateValue: (v: any) => boolean;
    }
    class PromptDialog extends Serenity.PropertyDialog<any, PromptDialogOptions> {
        constructor(opt: PromptDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected loadInitialEntity(): void;
        protected getPropertyItems(): {
            name: string;
            editorType: string;
            required: any;
            editorParams: any;
        }[];
        get value(): any;
        set value(v: any);
        static prompt(title: string, message: string, value: string, validateValue: (string: any) => boolean): void;
    }
}
declare namespace QStock {
    interface ServiceEditorOptions {
        cascadeFrom?: string;
        cascadeField?: string;
        cascadeValue?: any;
    }
    class ServiceEditorBase<TOptions extends ServiceEditorOptions, TRow> extends Serenity.Select2AjaxEditor<TOptions, TRow> {
        private cascadeLink;
        constructor(hidden: JQuery, options: TOptions);
        private setCascadeFrom;
        get cascadeValue(): any;
        set cascadeValue(value: any);
        get cascadeField(): any;
        set cascadeField(value: any);
        get cascadeFrom(): any;
        set cascadeFrom(value: any);
        private getCascadeFromValue;
        protected getIncludeColumns(): string[];
        protected getSort(): string[];
        getTypeDelay(): number;
        private lastRequest;
        executeQueryByKey(options: Serenity.ServiceOptions<Serenity.RetrieveResponse<TRow>>): void;
        executeQuery(options: Serenity.ServiceOptions<Serenity.ListResponse<TRow>>): void;
    }
}
declare namespace QStock {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace QStock.Common {
    class MailDialog extends Serenity.EntityDialog<MailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MailForm;
        constructor();
    }
}
declare namespace QStock.Common {
    class MailGrid extends Serenity.EntityGrid<MailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace QStock.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace QStock.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace QStock.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace QStock.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        icon?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace QStock.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): ({
            title: string;
            cssClass: string;
            onClick: () => void;
            icon?: undefined;
        } | {
            title: string;
            cssClass: string;
            icon: string;
            onClick: () => void;
        })[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace QStock.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace QStock.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace QStock.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace QStock.DB2 {
    class EmailLogDialog extends Serenity.EntityDialog<EmailLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmailLogForm;
    }
}
declare namespace QStock.DB2 {
    class EmailLogGrid extends Serenity.EntityGrid<EmailLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmailLogDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace QStock.DB2 {
    class OohDialog extends Serenity.EntityDialog<OohRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OohForm;
    }
}
declare namespace QStock.DB2 {
    class OohGrid extends Serenity.EntityGrid<OohRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OohDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): any[];
    }
}
declare namespace QStock.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected handleTwoFactorAuthentication(user: string, pass: string, twoFactorGuid: string, info: string): void;
        protected getTemplate(): string;
    }
}
declare namespace QStock.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace QStock.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace QStock.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace QStock.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace QStock.QStockExcel {
    class OohDialog extends Serenity.EntityDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace QStock.QStockExcel {
    class OohGrid extends Serenity.EntityGrid<OohRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OohDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace QStock.QStockExcel {
    class SalesEmailMapGrid extends Serenity.EntityGrid<SalesEmailMapRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
}
declare namespace QStock.QStockExcel {
    class SalesEmailMapImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected getDialogButtons(): Serenity.DialogButton[];
        protected confirmDialogButtons(): void;
    }
}
