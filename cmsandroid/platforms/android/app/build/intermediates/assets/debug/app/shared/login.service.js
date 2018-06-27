"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var token_provider_1 = require("~/Framework/token.provider");
var LoginService = /** @class */ (function () {
    function LoginService(http, tokenprovider) {
        this.http = http;
        this.tokenprovider = tokenprovider;
    }
    LoginService.prototype.Login = function (loginobj) {
        //      body.append('username', loginobj.username);
        //      body.append('password', loginobj.password);
        var _this = this;
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //const options = new RequestOptions({headers: headers});
        var _me = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('http://192.168.159.1:8080/CRMS/api/account/login?' + encodeURI('username=' + loginobj.username + '&password=' + loginobj.password), null //  ,options
            ).toPromise().then(function (resp) {
                _me.tokenprovider.setToken(resp.Token);
                _me.tokenprovider.setUserInfo(resp);
                resolve(resp);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, token_provider_1.TokenProvider])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsNkNBQThEO0FBQzlELDZEQUEyRDtBQUczRDtJQUVFLHNCQUFvQixJQUFnQixFQUFVLGFBQTRCO1FBQXRELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFJLENBQUM7SUFFeEUsNEJBQUssR0FBWixVQUFhLFFBQVE7UUFDbkIsbURBQW1EO1FBQ25ELG1EQUFtRDtRQUZyRCxpQkF1QkM7UUFsQkMsK0JBQStCO1FBQy9CLHVFQUF1RTtRQUN2RSx5REFBeUQ7UUFDekQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN4QyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBZ0IsbURBQW1ELEdBQUcsU0FBUyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFBLFlBQVk7YUFDbEwsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hCLFVBQVUsSUFBSTtnQkFDWixHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUNELFVBQVUsS0FBSztnQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUNBLENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQTNCVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2UsaUJBQVUsRUFBeUIsOEJBQWE7T0FGL0QsWUFBWSxDQTZCeEI7SUFBRCxtQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTG9naW4sIExvZ2luUmVzcG9uc2UgfSBmcm9tIFwifi9GcmFtZXdvcmsvbG9naW4ubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFRva2VuUHJvdmlkZXIgfSBmcm9tIFwifi9GcmFtZXdvcmsvdG9rZW4ucHJvdmlkZXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gIHB1YmxpYyBwcm9taXNlOiBQcm9taXNlPE9iamVjdD47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSB0b2tlbnByb3ZpZGVyOiBUb2tlblByb3ZpZGVyKSB7IH1cblxuICBwdWJsaWMgTG9naW4obG9naW5vYmopOiBQcm9taXNlPGFueT4ge1xuICAgIC8vICAgICAgYm9keS5hcHBlbmQoJ3VzZXJuYW1lJywgbG9naW5vYmoudXNlcm5hbWUpO1xuICAgIC8vICAgICAgYm9keS5hcHBlbmQoJ3Bhc3N3b3JkJywgbG9naW5vYmoucGFzc3dvcmQpO1xuXG5cbiAgICAvLyBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy8gaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAvL2NvbnN0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IGhlYWRlcnN9KTtcbiAgICB2YXIgX21lID0gdGhpcztcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5wb3N0PExvZ2luUmVzcG9uc2U+KCdodHRwOi8vMTkyLjE2OC4xNTkuMTo4MDgwL0NSTVMvYXBpL2FjY291bnQvbG9naW4/JyArIGVuY29kZVVSSSgndXNlcm5hbWU9JyArIGxvZ2lub2JqLnVzZXJuYW1lICsgJyZwYXNzd29yZD0nICsgbG9naW5vYmoucGFzc3dvcmQpLCBudWxsLy8gICxvcHRpb25zXG4gICAgICApLnRvUHJvbWlzZSgpLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgX21lLnRva2VucHJvdmlkZXIuc2V0VG9rZW4ocmVzcC5Ub2tlbik7XG4gICAgICAgICAgX21lLnRva2VucHJvdmlkZXIuc2V0VXNlckluZm8ocmVzcCk7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICApXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxufSJdfQ==