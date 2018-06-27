"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require('application-settings');
var TokenProvider = /** @class */ (function () {
    function TokenProvider() {
    }
    TokenProvider.prototype.getToken = function () {
        // Trying to get a string which is not set yet
        var token = appSettings.getString('crmstoken');
        console.log(token); // defaultValue
        if (token) {
            return token;
        }
        else {
            return "";
        }
    };
    TokenProvider.prototype.setToken = function (value) {
        // Setting the string
        appSettings.setString('crmstoken', value);
    };
    TokenProvider.prototype.getUserInfo = function () {
        // Trying to get a string which is not set yet
        var uservalue = appSettings.getString('crmsuser');
        console.log(uservalue); // defaultValue
        if (uservalue) {
            return JSON.parse(uservalue);
            ;
        }
        else {
            return null;
        }
    };
    TokenProvider.prototype.setUserInfo = function (value) {
        // Setting the string
        var uservalue = appSettings.setString('crmsuser', JSON.stringify(value));
    };
    TokenProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TokenProvider);
    return TokenProvider;
}());
exports.TokenProvider = TokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUkzQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUdsRDtJQUNFO0lBQWdCLENBQUM7SUFFVixnQ0FBUSxHQUFmO1FBQ0UsOENBQThDO1FBQzlDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1osQ0FBQztJQUNILENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLEtBQWE7UUFDM0IscUJBQXFCO1FBQ3JCLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxtQ0FBVyxHQUFsQjtRQUNFLDhDQUE4QztRQUM5QyxJQUFJLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUFBLENBQUM7UUFDaEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU0sbUNBQVcsR0FBbEIsVUFBbUIsS0FBb0I7UUFDckMscUJBQXFCO1FBQ3JCLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBakNVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBbUN6QjtJQUFELG9CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IExvZ2luUmVzcG9uc2UgfSBmcm9tIFwifi9GcmFtZXdvcmsvbG9naW4ubW9kZWxcIjtcblxudmFyIGFwcFNldHRpbmdzID0gcmVxdWlyZSgnYXBwbGljYXRpb24tc2V0dGluZ3MnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRva2VuUHJvdmlkZXIge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgIC8vIFRyeWluZyB0byBnZXQgYSBzdHJpbmcgd2hpY2ggaXMgbm90IHNldCB5ZXRcbiAgICB2YXIgdG9rZW4gPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2NybXN0b2tlbicpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTsgLy8gZGVmYXVsdFZhbHVlXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRUb2tlbih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gU2V0dGluZyB0aGUgc3RyaW5nXG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdjcm1zdG9rZW4nLCB2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VXNlckluZm8oKTogTG9naW5SZXNwb25zZSB7XG4gICAgLy8gVHJ5aW5nIHRvIGdldCBhIHN0cmluZyB3aGljaCBpcyBub3Qgc2V0IHlldFxuICAgIHZhciB1c2VydmFsdWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2NybXN1c2VyJyk7XG4gICAgY29uc29sZS5sb2codXNlcnZhbHVlKTsgLy8gZGVmYXVsdFZhbHVlXG4gICAgaWYgKHVzZXJ2YWx1ZSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodXNlcnZhbHVlKTs7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRVc2VySW5mbyh2YWx1ZTogTG9naW5SZXNwb25zZSk6IHZvaWQge1xuICAgIC8vIFNldHRpbmcgdGhlIHN0cmluZ1xuICAgIHZhciB1c2VydmFsdWUgPSBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2NybXN1c2VyJywgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG59Il19