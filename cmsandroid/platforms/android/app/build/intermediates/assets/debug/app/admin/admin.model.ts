export class OwnerVm {

    CrmsOwnerId: number;
    UserName: string;
    Password: string;
    UserTypeId: number;
    Firstname: string;
    LastName: string;
    Address: string;
    City: string;
    State: string;
    ZipCode: number;
    ISDCode: number;
    MobileNo: number;
    CrName: string;
    CrmsUserGUID: string;
}

export class TreeStructure{
    ItemId:number;
    ItemName:string;
    subItemList:TreeSubStructure [];
}

export class TreeSubStructure{
    SubItemId:number;
    SubItemName:string;
}