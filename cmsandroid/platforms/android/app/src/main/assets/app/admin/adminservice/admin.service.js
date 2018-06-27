"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.Create = function (OwnerVm) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('http://192.168.159.1:8080/CRMS/api/owner/createowner', OwnerVm).toPromise().then(function (resp) {
                resolve(resp);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    AdminService.prototype.GetAll = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('http://192.168.159.1:8080/CRMS/api/owner/GetAllOwner').toPromise().then(function (resp) {
                resolve(resp);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    AdminService.prototype.GetById = function (OwnerId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('http://192.168.159.1:8080/CRMS/api/owner/GetOwnerById/' + OwnerId).toPromise().then(function (resp) {
                resolve(resp);
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkbWluLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsNkNBQThEO0FBSzlEO0lBRUUsc0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRWpDLDZCQUFNLEdBQWIsVUFBYyxPQUFPO1FBQXJCLGlCQWFEO1FBWEssSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzREFBc0QsRUFBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQ2hHLFVBQVMsSUFBSTtnQkFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUNELFVBQVMsS0FBSztnQkFDWixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUNGLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFBQSxpQkFhQztRQVhFLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDekMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWlCLHNEQUFzRCxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUN2RyxVQUFTLElBQUk7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsRUFDRCxVQUFTLEtBQUs7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FDRixDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsQ0FBQztJQUdNLDhCQUFPLEdBQWQsVUFBZSxPQUFPO1FBQXRCLGlCQWFDO1FBWEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN6QyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBaUIsd0RBQXdELEdBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUNqSCxVQUFTLElBQUk7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsRUFDRCxVQUFTLEtBQUs7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FDRixDQUFBO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2YsQ0FBQztJQWhEWSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2UsaUJBQVU7T0FGekIsWUFBWSxDQWtEeEI7SUFBRCxtQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTG9naW4sIExvZ2luUmVzcG9uc2UgfSBmcm9tIFwifi9GcmFtZXdvcmsvbG9naW4ubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBQYXJhbXMsIEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFRva2VuUHJvdmlkZXIgfSBmcm9tIFwifi9GcmFtZXdvcmsvdG9rZW4ucHJvdmlkZXJcIjtcbmltcG9ydCB7IE93bmVyVm0gfSBmcm9tIFwifi9hZG1pbi9hZG1pbi5tb2RlbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5TZXJ2aWNlIHtcbiAgcHVibGljIHByb21pc2U6UHJvbWlzZTxPYmplY3Q+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgcHVibGljIENyZWF0ZShPd25lclZtKTpQcm9taXNlPGFueT5cbiAgIHtcbiAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vMTkyLjE2OC4xNTkuMTo4MDgwL0NSTVMvYXBpL293bmVyL2NyZWF0ZW93bmVyJyxPd25lclZtKS50b1Byb21pc2UoKS50aGVuKFxuICAgICAgZnVuY3Rpb24ocmVzcCl7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgKVxuICB9KTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbnB1YmxpYyBHZXRBbGwoKTpQcm9taXNlPGFueT5cbntcbiAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRoaXMuaHR0cC5nZXQ8QXJyYXk8T3duZXJWbT4+KCdodHRwOi8vMTkyLjE2OC4xNTkuMTo4MDgwL0NSTVMvYXBpL293bmVyL0dldEFsbE93bmVyJykudG9Qcm9taXNlKCkudGhlbihcbiAgIGZ1bmN0aW9uKHJlc3Ape1xuICAgICAgIHJlc29sdmUocmVzcCk7XG4gICB9LFxuICAgZnVuY3Rpb24oZXJyb3Ipe1xuICAgICByZWplY3QoZXJyb3IpO1xuICAgfVxuIClcbn0pO1xucmV0dXJuIHByb21pc2U7XG59XG5cblxucHVibGljIEdldEJ5SWQoT3duZXJJZCk6UHJvbWlzZTxhbnk+XG57XG4gICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0aGlzLmh0dHAuZ2V0PEFycmF5PE93bmVyVm0+PignaHR0cDovLzE5Mi4xNjguMTU5LjE6ODA4MC9DUk1TL2FwaS9vd25lci9HZXRPd25lckJ5SWQvJytPd25lcklkKS50b1Byb21pc2UoKS50aGVuKFxuICAgZnVuY3Rpb24ocmVzcCl7XG4gICAgICAgcmVzb2x2ZShyZXNwKTtcbiAgIH0sXG4gICBmdW5jdGlvbihlcnJvcil7XG4gICAgIHJlamVjdChlcnJvcik7XG4gICB9XG4gKVxufSk7XG5yZXR1cm4gcHJvbWlzZTtcbn1cblxufSJdfQ==