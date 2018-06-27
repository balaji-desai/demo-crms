import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { TokenProvider } from "~/Framework/token.provider";
import { RouterExtensions } from "nativescript-angular";
@Injectable()
export class CrmsInterceptor implements HttpInterceptor {
  constructor(private tokenprovider:TokenProvider,private routerExtensions:RouterExtensions) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var _me = this;
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer '+this.tokenprovider.getToken()
      }
    });
    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          // redirect to the login route
          // or show a modal
          _me.routerExtensions.navigate(["login"]);
        }
      }
    });
  }
}