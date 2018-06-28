"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_bottombar_1 = require("nativescript-bottombar");
var application_1 = require("tns-core-modules/application");
var application = require("application");
var dialogs = require("ui/dialogs");
nativescript_angular_1.registerElement('BottomBar', function () { return nativescript_bottombar_1.BottomBar; });
var AdminComponent = /** @class */ (function () {
    function AdminComponent(routerExtensions, androidapplication) {
        this.routerExtensions = routerExtensions;
        this.androidapplication = androidapplication;
        this.items = [
            new nativescript_bottombar_1.BottomBarItem(0, "Home", "ic_home", "transparent", new nativescript_bottombar_1.Notification("aqua", "white", "1")),
            new nativescript_bottombar_1.BottomBarItem(1, "Owner List", "ic_home", "transparent", new nativescript_bottombar_1.Notification("aqua", "blue", "1")),
            new nativescript_bottombar_1.BottomBarItem(2, "Settings", "ic_home", "transparent", new nativescript_bottombar_1.Notification("aqua", "yellow", "1")),
        ];
        this.backclick();
    }
    AdminComponent.prototype.changeIndex = function (event) {
        console.log("event :" + event);
    };
    AdminComponent.prototype.backclick = function () {
        var _this = this;
        application.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (data) {
            // prevents default back button behavior
            console.log("back pressed admin");
            data.cancel = true;
            _this.cnfbox();
        });
    };
    AdminComponent.prototype.cnfbox = function () {
        var _this = this;
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
            if (result == false) {
                //this.routerExtensions.navigate(["admin"]);
                _this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
            }
        });
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.selectedindex = 0;
        this.enableHome = true;
        console.log("home");
    };
    AdminComponent.prototype.tabLoaded = function (event) {
        this._bar = event.object;
        this.hidden = false;
        this.titleState = 0 /* SHOW_WHEN_ACTIVE */;
        this.inactiveColor = "rgb(42, 25, 59)";
        this.accentColor = "aqua";
    };
    AdminComponent.prototype.tabSelected = function (args) {
        // only triggered when a different tab is tapped
        this.selectedindex = args.newIndex;
        if (args.newIndex == 0) {
            this.enableHome = true;
            this.routerExtensions.navigate(["admin"], {
                transition: {
                    name: "slide",
                    duration: 2000,
                    curve: "easeIn"
                }
            });
        }
        else if (args.newIndex == 1) {
            this.enableHome = false;
            this.routerExtensions.navigate(["admin/list"], {
                transition: {
                    name: "slide",
                    duration: 2000,
                    curve: "easeIn"
                }
            });
        }
        else if (args.newIndex == 2) {
            this.enableHome = false;
            this.routerExtensions.navigate(["admin/setting"], {
                transition: {
                    name: "slide",
                    duration: 2000,
                    curve: "easeIn"
                }
            });
        }
        console.log(args.newIndex);
    };
    AdminComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
        this.routerExtensions.back();
    };
    AdminComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            application_1.AndroidApplication])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDZEQUF5RTtBQUN6RSxpRUFBNEg7QUFDNUgsNERBQXVHO0FBQ3ZHLHlDQUEyQztBQUMzQyxvQ0FBc0M7QUFFdEMsc0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFROUM7SUFVSSx3QkFBb0IsZ0JBQWtDLEVBQ3hDLGtCQUFzQztRQURoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF5QzdDLFVBQUssR0FBeUI7WUFDakMsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLHFDQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUkscUNBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25HLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxxQ0FBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFdEcsQ0FBQztRQTdDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxPQUFP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WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDO2dCQUM3QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE9BQU87b0JBQ2IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2FBQ04sQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksNENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQXpHUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVd3Qyx1Q0FBZ0I7WUFDcEIsZ0NBQWtCO09BWDNDLGNBQWMsQ0EwRzFCO0lBQUQscUJBQUM7Q0FBQSxBQTFHRCxJQTBHQztBQTFHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBDYXJkVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJkdmlldyc7XG5yZWdpc3RlckVsZW1lbnQoJ0JvdHRvbUJhcicsICgpID0+IEJvdHRvbUJhcik7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtYWRtaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hZG1pbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYWRtaW4uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgaGlkZGVuOiBib29sZWFuO1xuICAgIHB1YmxpYyB0aXRsZVN0YXRlOiBUSVRMRV9TVEFURTtcbiAgICBwdWJsaWMgX2JhcjogQm90dG9tQmFyO1xuICAgIHB1YmxpYyBpbmFjdGl2ZUNvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGFjY2VudENvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIHNlbGVjdGVkaW5kZXg6IG51bWJlcjtcbiAgICBwdWJsaWMgZW5hYmxlSG9tZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICAgICAsIHByaXZhdGUgYW5kcm9pZGFwcGxpY2F0aW9uOiBBbmRyb2lkQXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5iYWNrY2xpY2soKTtcbiAgICB9XG4gICAgY2hhbmdlSW5kZXgoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCA6XCIgKyBldmVudCk7XG4gICAgfVxuICAgIGJhY2tjbGljaygpIHtcbiAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCAoZGF0YTogQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGRlZmF1bHQgYmFjayBidXR0b24gYmVoYXZpb3JcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayBwcmVzc2VkIGFkbWluXCIpO1xuICAgICAgICAgICAgZGF0YS5jYW5jZWwgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jbmZib3goKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBjbmZib3goKSB7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJDUk1TXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkRvIHlvdSB3YW50IHRvIGV4aXQ/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIm5vXCJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByZXN1bHQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZmluaXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWRtaW5cIl0pO1xuICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTdGF0ZSA9IFRJVExFX1NUQVRFLlNIT1dfV0hFTl9BQ1RJVkU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkaW5kZXggPSAwO1xuICAgICAgICB0aGlzLmVuYWJsZUhvbWUgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvbWVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxCb3R0b21CYXJJdGVtPiA9IFtcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMCwgXCJIb21lXCIsIFwiaWNfaG9tZVwiLCBcInRyYW5zcGFyZW50XCIsIG5ldyBOb3RpZmljYXRpb24oXCJhcXVhXCIsIFwid2hpdGVcIiwgXCIxXCIpKSxcbiAgICAgICAgbmV3IEJvdHRvbUJhckl0ZW0oMSwgXCJPd25lciBMaXN0XCIsIFwiaWNfaG9tZVwiLCBcInRyYW5zcGFyZW50XCIsIG5ldyBOb3RpZmljYXRpb24oXCJhcXVhXCIsIFwiYmx1ZVwiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgyLCBcIlNldHRpbmdzXCIsIFwiaWNfaG9tZVwiLCBcInRyYW5zcGFyZW50XCIsIG5ldyBOb3RpZmljYXRpb24oXCJhcXVhXCIsIFwieWVsbG93XCIsIFwiMVwiKSksXG4gICAgICAgIC8vbmV3IEJvdHRvbUJhckl0ZW0oMywgXCJNZXNzYWdlXCIsIFwiaWNfaG9tZVwiLCBcImdyZWVuXCIsIG5ldyBOb3RpZmljYXRpb24oXCJncmVlblwiLCBcInJlZFwiLCBcIjFcIikpXG4gICAgXTtcblxuICAgIHRhYkxvYWRlZChldmVudCkge1xuICAgICAgICB0aGlzLl9iYXIgPSA8Qm90dG9tQmFyPmV2ZW50Lm9iamVjdDtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuU0hPV19XSEVOX0FDVElWRTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUNvbG9yID0gXCJyZ2IoNDIsIDI1LCA1OSlcIjtcbiAgICAgICAgdGhpcy5hY2NlbnRDb2xvciA9IFwiYXF1YVwiO1xuICAgIH1cblxuICAgIHRhYlNlbGVjdGVkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XG4gICAgICAgIC8vIG9ubHkgdHJpZ2dlcmVkIHdoZW4gYSBkaWZmZXJlbnQgdGFiIGlzIHRhcHBlZFxuICAgICAgICB0aGlzLnNlbGVjdGVkaW5kZXggPSBhcmdzLm5ld0luZGV4O1xuICAgICAgICBpZiAoYXJncy5uZXdJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUhvbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImFkbWluXCJdLHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLm5ld0luZGV4ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlSG9tZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImFkbWluL2xpc3RcIl0se1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubmV3SW5kZXggPT0gMikge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVIb21lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWRtaW4vc2V0dGluZ1wiXSx7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYXJncy5uZXdJbmRleCk7XG4gICAgfVxuXG4gICAgb25OYXZCdG5UYXAoKSB7XG4gICAgICAgIC8vIFRoaXMgY29kZSB3aWxsIGJlIGNhbGxlZCBvbmx5IGluIEFuZHJvaWQuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF2aWdhdGlvbiBidXR0b24gdGFwcGVkIVwiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcbiAgICB9XG59XG5cblxuIl19