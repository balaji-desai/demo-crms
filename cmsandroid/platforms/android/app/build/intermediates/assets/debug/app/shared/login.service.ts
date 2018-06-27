import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from "@angular/http";
import { Login, LoginResponse } from "~/Framework/login.model";
import { HttpParams, HttpClient } from "@angular/common/http";
import { TokenProvider } from "~/Framework/token.provider";

@Injectable()
export class LoginService {
  public promise: Promise<Object>;
  constructor(private http: HttpClient, private tokenprovider: TokenProvider) { }

  public Login(loginobj): Promise<any> {
    //      body.append('username', loginobj.username);
    //      body.append('password', loginobj.password);


    // let headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //const options = new RequestOptions({headers: headers});
    var _me = this;
    let promise = new Promise((resolve, reject) => {
      this.http.post<LoginResponse>('http://192.168.159.1:8080/CRMS/api/account/login?' + encodeURI('username=' + loginobj.username + '&password=' + loginobj.password), null//  ,options
      ).toPromise().then(
        function (resp) {
          _me.tokenprovider.setToken(resp.Token);
          _me.tokenprovider.setUserInfo(resp);
          resolve(resp);
        },
        function (error) {
          reject(error);
        }
        )
    });
    return promise;
  }

}