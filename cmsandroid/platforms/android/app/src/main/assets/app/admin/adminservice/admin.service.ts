import { Injectable } from '@angular/core';
import {  Headers, RequestOptions} from "@angular/http";
import { Login, LoginResponse } from "~/Framework/login.model";
import { HttpParams, HttpClient } from "@angular/common/http";
import { TokenProvider } from "~/Framework/token.provider";
import { OwnerVm } from "~/admin/admin.model";

@Injectable()
export class AdminService {
  public promise:Promise<Object>;
  constructor(private http: HttpClient) {}

  public Create(OwnerVm):Promise<any>
   {
      let promise = new Promise((resolve, reject) => {
       this.http.post('http://192.168.159.1:8080/CRMS/api/owner/createowner',OwnerVm).toPromise().then(
      function(resp){
          resolve(resp);
      },
      function(error){
        reject(error);
      }
    )
  });
  return promise;
}

public GetAll():Promise<any>
{
   let promise = new Promise((resolve, reject) => {
    this.http.get<Array<OwnerVm>>('http://192.168.159.1:8080/CRMS/api/owner/GetAllOwner').toPromise().then(
   function(resp){
       resolve(resp);
   },
   function(error){
     reject(error);
   }
 )
});
return promise;
}


public GetById(OwnerId):Promise<any>
{
   let promise = new Promise((resolve, reject) => {
    this.http.get<Array<OwnerVm>>('http://192.168.159.1:8080/CRMS/api/owner/GetOwnerById/'+OwnerId).toPromise().then(
   function(resp){
       resolve(resp);
   },
   function(error){
     reject(error);
   }
 )
});
return promise;
}

}