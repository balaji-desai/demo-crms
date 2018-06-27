"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var page_1 = require("tns-core-modules/ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var token_provider_1 = require("~/Framework/token.provider");
var application_1 = require("tns-core-modules/application");
var dialogs = require("ui/dialogs");
var MidiatorComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function MidiatorComponent(page, routerExtensions, tokenProvider, androidapplication) {
        this.page = page;
        this.routerExtensions = routerExtensions;
        this.tokenProvider = tokenProvider;
        this.androidapplication = androidapplication;
        this.androidapplication.on("activityBackPressed", function () {
            console.log("back pressed");
        });
        this.backclick();
    }
    MidiatorComponent.prototype.ngOnInit = function () {
        if (this.tokenProvider.getToken() != "" && this.tokenProvider.getUserInfo() != null) {
            //redirect to admin
            if (this.tokenProvider.getUserInfo().UserTypeId == 2) {
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
        else {
            this.routerExtensions.navigate(["/login"]);
        }
    };
    MidiatorComponent.prototype.backclick = function () {
        var _this = this;
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            // prevents default back button behavior
            console.log("back pressed admin");
            data.cancel = true;
            _this.cnfbox();
        });
    };
    MidiatorComponent.prototype.cnfbox = function () {
        dialogs.confirm({
            title: "CRMS",
            message: "Do you want to exit?",
            okButtonText: "Yes",
            cancelButtonText: "no"
        }).then(function (result) {
            // result argument is boolean
            console.log("Dialog result: " + result);
            if (result == true) {
                application.android.foregroundActivity.finish();
            }
        });
    };
    MidiatorComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<lable text=\"test\"></lable>"
        }),
        __metadata("design:paramtypes", [page_1.Page, nativescript_angular_1.RouterExtensions,
            token_provider_1.TokenProvider, application_1.AndroidApplication])
    ], MidiatorComponent);
    return MidiatorComponent;
}());
exports.MidiatorComponent = MidiatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkaWF0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlkaWF0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHlDQUEyQztBQUMzQyxpREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELDZEQUEyRDtBQUMzRCw0REFBdUc7QUFDdkcsb0NBQXNDO0FBTXRDO0lBK0JFLGtDQUFrQztJQUNsQywyQkFBb0IsSUFBVSxFQUFVLGdCQUFrQyxFQUNoRSxhQUE0QixFQUFVLGtCQUFzQztRQURsRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDcEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtZQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUF2Q0Qsb0NBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRixtQkFBbUI7WUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUNyQztvQkFDQSxVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsS0FBSyxFQUFFLFFBQVE7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUNGLENBQUM7WUFFSixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQVN4QyxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFZRCxxQ0FBUyxHQUFUO1FBQUEsaUJBUUM7UUFQQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxnQ0FBa0IsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLElBQXlDO1lBQzVHLHdDQUF3QztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDWiw2QkFBNkI7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBakVVLGlCQUFpQjtRQUo3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLCtCQUE2QjtTQUN4QyxDQUFDO3lDQWlDMEIsV0FBSSxFQUE0Qix1Q0FBZ0I7WUFDakQsOEJBQWEsRUFBOEIsZ0NBQWtCO09BakMzRSxpQkFBaUIsQ0FrRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyIH0gZnJvbSBcIn4vRnJhbWV3b3JrL3Rva2VuLnByb3ZpZGVyXCI7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYDxsYWJsZSB0ZXh0PVwidGVzdFwiPjwvbGFibGU+YFxufSlcbmV4cG9ydCBjbGFzcyBNaWRpYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRva2VuUHJvdmlkZXIuZ2V0VG9rZW4oKSAhPSBcIlwiICYmIHRoaXMudG9rZW5Qcm92aWRlci5nZXRVc2VySW5mbygpICE9IG51bGwpIHtcbiAgICAgIC8vcmVkaXJlY3QgdG8gYWRtaW5cbiAgICAgIGlmICh0aGlzLnRva2VuUHJvdmlkZXIuZ2V0VXNlckluZm8oKS5Vc2VyVHlwZUlkID09IDIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9hZG1pblwiXVxuICAgICAgICAgICwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICBuYW1lOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICAgIG5hbWU6IFwibm9uZVwiLFxuICAgICAgICAvLyAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIC8vICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAvLyAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUgXG4gICAgICAgIC8vICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHRva2VuUHJvdmlkZXI6IFRva2VuUHJvdmlkZXIsIHByaXZhdGUgYW5kcm9pZGFwcGxpY2F0aW9uOiBBbmRyb2lkQXBwbGljYXRpb24pIHtcbiAgICB0aGlzLmFuZHJvaWRhcHBsaWNhdGlvbi5vbihcImFjdGl2aXR5QmFja1ByZXNzZWRcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJiYWNrIHByZXNzZWRcIik7XG5cbiAgICB9KTtcblxuICAgIHRoaXMuYmFja2NsaWNrKCk7XG4gIH1cblxuICBiYWNrY2xpY2soKSB7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgIC8vIHByZXZlbnRzIGRlZmF1bHQgYmFjayBidXR0b24gYmVoYXZpb3JcbiAgICAgIGNvbnNvbGUubG9nKFwiYmFjayBwcmVzc2VkIGFkbWluXCIpO1xuICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xuICAgICAgdGhpcy5jbmZib3goKTtcbiAgICB9KTtcblxuICB9XG5cbiAgY25mYm94KCkge1xuICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICB0aXRsZTogXCJDUk1TXCIsXG4gICAgICBtZXNzYWdlOiBcIkRvIHlvdSB3YW50IHRvIGV4aXQ/XCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIm5vXCJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICBpZiAocmVzdWx0ID09IHRydWUpIHtcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==