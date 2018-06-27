"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var token_provider_1 = require("~/Framework/token.provider");
var SettingComponent = /** @class */ (function () {
    function SettingComponent(tokenprovider, routerExtension) {
        this.tokenprovider = tokenprovider;
        this.routerExtension = routerExtension;
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.logout = function () {
        this.tokenprovider.setToken("");
        this.tokenprovider.setUserInfo(null);
        this.routerExtension.navigate(["login"], {
            transition: {
                name: "none",
                duration: 2000,
                curve: "linear"
            },
            clearHistory: true
        });
    };
    SettingComponent.prototype.tree = function () {
        this.routerExtension.navigate(["tree"], {
            transition: {
                name: "none",
                duration: 2000,
                curve: "linear"
            },
            clearHistory: false
        });
    };
    SettingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-detail',
            templateUrl: './setting.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [token_provider_1.TokenProvider,
            nativescript_angular_1.RouterExtensions])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCw2REFBeUU7QUFNekUsNkRBQTJEO0FBUTNEO0lBRUUsMEJBQW9CLGFBQTRCLEVBQ3RDLGVBQWlDO1FBRHZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtJQUUzQyxDQUFDO0lBQ0QsbUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRCxZQUFZLEVBQUUsSUFBSTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxRQUFRO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQS9CVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBR21DLDhCQUFhO1lBQ3JCLHVDQUFnQjtPQUhoQyxnQkFBZ0IsQ0FnQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBPd25lclZtIH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4ubW9kZWxcIjtcbmltcG9ydCB7IEFkbWluU2VydmljZSB9IGZyb20gXCJ+L2FkbWluL2FkbWluc2VydmljZS9hZG1pbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyIH0gZnJvbSBcIn4vRnJhbWV3b3JrL3Rva2VuLnByb3ZpZGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkbWluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2tlbnByb3ZpZGVyOiBUb2tlblByb3ZpZGVyLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnRva2VucHJvdmlkZXIuc2V0VG9rZW4oXCJcIik7XG4gICAgdGhpcy50b2tlbnByb3ZpZGVyLnNldFVzZXJJbmZvKG51bGwpO1xuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLm5hdmlnYXRlKFtcImxvZ2luXCJdLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwibm9uZVwiLFxuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgIH0sXG4gICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHRyZWUoKXtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbXCJ0cmVlXCJdLCB7XG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIG5hbWU6IFwibm9uZVwiLFxuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgIH0sXG4gICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn1cblxuIl19