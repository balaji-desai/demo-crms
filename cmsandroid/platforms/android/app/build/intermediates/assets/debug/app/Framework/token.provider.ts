import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginResponse } from "~/Framework/login.model";

var appSettings = require('application-settings');

@Injectable()
export class TokenProvider {
  constructor() { }

  public getToken(): string {
    // Trying to get a string which is not set yet
    var token = appSettings.getString('crmstoken');
    console.log(token); // defaultValue
    if (token) {
      return token;
    } else {
      return "";
    }
  }

  public setToken(value: string): void {
    // Setting the string
    appSettings.setString('crmstoken', value);
  }

  public getUserInfo(): LoginResponse {
    // Trying to get a string which is not set yet
    var uservalue = appSettings.getString('crmsuser');
    console.log(uservalue); // defaultValue
    if (uservalue) {
      return JSON.parse(uservalue);;
    } else {
      return null;
    }
  }

  public setUserInfo(value: LoginResponse): void {
    // Setting the string
    var uservalue = appSettings.setString('crmsuser', JSON.stringify(value));
  }

}