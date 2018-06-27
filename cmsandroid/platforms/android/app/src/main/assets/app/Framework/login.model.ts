export class Login{
  username:string;
  password:string;
}

export interface LoginResponse{
  CrmsUserId:number;
	CrmsOwnerId:number;
	CrmsWorkerId:number;
	CustomerId:number;
	UserName:string;
	MobileNo:string;
	ISDCode:number;
	UserTypeId:number;
	Token:string;
}