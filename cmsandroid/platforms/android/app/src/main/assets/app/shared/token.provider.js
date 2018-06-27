"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettings = require('application-settings');
var TokenProvider = /** @class */ (function () {
    function TokenProvider() {
    }
    TokenProvider.prototype.getToken = function () {
        // Trying to get a string which is not set yet
        var token = appSettings.getString('crmstoken', 'defaultValue');
        console.log(token); // defaultValue
        return token;
    };
    TokenProvider.prototype.setToken = function (value) {
        // Setting the string
        appSettings.setString('crmstoken', value);
    };
    TokenProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TokenProvider);
    return TokenProvider;
}());
exports.TokenProvider = TokenProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUdsRDtJQUNFO0lBQWUsQ0FBQztJQUVULGdDQUFRLEdBQWY7UUFFRSw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLEtBQVk7UUFFMUIscUJBQXFCO1FBQ3JCLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFmVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbnZhciBhcHBTZXR0aW5ncyA9IHJlcXVpcmUoJ2FwcGxpY2F0aW9uLXNldHRpbmdzJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlblByb3ZpZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBnZXRUb2tlbigpOnN0cmluZ1xuICB7XG4gICAgLy8gVHJ5aW5nIHRvIGdldCBhIHN0cmluZyB3aGljaCBpcyBub3Qgc2V0IHlldFxuICAgIHZhciB0b2tlbiA9IGFwcFNldHRpbmdzLmdldFN0cmluZygnY3Jtc3Rva2VuJywgJ2RlZmF1bHRWYWx1ZScpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTsgLy8gZGVmYXVsdFZhbHVlXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcHVibGljIHNldFRva2VuKHZhbHVlOnN0cmluZyk6dm9pZFxuICB7XG4gICAgLy8gU2V0dGluZyB0aGUgc3RyaW5nXG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKCdjcm1zdG9rZW4nLCB2YWx1ZSk7XG4gIH1cblxufSJdfQ==