import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { TokenProvider } from "~/Framework/token.provider";
import { RouterExtensions } from "nativescript-angular";

var appSettings = require('application-settings');

@Injectable()
export class MediatorGaurd implements CanActivate {
  constructor(private tokenProvider: TokenProvider,
    private routerExtensions: RouterExtensions) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.tokenProvider.getToken() != "" && this.tokenProvider.getUserInfo() != null) {
      //redirect to admin
      if (this.tokenProvider.getUserInfo().UserTypeId == 3) {
        this.routerExtensions.navigate(["/admin"]
          , {
            transition: {
              name: "none",
              duration: 2000,
              curve: "linear"
            },
            clearHistory: true,
          }
        );

      }
    }
    return true;
  }

}