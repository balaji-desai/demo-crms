"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
var token_provider_1 = require("~/Framework/token.provider");
var nativescript_angular_1 = require("nativescript-angular");
var CrmsInterceptor = /** @class */ (function () {
    function CrmsInterceptor(tokenprovider, routerExtensions) {
        this.tokenprovider = tokenprovider;
        this.routerExtensions = routerExtensions;
    }
    CrmsInterceptor.prototype.intercept = function (request, next) {
        var _me = this;
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.tokenprovider.getToken()
            }
        });
        return next.handle(request).do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof http_1.HttpErrorResponse) {
                if (err.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    _me.routerExtensions.navigate(["login"]);
                }
            }
        });
    };
    CrmsInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [token_provider_1.TokenProvider, nativescript_angular_1.RouterExtensions])
    ], CrmsInterceptor);
    return CrmsInterceptor;
}());
exports.CrmsInterceptor = CrmsInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jtcy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNybXMuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBTzhCO0FBRTlCLGdDQUE4QjtBQUM5Qiw2REFBMkQ7QUFDM0QsNkRBQXdEO0FBRXhEO0lBQ0UseUJBQW9CLGFBQTJCLEVBQVMsZ0JBQWlDO1FBQXJFLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUFHLENBQUM7SUFDN0YsbUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxTQUFTLEdBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7YUFDdkQ7U0FDRixDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBQyxLQUFxQjtZQUNuRCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksbUJBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLHFDQUFxQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLFVBQUMsR0FBUTtZQUNWLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSx3QkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsOEJBQThCO29CQUM5QixrQkFBa0I7b0JBQ2xCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRCVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBRXVCLDhCQUFhLEVBQTBCLHVDQUFnQjtPQUQ5RSxlQUFlLENBdUIzQjtJQUFELHNCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBFcnJvclJlc3BvbnNlXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyIH0gZnJvbSBcIn4vRnJhbWV3b3JrL3Rva2VuLnByb3ZpZGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3Jtc0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2tlbnByb3ZpZGVyOlRva2VuUHJvdmlkZXIscHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMpIHt9XG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICB2YXIgX21lID0gdGhpcztcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyt0aGlzLnRva2VucHJvdmlkZXIuZ2V0VG9rZW4oKVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5kbygoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgLy8gZG8gc3R1ZmYgd2l0aCByZXNwb25zZSBpZiB5b3Ugd2FudFxuICAgICAgfVxuICAgIH0sIChlcnI6IGFueSkgPT4ge1xuICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChlcnIuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAvLyByZWRpcmVjdCB0byB0aGUgbG9naW4gcm91dGVcbiAgICAgICAgICAvLyBvciBzaG93IGEgbW9kYWxcbiAgICAgICAgICBfbWUucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdfQ==