import { Helpers } from "./Helpers";

export interface XrmConnectionString {
    OrganizationUrl: string;
    ClientId: string;
    Secret: string;
    Save: boolean;
    IpAddress: string;
    Name: string;
    Id: string;
}

export interface XrmConnectionStringExp extends XrmConnectionString {
    isEditMode: boolean;
    onEdit: Function;
    onSave: Function;
    isSelected: boolean;
    onSelect: Function;
    onDelete: Function;
}

export interface StorageObj {
    v: any;
    e?: number;
}

export interface SolutionsForConnectionString {
    Solutions: Solution[];
    ConnectionStringId: string;
    Url: string;
}

export interface ConnectionStringRequest {
    Url: string;
    Client: string;
    Secret: string;
    Id: string;
}

export enum VersionStatus {
    Above = 1,
    Equal = 2,
    Under = 3,
    Default = 0
}

export interface Solution {
    UniqueName: string;
    Version: string;
    VersionNumber: string;
    CreatedOn: Date;
    ModifiedOn: Date;
    IsManaged: boolean;
}

export interface SolutionDetail {
    LogicalName: string;
    Version: string;
    ModifiedOn: Date;
    DisplayName: string;
    EntityReference: string;
}

export interface SolutionDetailsForConnectionString {
    SolutionDetails: SolutionDetail[];
    ConnectionStringId: string;
    Url: string;
}

export interface SolutionDetailsForConnectionStringRequest {
    ConnectionStrings: ConnectionStringRequest[],
    Name: string
}

export interface SolutionsDetailsRequest {
    ConnectionString: ConnectionStringRequest,
    Names: string[]
}

export interface ElementDetailsForSolution {
    SolutionName: string;
    SolutionDetails: SolutionDetail[];
}

export class Guid extends String {

    constructor(x = '') {
        super(x)
    }
    public static Empty: string = '00000000-0000-0000-0000-000000000000';

    public static Equals(first: string, second: string): boolean {
        return Guid.format(first) === Guid.format(second);
    }

    public static format(value: string): string {
        if (value === '')
            return value;
        return '{' + Helpers.trimCurlyBraces(value).toLowerCase() + '}';
    }

    public static newGuid() {
        var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return Guid.format(newGuid);
    };

    public static IsNullOrEmpty(value: string | Guid) {
        return !Helpers.StringIsNotNullOrEmpty(value) || value === Guid.Empty;
    }
}