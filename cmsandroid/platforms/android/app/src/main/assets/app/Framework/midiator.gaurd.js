"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var token_provider_1 = require("~/Framework/token.provider");
var nativescript_angular_1 = require("nativescript-angular");
var appSettings = require('application-settings');
var MediatorGaurd = /** @class */ (function () {
    function MediatorGaurd(tokenProvider, routerExtensions) {
        this.tokenProvider = tokenProvider;
        this.routerExtensions = routerExtensions;
    }
    MediatorGaurd.prototype.canActivate = function (route, state) {
        if (this.tokenProvider.getToken() != "" && this.tokenProvider.getUserInfo() != null) {
            //redirect to admin
            if (this.tokenProvider.getUserInfo().UserTypeId == 3) {
                this.routerExtensions.navigate(["/admin"], {
                    transition: {
                        name: "none",
                        duration: 2000,
                        curve: "linear"
                    },
                    clearHistory: true,
                });
            }
        }
        return true;
    };
    MediatorGaurd = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [token_provider_1.TokenProvider,
            nativescript_angular_1.RouterExtensions])
    ], MediatorGaurd);
    return MediatorGaurd;
}());
exports.MediatorGaurd = MediatorGaurd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkaWF0b3IuZ2F1cmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtaWRpYXRvci5nYXVyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyw2REFBMkQ7QUFDM0QsNkRBQXdEO0FBRXhELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBR2xEO0lBQ0UsdUJBQW9CLGFBQTRCLEVBQ3RDLGdCQUFrQztRQUR4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN0QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUNqRCxtQ0FBVyxHQUFYLFVBQ0UsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BGLG1CQUFtQjtZQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQ3JDO29CQUNBLFVBQVUsRUFBRTt3QkFDVixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsSUFBSTt3QkFDZCxLQUFLLEVBQUUsUUFBUTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLElBQUk7aUJBQ25CLENBQ0YsQ0FBQztZQUVKLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUF4QlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUV3Qiw4QkFBYTtZQUNwQix1Q0FBZ0I7T0FGakMsYUFBYSxDQTBCekI7SUFBRCxvQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVG9rZW5Qcm92aWRlciB9IGZyb20gXCJ+L0ZyYW1ld29yay90b2tlbi5wcm92aWRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xuXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKCdhcHBsaWNhdGlvbi1zZXR0aW5ncycpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWF0b3JHYXVyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2tlblByb3ZpZGVyOiBUb2tlblByb3ZpZGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMudG9rZW5Qcm92aWRlci5nZXRUb2tlbigpICE9IFwiXCIgJiYgdGhpcy50b2tlblByb3ZpZGVyLmdldFVzZXJJbmZvKCkgIT0gbnVsbCkge1xuICAgICAgLy9yZWRpcmVjdCB0byBhZG1pblxuICAgICAgaWYgKHRoaXMudG9rZW5Qcm92aWRlci5nZXRVc2VySW5mbygpLlVzZXJUeXBlSWQgPT0gMykge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FkbWluXCJdXG4gICAgICAgICAgLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn0iXX0=