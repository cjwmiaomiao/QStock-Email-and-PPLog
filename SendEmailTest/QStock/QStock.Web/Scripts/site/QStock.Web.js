var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var DataAuditLogForm = /** @class */ (function (_super) {
            __extends(DataAuditLogForm, _super);
            function DataAuditLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DataAuditLogForm.init) {
                    DataAuditLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DateTimeEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(DataAuditLogForm, [
                        'LogType', w0,
                        'LogDate', w1,
                        'UserId', w2,
                        'Tablename', w3,
                        'RecordId', w4,
                        'FieldName', w3,
                        'OldValue', w4,
                        'NewValue', w4
                    ]);
                }
                return _this;
            }
            DataAuditLogForm.formKey = 'Administration.DataAuditLog';
            return DataAuditLogForm;
        }(Serenity.PrefixedContext));
        Administration.DataAuditLogForm = DataAuditLogForm;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var DataAuditLogRow;
        (function (DataAuditLogRow) {
            DataAuditLogRow.idProperty = 'LogId';
            DataAuditLogRow.localTextPrefix = 'Administration.DataAuditLog';
            DataAuditLogRow.deletePermission = 'Administration:Security';
            DataAuditLogRow.insertPermission = 'Administration:Security';
            DataAuditLogRow.readPermission = 'Administration:Security';
            DataAuditLogRow.updatePermission = 'Administration:Security';
        })(DataAuditLogRow = Administration.DataAuditLogRow || (Administration.DataAuditLogRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var DataAuditLogService;
        (function (DataAuditLogService) {
            DataAuditLogService.baseUrl = 'Administration/DataAuditLog';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DataAuditLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(DataAuditLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DataAuditLogService = Administration.DataAuditLogService || (Administration.DataAuditLogService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var DataAuditLogType;
        (function (DataAuditLogType) {
            DataAuditLogType[DataAuditLogType["Insert"] = 1] = "Insert";
            DataAuditLogType[DataAuditLogType["Update"] = 2] = "Update";
            DataAuditLogType[DataAuditLogType["Delete"] = 3] = "Delete";
        })(DataAuditLogType = Administration.DataAuditLogType || (Administration.DataAuditLogType = {}));
        Serenity.Decorators.registerEnumType(DataAuditLogType, 'QStock.Administration.DataAuditLogType');
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0,
                        'RoleKey', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var TwoFactorAuthType;
        (function (TwoFactorAuthType) {
            TwoFactorAuthType[TwoFactorAuthType["Email"] = 1] = "Email";
            TwoFactorAuthType[TwoFactorAuthType["SMS"] = 2] = "SMS";
        })(TwoFactorAuthType = Administration.TwoFactorAuthType || (Administration.TwoFactorAuthType = {}));
        Serenity.Decorators.registerEnumType(TwoFactorAuthType, 'QStock.Administration.TwoFactorAuthType');
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EnumEditor;
                    var w4 = s.ImageUploadEditor;
                    var w5 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'MobilePhoneNumber', w0,
                        'MobilePhoneVerified', w2,
                        'TwoFactorAuth', w3,
                        'UserImage', w4,
                        'Password', w5,
                        'PasswordConfirm', w5,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var BackgroundTaskLogRow;
        (function (BackgroundTaskLogRow) {
            BackgroundTaskLogRow.idProperty = 'LogId';
            BackgroundTaskLogRow.nameProperty = 'TaskKey';
            BackgroundTaskLogRow.localTextPrefix = 'Common.BackgroundTaskLog';
            BackgroundTaskLogRow.deletePermission = 'Administration:General';
            BackgroundTaskLogRow.insertPermission = 'Administration:General';
            BackgroundTaskLogRow.readPermission = 'Administration:General';
            BackgroundTaskLogRow.updatePermission = 'Administration:General';
        })(BackgroundTaskLogRow = Common.BackgroundTaskLogRow || (Common.BackgroundTaskLogRow = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailForm = /** @class */ (function (_super) {
            __extends(MailForm, _super);
            function MailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MailForm.init) {
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
                return _this;
            }
            MailForm.formKey = 'Common.Mail';
            return MailForm;
        }(Serenity.PrefixedContext));
        Common.MailForm = MailForm;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailQueuePriority;
        (function (MailQueuePriority) {
            MailQueuePriority[MailQueuePriority["High"] = 1] = "High";
            MailQueuePriority[MailQueuePriority["Medium"] = 2] = "Medium";
            MailQueuePriority[MailQueuePriority["Low"] = 3] = "Low";
        })(MailQueuePriority = Common.MailQueuePriority || (Common.MailQueuePriority = {}));
        Serenity.Decorators.registerEnumType(MailQueuePriority, 'QStock.Common.MailQueuePriority');
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailRow;
        (function (MailRow) {
            MailRow.idProperty = 'MailId';
            MailRow.nameProperty = 'Subject';
            MailRow.localTextPrefix = 'Common.Mail';
            MailRow.deletePermission = 'QStockExcel:General';
            MailRow.insertPermission = 'QStockExcel:General';
            MailRow.readPermission = 'QStockExcel:General';
            MailRow.updatePermission = 'QStockExcel:General';
        })(MailRow = Common.MailRow || (Common.MailRow = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailService;
        (function (MailService) {
            MailService.baseUrl = 'Common/Mail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MailService[x] = function (r, s, o) {
                    return Q.serviceRequest(MailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MailService = Common.MailService || (Common.MailService = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailStatus;
        (function (MailStatus) {
            MailStatus[MailStatus["Failed"] = -1] = "Failed";
            MailStatus[MailStatus["InQueue"] = 0] = "InQueue";
            MailStatus[MailStatus["Sent"] = 1] = "Sent";
        })(MailStatus = Common.MailStatus || (Common.MailStatus = {}));
        Serenity.Decorators.registerEnumType(MailStatus, 'QStock.Common.MailStatus');
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailComposeForm = /** @class */ (function (_super) {
            __extends(EmailComposeForm, _super);
            function EmailComposeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmailComposeForm.init) {
                    EmailComposeForm.init = true;
                    var s = Serenity;
                    var w0 = EmailClient.EmailSuggestEditor;
                    var w1 = Serenity.StringEditor;
                    var w2 = EmailClient.EmailContentEditor;
                    var w3 = Serenity.MultipleImageUploadEditor;
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
                return _this;
            }
            EmailComposeForm.formKey = 'Serenity.EmailClient.EmailCompose';
            return EmailComposeForm;
        }(Serenity.PrefixedContext));
        EmailClient.EmailComposeForm = EmailComposeForm;
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var Serenity;
(function (Serenity) {
    var EmailClient;
    (function (EmailClient) {
        var EmailService;
        (function (EmailService) {
            EmailService.baseUrl = 'Common/Email';
            [
                'Login',
                'Signout',
                'UnreadCount',
                'Suggest',
                'Reply',
                'Compose',
                'DeleteMessages',
                'ToggleSeen',
                'Move',
                'ListMessages',
                'ListFolders',
                'RetrieveMessage'
            ].forEach(function (x) {
                EmailService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmailService = EmailClient.EmailService || (EmailClient.EmailService = {}));
    })(EmailClient = Serenity.EmailClient || (Serenity.EmailClient = {}));
})(Serenity || (Serenity = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohForm = /** @class */ (function (_super) {
            __extends(OohForm, _super);
            function OohForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OohForm.init) {
                    OohForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OohForm, [
                        'SalesOrderItem', w0,
                        'Material', w0,
                        'MaterialDescription', w0,
                        'ItemCategory', w0,
                        'SalesEmployee', w0,
                        'SalesEmployeename', w0
                    ]);
                }
                return _this;
            }
            OohForm.formKey = 'QStockExcel.Ooh';
            return OohForm;
        }(Serenity.PrefixedContext));
        QStockExcel.OohForm = OohForm;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohImportForm = /** @class */ (function (_super) {
            __extends(OohImportForm, _super);
            function OohImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OohImportForm.init) {
                    OohImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(OohImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            OohImportForm.formKey = 'QStockExcel.OohImport';
            return OohImportForm;
        }(Serenity.PrefixedContext));
        QStockExcel.OohImportForm = OohImportForm;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohRow;
        (function (OohRow) {
            OohRow.idProperty = 'Id';
            OohRow.nameProperty = 'Material';
            OohRow.localTextPrefix = 'QStockExcel.Ooh';
            OohRow.deletePermission = 'QStockExcel:General';
            OohRow.insertPermission = 'QStockExcel:General';
            OohRow.readPermission = 'QStockExcel:General';
            OohRow.updatePermission = 'QStockExcel:General';
        })(OohRow = QStockExcel.OohRow || (QStockExcel.OohRow = {}));
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohService;
        (function (OohService) {
            OohService.baseUrl = 'QStockExcel/Ooh';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                OohService[x] = function (r, s, o) {
                    return Q.serviceRequest(OohService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OohService = QStockExcel.OohService || (QStockExcel.OohService = {}));
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapRow;
        (function (SalesEmailMapRow) {
            SalesEmailMapRow.idProperty = 'Id';
            SalesEmailMapRow.nameProperty = 'SalesEmployee';
            SalesEmailMapRow.localTextPrefix = 'QStockExcel.SalesEmailMap';
            SalesEmailMapRow.deletePermission = 'QStockExcel:General';
            SalesEmailMapRow.insertPermission = 'QStockExcel:General';
            SalesEmailMapRow.readPermission = 'QStockExcel:General';
            SalesEmailMapRow.updatePermission = 'QStockExcel:General';
        })(SalesEmailMapRow = QStockExcel.SalesEmailMapRow || (QStockExcel.SalesEmailMapRow = {}));
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapService;
        (function (SalesEmailMapService) {
            SalesEmailMapService.baseUrl = 'QStockExcel/SalesEmailMap';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'EmailImport',
                'getEmailData'
            ].forEach(function (x) {
                SalesEmailMapService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesEmailMapService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesEmailMapService = QStockExcel.SalesEmailMapService || (QStockExcel.SalesEmailMapService = {}));
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Texts;
    (function (Texts) {
        QStock['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { DataAuditLog: { FieldName: 1, LogDate: 1, LogId: 1, LogType: 1, NewValue: 1, OldValue: 1, RecordId: 1, Tablename: 1, UserDisplayName: 1, UserId: 1, Username: 1 }, Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleKey: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, ImpersonationToken: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, MobilePhoneNumber: 1, MobilePhoneVerified: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TwoFactorAuth: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { BackgroundTaskLog: { LogId: 1, Message: 1, RunAt: 1, Server: 1, Status: 1, TaskKey: 1 }, Mail: { Attachments: 1, Bcc: 1, Body: 1, Cc: 1, ErrorMessage: 1, InsertDate: 1, InsertUser: 1, InsertUserId: 1, LockExpiration: 1, MailFrom: 1, MailId: 1, MailTo: 1, ModuleName: 1, Priority: 1, ReplyTo: 1, RetryCount: 1, SentDate: 1, Status: 1, Subject: 1, Uid: 1 }, UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, QStockExcel: { Ooh: { CalendarDay: 1, CustPONo: 1, CustomerMaterial: 1, DCBusinessUnit: 1, FirstRequestedDate: 1, Id: 1, ItemCategory: 1, Material: 1, MaterialDescription: 1, RFNetvalue: 1, RFQty: 1, SOCreatedOn: 1, SalesEmployee: 1, SalesEmployeename: 1, SalesOrder: 1, SalesOrderItem: 1, SoldtoParty: 1, SoldtoPartyname: 1 }, QStockList: { AvailableStock: 1, GrDate: 1, Id: 1, InsertDate: 1, IsOverTwoYears: 1, Material: 1, Plant: 1, Reason: 1, StockCategory: 1 }, SalesEmailMap: { Id: 1, SalesEmail: 1, SalesEmployee: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, CardViewMixin: { CardView: 1, ListView: 1 }, Dashboard: { ContentDescription: 1 }, Dialogs: { PendingChangesConfirmation: 1 }, DraggableGroupingMixin: { CollapseAllButton: 1, DropPlaceholder: 1, ExpandAllButton: 1 }, EmailClient: { BackButton: 1, CCLabel: 1, CancelButton: 1, ComposeButton: 1, DeleteButton: 1, DeleteMessageConfirmation: 1, DeleteMessageSuccess: 1, DeleteNoSelectionWarning: 1, DeleteSelectedConfirmation: 1, DeleteSelectedSuccess: 1, FolderNames: { drafts: 1, inbox: 1, junk: 1, sent: 1, trash: 1 }, FoldersTitle: 1, ForwardButton: 1, ImapHost: 1, ImapPassword: 1, ImapPort: 1, ImapUsername: 1, LoginButton: 1, LoginTitle: 1, MoveMessageSuccess: 1, MoveNoSelectionWarning: 1, MoveSelectedSuccess: 1, MoveToFolder: 1, NewEmailDialogTitle: 1, PageTitle: 1, QuickSettings: 1, RefreshButton: 1, ReplyAllButton: 1, ReplyButton: 1, ReplyEmailDialogTitle: 1, SearchPlaceholder: 1, SendButton: 1, SignoutButton: 1, SmtpHost: 1, SmtpPassword: 1, SmtpPort: 1, SmtpUsername: 1, ToLabel: 1, ToggleReadButton: 1, ToggleSeenNoSelectionWarning: 1 }, FavoriteViewsMixin: { DeleteButtonHint: 1, DeleteSuccessMessage: 1, EmptyNameError: 1, FavoriteViews: 1, LoadedViewMessage: 1, SaveButton: 1, SaveSuccessMessage: 1, SaveView: 1 }, HeaderFiltersMixin: { CancelButton: 1, ClearButton: 1, OkButton: 1, Search: 1, SelectAll: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeAzure: 1, ThemeAzureLight: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeCosmos: 1, ThemeCosmosLight: 1, ThemeGlassy: 1, ThemeGlassyLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 }, WizardDialog: { BackButton: 1, CancelMessage: 1, FinishButton: 1, NextButton: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = QStock.Texts || (QStock.Texts = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var DataAuditLogDialog = /** @class */ (function (_super) {
            __extends(DataAuditLogDialog, _super);
            function DataAuditLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.DataAuditLogForm(_this.idPrefix);
                return _this;
            }
            DataAuditLogDialog.prototype.getFormKey = function () { return Administration.DataAuditLogForm.formKey; };
            DataAuditLogDialog.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getNameProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogDialog.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogDialog.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogDialog.prototype.getToolbarButtons = function () {
                return [];
            };
            DataAuditLogDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
            };
            DataAuditLogDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DataAuditLogDialog);
            return DataAuditLogDialog;
        }(Serenity.EntityDialog));
        Administration.DataAuditLogDialog = DataAuditLogDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var DataAuditLogGrid = /** @class */ (function (_super) {
            __extends(DataAuditLogGrid, _super);
            function DataAuditLogGrid(container) {
                return _super.call(this, container) || this;
            }
            DataAuditLogGrid.prototype.getColumnsKey = function () { return 'Administration.DataAuditLog'; };
            DataAuditLogGrid.prototype.getDialogType = function () { return Administration.DataAuditLogDialog; };
            DataAuditLogGrid.prototype.getIdProperty = function () { return Administration.DataAuditLogRow.idProperty; };
            DataAuditLogGrid.prototype.getLocalTextPrefix = function () { return Administration.DataAuditLogRow.localTextPrefix; };
            DataAuditLogGrid.prototype.getService = function () { return Administration.DataAuditLogService.baseUrl; };
            DataAuditLogGrid.prototype.getButtons = function () {
                return [];
            };
            DataAuditLogGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "LogType" /* LogType */; }).format = function (ctx) {
                    var icon = null;
                    switch (ctx.value) {
                        case Administration.DataAuditLogType.Delete:
                            icon = "fa-times text-red";
                            break;
                        case Administration.DataAuditLogType.Insert:
                            icon = "fa-plus text-green";
                            break;
                        case Administration.DataAuditLogType.Update:
                            icon = "fa-pencil-square-o text-orange";
                            break;
                    }
                    return (icon ? '<i class="fa ' + icon + '"></i> ' : '') +
                        Serenity.EnumFormatter.format(Administration.DataAuditLogType, ctx.value);
                };
                return columns;
            };
            DataAuditLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DataAuditLogGrid);
            return DataAuditLogGrid;
        }(Serenity.EntityGrid));
        Administration.DataAuditLogGrid = DataAuditLogGrid;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                var impersonate = Q.tryFirst(columns, function (x) { return x.field == "ImpersonationToken"; });
                if (impersonate != null) {
                    impersonate.format = function (ctx) {
                        if (!ctx.value)
                            return "";
                        return "<a target=\"_blank\" href=\"" + Q.resolveUrl('~/Account/ImpersonateAs?token=') + ctx.value + "\">"
                            + "<i class=\"fa fa-user-secret text-blue\"></i></a>";
                    };
                }
                return columns;
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = QStock.Authorization || (QStock.Authorization = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = QStock.Administration || (QStock.Administration = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = QStock.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = QStock.LanguageList || (QStock.LanguageList = {}));
})(QStock || (QStock = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var QStock;
(function (QStock) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('QStock');
        Serenity.EntityDialog.defaultLanguageList = QStock.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        Serenity.setupUIOverrides();
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
        $(function () {
            // let demo page use its own settings for idle timeout
            if (window.location.pathname.indexOf('Samples/IdleTimeout') > 0)
                return;
            var meta = $('meta[name=username]');
            if ((meta.length && meta.attr('content')) ||
                (!meta.length && Q.Authorization.isLoggedIn)) {
                new Serenity.IdleTimeout({
                    activityTimeout: 15 * 60,
                    warningDuration: 2 * 60
                });
            }
        });
    })(ScriptInitialization = QStock.ScriptInitialization || (QStock.ScriptInitialization = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    QStock.BasicProgressDialog = BasicProgressDialog;
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new QStock.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm(Q.text('Site.Dialogs.PendingChangesConfirmation'), function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = QStock.DialogUtils || (QStock.DialogUtils = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    icon: options.icon,
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var PromptDialog = /** @class */ (function (_super) {
            __extends(PromptDialog, _super);
            function PromptDialog(opt) {
                var _this = _super.call(this, opt) || this;
                if (!Q.isEmptyOrNull(_this.options.cssClass))
                    _this.element.addClass(_this.options.cssClass);
                if (!Q.isEmptyOrNull(_this.options.message)) {
                    var msg = $("<div/>").addClass("message")
                        .insertBefore(_this.byId("PropertyGrid"));
                    _this.options.isHtml ? msg.html(_this.options.message) : msg.text(_this.options.message);
                }
                return _this;
            }
            PromptDialog_1 = PromptDialog;
            PromptDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text("Dialogs.OkButton"),
                        click: function () {
                            if (!_this.validateForm())
                                return;
                            if (_this.options.validateValue == null || _this.options.validateValue(_this.value))
                                _this.dialogClose();
                        },
                    },
                    {
                        text: Q.text("Dialogs.CancelButton"),
                        click: function () { return _this.dialogClose; }
                    }
                ];
                opt.title = this.options.title || "Prompt";
                return opt;
            };
            PromptDialog.prototype.loadInitialEntity = function () {
                this.value = this.options.value;
            };
            PromptDialog.prototype.getPropertyItems = function () {
                return [
                    {
                        name: "Value",
                        editorType: this.options.editorType || "String",
                        required: Q.coalesce(this.options.required, true),
                        editorParams: this.options.editorOptions
                    }
                ];
            };
            Object.defineProperty(PromptDialog.prototype, "value", {
                get: function () {
                    return this.getSaveEntity().Value;
                },
                set: function (v) {
                    this.propertyGrid.load({
                        Value: v
                    });
                },
                enumerable: true,
                configurable: true
            });
            PromptDialog.prompt = function (title, message, value, validateValue) {
                new PromptDialog_1({
                    title: title,
                    message: message,
                    value: value,
                    validateValue: function (v) { return validateValue(v); }
                }).dialogOpen();
            };
            var PromptDialog_1;
            PromptDialog = PromptDialog_1 = __decorate([
                Serenity.Decorators.registerClass()
            ], PromptDialog);
            return PromptDialog;
        }(Serenity.PropertyDialog));
        Membership.PromptDialog = PromptDialog;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var ServiceEditorBase = /** @class */ (function (_super) {
        __extends(ServiceEditorBase, _super);
        function ServiceEditorBase(hidden, options) {
            var _this = _super.call(this, hidden, options) || this;
            _this.setCascadeFrom(_this.options.cascadeFrom);
            return _this;
        }
        ServiceEditorBase.prototype.setCascadeFrom = function (value) {
            var _this = this;
            if (Q.isEmptyOrNull(value)) {
                if (this.cascadeLink) {
                    this.cascadeLink.set_parentID(null);
                    this.cascadeLink = null;
                }
                this.options.cascadeFrom = null;
                return;
            }
            this.cascadeLink = new Serenity.CascadedWidgetLink(Serenity.Widget, this, function (p) { return _this.cascadeValue = _this.getCascadeFromValue(p); });
            this.cascadeLink.set_parentID(value);
            this.options.cascadeFrom = value;
        };
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeValue", {
            get: function () {
                return this.options.cascadeValue;
            },
            set: function (value) {
                if (value !== this.options.cascadeValue) {
                    this.options.cascadeValue = value;
                    this.value = null;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeField", {
            get: function () {
                return this.options.cascadeField || this.options.cascadeFrom;
            },
            set: function (value) {
                this.options.cascadeField = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ServiceEditorBase.prototype, "cascadeFrom", {
            get: function () {
                return this.options.cascadeFrom;
            },
            set: function (value) {
                if (value !== this.options.cascadeFrom) {
                    this.setCascadeFrom(value);
                }
            },
            enumerable: true,
            configurable: true
        });
        ServiceEditorBase.prototype.getCascadeFromValue = function (parent) {
            return Serenity.EditorUtils.getValue(parent);
        };
        ServiceEditorBase.prototype.getIncludeColumns = function () {
            return [];
        };
        ServiceEditorBase.prototype.getSort = function () {
            return [];
        };
        ServiceEditorBase.prototype.getTypeDelay = function () {
            return 500;
        };
        ServiceEditorBase.prototype.executeQueryByKey = function (options) {
            var request = options.request;
            request.ColumnSelection = 1 /* keyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            _super.prototype.executeQueryByKey.call(this, options);
        };
        ServiceEditorBase.prototype.executeQuery = function (options) {
            var _this = this;
            var request = options.request;
            request.ColumnSelection = 1 /* KeyOnly */;
            request.IncludeColumns = this.getIncludeColumns();
            request.Sort = this.getSort();
            request.ExcludeTotalCount = true;
            if (this.cascadeField) {
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter[this.cascadeField] = this.cascadeValue;
            }
            options.blockUI = false;
            options.error = function () { };
            if (this.lastRequest != null && this.lastRequest.readyState != XMLHttpRequest.DONE)
                this.lastRequest.abort();
            this.lastRequest = Q.serviceCall(options);
            this.lastRequest.then(function () { return _this.lastRequest = null; }, function () { return _this.lastRequest = null; });
        };
        ServiceEditorBase = __decorate([
            Serenity.Decorators.registerClass()
        ], ServiceEditorBase);
        return ServiceEditorBase;
    }(Serenity.Select2AjaxEditor));
    QStock.ServiceEditorBase = ServiceEditorBase;
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    QStock.StaticTextBlock = StaticTextBlock;
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailDialog = /** @class */ (function (_super) {
            __extends(MailDialog, _super);
            function MailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Common.MailForm(_this.idPrefix);
                _this.form.Status.changeSelect2(function (e) {
                    if (_this.form.Status.value == Common.MailStatus.InQueue.toString()) {
                        _this.form.RetryCount.value = 0;
                        _this.form.LockExpiration.valueAsDate = new Date();
                    }
                });
                return _this;
            }
            MailDialog.prototype.getFormKey = function () { return Common.MailForm.formKey; };
            MailDialog.prototype.getIdProperty = function () { return Common.MailRow.idProperty; };
            MailDialog.prototype.getLocalTextPrefix = function () { return Common.MailRow.localTextPrefix; };
            MailDialog.prototype.getNameProperty = function () { return Common.MailRow.nameProperty; };
            MailDialog.prototype.getService = function () { return Common.MailService.baseUrl; };
            MailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MailDialog);
            return MailDialog;
        }(Serenity.EntityDialog));
        Common.MailDialog = MailDialog;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var MailGrid = /** @class */ (function (_super) {
            __extends(MailGrid, _super);
            function MailGrid(container) {
                return _super.call(this, container) || this;
            }
            MailGrid.prototype.getColumnsKey = function () { return 'Common.Mail'; };
            MailGrid.prototype.getDialogType = function () { return Common.MailDialog; };
            MailGrid.prototype.getIdProperty = function () { return Common.MailRow.idProperty; };
            MailGrid.prototype.getLocalTextPrefix = function () { return Common.MailRow.localTextPrefix; };
            MailGrid.prototype.getService = function () { return Common.MailService.baseUrl; };
            MailGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.splice(Q.indexOf(buttons, function (x) { return x.cssClass == "add-button"; }), 1);
                return buttons;
            };
            MailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MailGrid);
            return MailGrid;
        }(Serenity.EntityGrid));
        Common.MailGrid = MailGrid;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('QStockTheme', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'azure', Q.text('Site.Layout.ThemeAzure'));
                Q.addOption(select, 'azure-light', Q.text('Site.Layout.ThemeAzureLight'));
                Q.addOption(select, 'cosmos', Q.text('Site.Layout.ThemeCosmos'));
                Q.addOption(select, 'cosmos-light', Q.text('Site.Layout.ThemeCosmosLight'));
                Q.addOption(select, 'glassy', Q.text('Site.Layout.ThemeGlassy'));
                Q.addOption(select, 'glassy-light', Q.text('Site.Layout.ThemeGlassyLight'));
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    icon: options.icon,
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('run-button')
                    .toggle(this.report && this.report.IsExternalReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport && !this.report.IsExternalReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport && !this.report.IsExternalReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'Run',
                        cssClass: 'run-button',
                        icon: 'fa-print text-blue',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = QStock.Common || (QStock.Common = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var EmailLogDialog = /** @class */ (function (_super) {
            __extends(EmailLogDialog, _super);
            function EmailLogDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DB2.EmailLogForm(_this.idPrefix);
                return _this;
            }
            EmailLogDialog.prototype.getFormKey = function () { return DB2.EmailLogForm.formKey; };
            EmailLogDialog.prototype.getIdProperty = function () { return DB2.EmailLogRow.idProperty; };
            EmailLogDialog.prototype.getLocalTextPrefix = function () { return DB2.EmailLogRow.localTextPrefix; };
            EmailLogDialog.prototype.getNameProperty = function () { return DB2.EmailLogRow.nameProperty; };
            EmailLogDialog.prototype.getService = function () { return DB2.EmailLogService.baseUrl; };
            EmailLogDialog.prototype.getDeletePermission = function () { return DB2.EmailLogRow.deletePermission; };
            EmailLogDialog.prototype.getInsertPermission = function () { return DB2.EmailLogRow.insertPermission; };
            EmailLogDialog.prototype.getUpdatePermission = function () { return DB2.EmailLogRow.updatePermission; };
            EmailLogDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmailLogDialog);
            return EmailLogDialog;
        }(Serenity.EntityDialog));
        DB2.EmailLogDialog = EmailLogDialog;
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var EmailLogGrid = /** @class */ (function (_super) {
            __extends(EmailLogGrid, _super);
            function EmailLogGrid(container) {
                return _super.call(this, container) || this;
            }
            EmailLogGrid.prototype.getColumnsKey = function () { return 'DB2.EmailLog'; };
            EmailLogGrid.prototype.getDialogType = function () { return DB2.EmailLogDialog; };
            EmailLogGrid.prototype.getIdProperty = function () { return DB2.EmailLogRow.idProperty; };
            EmailLogGrid.prototype.getInsertPermission = function () { return DB2.EmailLogRow.insertPermission; };
            EmailLogGrid.prototype.getLocalTextPrefix = function () { return DB2.EmailLogRow.localTextPrefix; };
            EmailLogGrid.prototype.getService = function () { return DB2.EmailLogService.baseUrl; };
            EmailLogGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmailLogGrid);
            return EmailLogGrid;
        }(Serenity.EntityGrid));
        DB2.EmailLogGrid = EmailLogGrid;
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var OohDialog = /** @class */ (function (_super) {
            __extends(OohDialog, _super);
            function OohDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new DB2.OohForm(_this.idPrefix);
                return _this;
            }
            OohDialog.prototype.getFormKey = function () { return DB2.OohForm.formKey; };
            OohDialog.prototype.getIdProperty = function () { return DB2.OohRow.idProperty; };
            OohDialog.prototype.getLocalTextPrefix = function () { return DB2.OohRow.localTextPrefix; };
            OohDialog.prototype.getNameProperty = function () { return DB2.OohRow.nameProperty; };
            OohDialog.prototype.getService = function () { return DB2.OohService.baseUrl; };
            OohDialog.prototype.getDeletePermission = function () { return DB2.OohRow.deletePermission; };
            OohDialog.prototype.getInsertPermission = function () { return DB2.OohRow.insertPermission; };
            OohDialog.prototype.getUpdatePermission = function () { return DB2.OohRow.updatePermission; };
            OohDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OohDialog);
            return OohDialog;
        }(Serenity.EntityDialog));
        DB2.OohDialog = OohDialog;
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var OohGrid = /** @class */ (function (_super) {
            __extends(OohGrid, _super);
            function OohGrid(container) {
                return _super.call(this, container) || this;
            }
            OohGrid.prototype.getColumnsKey = function () { return 'DB2.Ooh'; };
            OohGrid.prototype.getDialogType = function () { return DB2.OohDialog; };
            OohGrid.prototype.getIdProperty = function () { return DB2.OohRow.idProperty; };
            OohGrid.prototype.getInsertPermission = function () { return DB2.OohRow.insertPermission; };
            OohGrid.prototype.getLocalTextPrefix = function () { return DB2.OohRow.localTextPrefix; };
            OohGrid.prototype.getService = function () { return DB2.OohService.baseUrl; };
            OohGrid.prototype.getButtons = function () {
                return [];
            };
            OohGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OohGrid);
            return OohGrid;
        }(Serenity.EntityGrid));
        DB2.OohGrid = OohGrid;
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                $.fn['vegas'] && $('body')['vegas']({
                    delay: 30000,
                    cover: true,
                    overlay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA3NCSVQICAjb4U" +
                        "/gAAAABlBMVEX///8AAABVwtN+AAAAAnRSTlMA/1uRIrUAAAAJcEhZcwAAAsQAAALEAVuRnQsAAAAWdEVYdENyZWF0" +
                        "aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljaGBgAAABhACBrONIPgAAAABJRU5ErkJggg==",
                    slides: [
                        { src: Q.resolveUrl("~/Content/site/slides/slide1.jpg"), transition: 'fade' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide2.jpg"), transition: 'zoomOut' },
                        { src: Q.resolveUrl("~/Content/site/slides/slide3.jpg"), transition: 'swirlLeft' }
                    ]
                });
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "TwoFactorAuthenticationRequired") {
                                var args = response.Error.Arguments.split('|');
                                _this.handleTwoFactorAuthentication(request.Username, request.Password, args[1], args[0]);
                                return;
                            }
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.handleTwoFactorAuthentication = function (user, pass, twoFactorGuid, info) {
                var _this = this;
                var tries = 0;
                var remaining = 120;
                var dialog = null;
                var showDialog = function () {
                    dialog = new Membership.PromptDialog({
                        title: "Two Factor Authentication",
                        editorOptions: {
                            maxLength: 4,
                        },
                        editorType: "Integer",
                        message: info,
                        isHtml: true,
                        required: true,
                        validateValue: function (x) {
                            if (x >= 1000 && x <= 9999) {
                                tries++;
                                Q.serviceCall({
                                    url: Q.resolveUrl('~/Account/Login'),
                                    request: {
                                        Username: user,
                                        Password: pass,
                                        TwoFactorGuid: twoFactorGuid,
                                        TwoFactorCode: x
                                    },
                                    onSuccess: function (r) {
                                        _this.redirectToReturnUrl();
                                        return;
                                    },
                                    onError: function (z) {
                                        Q.notifyError(z.Error.Message);
                                        if (tries > 2) {
                                            Q.notifyError("Code entered is invalid! You can't try more than 3 times!");
                                            dialog = null;
                                            return;
                                        }
                                        showDialog();
                                    }
                                });
                                return true;
                            }
                            Q.notifyError("Please enter a valid code!");
                            return false;
                        }
                    });
                    dialog.dialogOpen();
                    dialog.element.on("dialogclose.me", function (x) {
                        if (dialog != null) {
                            dialog.element.off("dialogclose.me");
                            dialog = null;
                        }
                    });
                };
                function updateCounter() {
                    remaining -= 1;
                    if (dialog != null) {
                        dialog.element.find("span.counter").text(remaining.toString());
                    }
                    if (remaining >= 0)
                        setTimeout(updateCounter, 1000);
                    else if (dialog != null)
                        dialog.dialogClose();
                }
                ;
                showDialog();
                window.setTimeout(updateCounter, 1000);
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n<div class=\"flex-layout\">\n    <div class=\"logo\"></div>\n    <h3>" + Q.text("Forms.Membership.Login.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div class=\"s-Form\">\n            <div class=\"fieldset ui-widget ui-widget-content ui-corner-all\">\n                <div id=\"~_PropertyGrid\"></div>\n                <div class=\"clear\"></div>\n            </div>\n            <div class=\"buttons\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n            <div class=\"actions\">\n                <a href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.ForgotPassword") + "</a>\n                <a href=\"" + Q.resolveUrl('~/Account/SignUp') + "\"><i class=\"fa fa-angle-right\"></i>&nbsp;" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n                <div class=\"clear\"></div>\n            </div>\n        </div>\n    </form>\n</div>\n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = QStock.Membership || (QStock.Membership = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohDialog = /** @class */ (function (_super) {
            __extends(OohDialog, _super);
            function OohDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new QStockExcel.OohForm(_this.idPrefix);
                return _this;
            }
            OohDialog.prototype.getFormKey = function () { return QStockExcel.OohForm.formKey; };
            OohDialog.prototype.getIdProperty = function () { return QStockExcel.OohRow.idProperty; };
            OohDialog.prototype.getLocalTextPrefix = function () { return QStockExcel.OohRow.localTextPrefix; };
            OohDialog.prototype.getNameProperty = function () { return QStockExcel.OohRow.nameProperty; };
            OohDialog.prototype.getService = function () { return QStockExcel.OohService.baseUrl; };
            OohDialog.prototype.getDeletePermission = function () { return QStockExcel.OohRow.deletePermission; };
            OohDialog.prototype.getInsertPermission = function () { return QStockExcel.OohRow.insertPermission; };
            OohDialog.prototype.getUpdatePermission = function () { return QStockExcel.OohRow.updatePermission; };
            OohDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OohDialog);
            return OohDialog;
        }(Serenity.EntityDialog));
        QStockExcel.OohDialog = OohDialog;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohGrid = /** @class */ (function (_super) {
            __extends(OohGrid, _super);
            function OohGrid(container) {
                return _super.call(this, container) || this;
            }
            OohGrid.prototype.getColumnsKey = function () { return 'QStockExcel.Ooh'; };
            OohGrid.prototype.getDialogType = function () { return QStockExcel.OohDialog; };
            OohGrid.prototype.getIdProperty = function () { return QStockExcel.OohRow.idProperty; };
            OohGrid.prototype.getInsertPermission = function () { return QStockExcel.OohRow.insertPermission; };
            OohGrid.prototype.getLocalTextPrefix = function () { return QStockExcel.OohRow.localTextPrefix; };
            OohGrid.prototype.getService = function () { return QStockExcel.OohService.baseUrl; };
            OohGrid.prototype.getButtons = function () {
                //// call base method to get list of buttons
                //var buttons = super.getButtons();
                var _this = this;
                //// add our import button
                //buttons.push({
                //    title: 'Import From Excel',
                //    cssClass: 'export-xlsx-button',
                //    onClick: () => {
                //        // open import dialog, let it handle rest
                //        var dialog = new ProductExcelImportDialog();
                //        dialog.element.on('dialogclose', () => {
                //            this.refresh();
                //            dialog = null;
                //        });
                //        dialog.dialogOpen();
                //    }
                //});
                return [
                    {
                        title: 'Import OOH Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () {
                            // open import dialog, let it handle rest
                            var dialog = new QStockExcel.OohImportDialog();
                            dialog.element.on('dialogclose', function () {
                                _this.refresh();
                                dialog = null;
                            });
                            dialog.dialogOpen();
                        }
                    }
                ];
            };
            OohGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OohGrid);
            return OohGrid;
        }(Serenity.EntityGrid));
        QStockExcel.OohGrid = OohGrid;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapGrid = /** @class */ (function (_super) {
            __extends(SalesEmailMapGrid, _super);
            function SalesEmailMapGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesEmailMapGrid.prototype.getColumnsKey = function () { return 'QStockExcel.SalesEmailMap'; };
            // protected getDialogType() { return SalesEmailMapDialog; }
            SalesEmailMapGrid.prototype.getIdProperty = function () { return QStockExcel.SalesEmailMapRow.idProperty; };
            SalesEmailMapGrid.prototype.getInsertPermission = function () { return QStockExcel.SalesEmailMapRow.insertPermission; };
            SalesEmailMapGrid.prototype.getLocalTextPrefix = function () { return QStockExcel.SalesEmailMapRow.localTextPrefix; };
            SalesEmailMapGrid.prototype.getService = function () { return QStockExcel.SalesEmailMapService.baseUrl; };
            SalesEmailMapGrid.prototype.getButtons = function () {
                var _this = this;
                var isContinue = false;
                return [
                    {
                        title: 'Import SalesEmail Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () {
                            var dialog = new QStockExcel.SalesEmailMapImportDialog();
                            dialog.element.on('dialogclose', function () {
                                _this.refresh();
                                dialog = null;
                            });
                            dialog.dialogOpen();
                        }
                    }, {
                        title: "Send Email",
                        cssClass: 'mail-button',
                        onClick: function () {
                            QStockExcel.SalesEmailMapService.getEmailData({
                                isContinue: false
                            }, function (response) {
                                if (response.SendThisMonth) {
                                    Q.confirm("You have sent Emails this month, do you want continue to send emails", function () {
                                        continueWithEmailSending();
                                    }, {
                                        onNo: function () {
                                            Q.notifyInfo("Send Cancelled");
                                        },
                                    });
                                }
                                else {
                                    Q.confirm("You sure you wanna Send Emails?", function () {
                                        continueWithEmailSending();
                                    }, {
                                        onNo: function () {
                                            Q.notifyInfo("Send Cancelled");
                                        },
                                    });
                                }
                            });
                        }
                    }
                ];
            };
            SalesEmailMapGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesEmailMapGrid);
            return SalesEmailMapGrid;
        }(Serenity.EntityGrid));
        QStockExcel.SalesEmailMapGrid = SalesEmailMapGrid;
        function continueWithEmailSending() {
            var isContinue = true;
            QStockExcel.SalesEmailMapService.getEmailData({
                isContinue: isContinue
            }, function (response) {
                Q.notifyInfo('Updated: ' + (response.Updated || 0));
                if (response.ErrorList != null && response.ErrorList.length > 0) {
                    Q.notifyError(response.ErrorList.join(',\r\n '));
                }
                else {
                    Q.notifySuccess("Emails have been sent");
                }
            });
        }
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapImportDialog = /** @class */ (function (_super) {
            __extends(SalesEmailMapImportDialog, _super);
            function SalesEmailMapImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new QStockExcel.SalesEmailMapImportForm(_this.idPrefix);
                return _this;
            }
            SalesEmailMapImportDialog.prototype.getDialogTitle = function () {
                return "SalesEmail Import";
            };
            SalesEmailMapImportDialog.prototype.getToolbarButtons = function () {
                var buttons = [];
                return buttons;
            };
            SalesEmailMapImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            QStockExcel.SalesEmailMapService.EmailImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            SalesEmailMapImportDialog.prototype.confirmDialogButtons = function () {
                $('#ConfirmDialogButtons').click(function () {
                    Q.confirm("Click one of buttons, or close dialog with [x] on top right, I'll tell you what you did!", function () {
                        Q.notifySuccess("You clicked YES. Great!");
                    }, {
                        onNo: function () {
                            Q.notifyInfo("You clicked NO. Why?");
                        },
                        onCancel: function () {
                            Q.notifyError("You clicked X. Operation is cancelled. Will try again?");
                        }
                    });
                });
            };
            SalesEmailMapImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesEmailMapImportDialog);
            return SalesEmailMapImportDialog;
        }(Serenity.EntityDialog));
        QStockExcel.SalesEmailMapImportDialog = SalesEmailMapImportDialog;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapImportForm = /** @class */ (function (_super) {
            __extends(SalesEmailMapImportForm, _super);
            function SalesEmailMapImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesEmailMapImportForm.init) {
                    SalesEmailMapImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(SalesEmailMapImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            SalesEmailMapImportForm.formKey = 'QStockExcel.SalesEmailMapImport';
            return SalesEmailMapImportForm;
        }(Serenity.PrefixedContext));
        QStockExcel.SalesEmailMapImportForm = SalesEmailMapImportForm;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapDialog = /** @class */ (function (_super) {
            __extends(SalesEmailMapDialog, _super);
            function SalesEmailMapDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new QStockExcel.SalesEmailMapForm(_this.idPrefix);
                return _this;
            }
            SalesEmailMapDialog.prototype.getFormKey = function () { return QStockExcel.SalesEmailMapForm.formKey; };
            SalesEmailMapDialog.prototype.getIdProperty = function () { return QStockExcel.SalesEmailMapRow.idProperty; };
            SalesEmailMapDialog.prototype.getLocalTextPrefix = function () { return QStockExcel.SalesEmailMapRow.localTextPrefix; };
            SalesEmailMapDialog.prototype.getNameProperty = function () { return QStockExcel.SalesEmailMapRow.nameProperty; };
            SalesEmailMapDialog.prototype.getService = function () { return QStockExcel.SalesEmailMapService.baseUrl; };
            SalesEmailMapDialog.prototype.getDeletePermission = function () { return QStockExcel.SalesEmailMapRow.deletePermission; };
            SalesEmailMapDialog.prototype.getInsertPermission = function () { return QStockExcel.SalesEmailMapRow.insertPermission; };
            SalesEmailMapDialog.prototype.getUpdatePermission = function () { return QStockExcel.SalesEmailMapRow.updatePermission; };
            SalesEmailMapDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesEmailMapDialog);
            return SalesEmailMapDialog;
        }(Serenity.EntityDialog));
        QStockExcel.SalesEmailMapDialog = SalesEmailMapDialog;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var SalesEmailMapForm = /** @class */ (function (_super) {
            __extends(SalesEmailMapForm, _super);
            function SalesEmailMapForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesEmailMapForm.init) {
                    SalesEmailMapForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SalesEmailMapForm, [
                        'SalesEmployee', w0,
                        'SalesEmail', w0
                    ]);
                }
                return _this;
            }
            SalesEmailMapForm.formKey = 'QStockExcel.SalesEmailMap';
            return SalesEmailMapForm;
        }(Serenity.PrefixedContext));
        QStockExcel.SalesEmailMapForm = SalesEmailMapForm;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var OohImportDialog = /** @class */ (function (_super) {
            __extends(OohImportDialog, _super);
            function OohImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new QStockExcel.OohImportForm(_this.idPrefix);
                return _this;
            }
            OohImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            OohImportDialog.prototype.getToolbarButtons = function () {
                var buttons = [];
                return buttons;
            };
            OohImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            QStockExcel.OohService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            OohImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OohImportDialog);
            return OohImportDialog;
        }(Serenity.EntityDialog));
        QStockExcel.OohImportDialog = OohImportDialog;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var EmailLogForm = /** @class */ (function (_super) {
            __extends(EmailLogForm, _super);
            function EmailLogForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmailLogForm.init) {
                    EmailLogForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(EmailLogForm, [
                        'SalesId', w0,
                        'SendStatus', w0,
                        'FailReason', w0,
                        'SendTime', w1
                    ]);
                }
                return _this;
            }
            EmailLogForm.formKey = 'DB2.EmailLog';
            return EmailLogForm;
        }(Serenity.PrefixedContext));
        DB2.EmailLogForm = EmailLogForm;
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var EmailLogRow;
        (function (EmailLogRow) {
            EmailLogRow.idProperty = 'Id';
            EmailLogRow.nameProperty = 'SalesId';
            EmailLogRow.localTextPrefix = 'DB2.EmailLog';
            EmailLogRow.deletePermission = 'OOH:General';
            EmailLogRow.insertPermission = 'OOH:General';
            EmailLogRow.readPermission = 'OOH:General';
            EmailLogRow.updatePermission = 'OOH:General';
        })(EmailLogRow = DB2.EmailLogRow || (DB2.EmailLogRow = {}));
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var EmailLogService;
        (function (EmailLogService) {
            EmailLogService.baseUrl = 'DB2/EmailLog';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmailLogService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmailLogService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmailLogService = DB2.EmailLogService || (DB2.EmailLogService = {}));
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var OohForm = /** @class */ (function (_super) {
            __extends(OohForm, _super);
            function OohForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OohForm.init) {
                    OohForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(OohForm, [
                        'Material', w0,
                        'Sales', w0
                    ]);
                }
                return _this;
            }
            OohForm.formKey = 'DB2.Ooh';
            return OohForm;
        }(Serenity.PrefixedContext));
        DB2.OohForm = OohForm;
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var OohRow;
        (function (OohRow) {
            OohRow.idProperty = 'Id';
            OohRow.nameProperty = 'Material';
            OohRow.localTextPrefix = 'DB2.Ooh';
            OohRow.deletePermission = 'OOH:General';
            OohRow.insertPermission = 'OOH:General';
            OohRow.readPermission = 'OOH:General';
            OohRow.updatePermission = 'OOH:General';
        })(OohRow = DB2.OohRow || (DB2.OohRow = {}));
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var DB2;
    (function (DB2) {
        var OohService;
        (function (OohService) {
            OohService.baseUrl = 'DB2/Ooh';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OohService[x] = function (r, s, o) {
                    return Q.serviceRequest(OohService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OohService = DB2.OohService || (DB2.OohService = {}));
    })(DB2 = QStock.DB2 || (QStock.DB2 = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var QStockListForm = /** @class */ (function (_super) {
            __extends(QStockListForm, _super);
            function QStockListForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!QStockListForm.init) {
                    QStockListForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(QStockListForm, [
                        'Plant', w0,
                        'StockCategory', w0,
                        'AvailableStock', w1,
                        'GrDate', w2,
                        'IsOverTwoYears', w3,
                        'Reason', w0,
                        'InsertDate', w2
                    ]);
                }
                return _this;
            }
            QStockListForm.formKey = 'QStockExcel.QStockList';
            return QStockListForm;
        }(Serenity.PrefixedContext));
        QStockExcel.QStockListForm = QStockListForm;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var QStockListRow;
        (function (QStockListRow) {
            QStockListRow.idProperty = 'Id';
            QStockListRow.nameProperty = 'Material';
            QStockListRow.localTextPrefix = 'QStockExcel.QStockList';
            QStockListRow.deletePermission = 'QStockExcel:General';
            QStockListRow.insertPermission = 'QStockExcel:General';
            QStockListRow.readPermission = 'QStockExcel:General';
            QStockListRow.updatePermission = 'QStockExcel:General';
        })(QStockListRow = QStockExcel.QStockListRow || (QStockExcel.QStockListRow = {}));
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var QStockListService;
        (function (QStockListService) {
            QStockListService.baseUrl = 'QStockExcel/QStockList';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                QStockListService[x] = function (r, s, o) {
                    return Q.serviceRequest(QStockListService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(QStockListService = QStockExcel.QStockListService || (QStockExcel.QStockListService = {}));
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var QStockListDialog = /** @class */ (function (_super) {
            __extends(QStockListDialog, _super);
            function QStockListDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new QStockExcel.QStockListForm(_this.idPrefix);
                return _this;
            }
            QStockListDialog.prototype.getFormKey = function () { return QStockExcel.QStockListForm.formKey; };
            QStockListDialog.prototype.getIdProperty = function () { return QStockExcel.QStockListRow.idProperty; };
            QStockListDialog.prototype.getLocalTextPrefix = function () { return QStockExcel.QStockListRow.localTextPrefix; };
            QStockListDialog.prototype.getNameProperty = function () { return QStockExcel.QStockListRow.nameProperty; };
            QStockListDialog.prototype.getService = function () { return QStockExcel.QStockListService.baseUrl; };
            QStockListDialog.prototype.getDeletePermission = function () { return QStockExcel.QStockListRow.deletePermission; };
            QStockListDialog.prototype.getInsertPermission = function () { return QStockExcel.QStockListRow.insertPermission; };
            QStockListDialog.prototype.getUpdatePermission = function () { return QStockExcel.QStockListRow.updatePermission; };
            QStockListDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], QStockListDialog);
            return QStockListDialog;
        }(Serenity.EntityDialog));
        QStockExcel.QStockListDialog = QStockListDialog;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
var QStock;
(function (QStock) {
    var QStockExcel;
    (function (QStockExcel) {
        var QStockListGrid = /** @class */ (function (_super) {
            __extends(QStockListGrid, _super);
            function QStockListGrid(container) {
                return _super.call(this, container) || this;
            }
            QStockListGrid.prototype.getColumnsKey = function () { return 'QStockExcel.QStockList'; };
            QStockListGrid.prototype.getDialogType = function () { return QStockExcel.QStockListDialog; };
            QStockListGrid.prototype.getIdProperty = function () { return QStockExcel.QStockListRow.idProperty; };
            QStockListGrid.prototype.getInsertPermission = function () { return QStockExcel.QStockListRow.insertPermission; };
            QStockListGrid.prototype.getLocalTextPrefix = function () { return QStockExcel.QStockListRow.localTextPrefix; };
            QStockListGrid.prototype.getService = function () { return QStockExcel.QStockListService.baseUrl; };
            QStockListGrid.prototype.getButtons = function () {
                var buttons = _super.prototype.getButtons.call(this);
                buttons.shift();
                return buttons;
            };
            QStockListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], QStockListGrid);
            return QStockListGrid;
        }(Serenity.EntityGrid));
        QStockExcel.QStockListGrid = QStockListGrid;
    })(QStockExcel = QStock.QStockExcel || (QStock.QStockExcel = {}));
})(QStock || (QStock = {}));
//# sourceMappingURL=QStock.Web.js.map