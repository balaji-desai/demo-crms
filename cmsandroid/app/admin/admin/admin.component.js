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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDZEQUF5RTtBQUN6RSxpRUFBNEg7QUFDNUgsNERBQXVHO0FBQ3ZHLHlDQUEyQztBQUMzQyxvQ0FBc0M7QUFFdEMsc0NBQWUsQ0FBQyxXQUFXLEVBQUUsY0FBTSxPQUFBLGtDQUFTLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFROUM7SUFVSSx3QkFBb0IsZ0JBQWtDLEVBQ3hDLGtCQUFzQztRQURoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUF5QzdDLFVBQUssR0FBeUI7WUFDakMsSUFBSSxzQ0FBYSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLHFDQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5RixJQUFJLHNDQUFhLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUkscUNBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ25HLElBQUksc0NBQWEsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxxQ0FBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FFdEcsQ0FBQztRQTdDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELGtDQUFTLEdBQVQ7UUFBQSxpQkFRQztRQVBHLFdBQVcsQ0FBQyxPQUFP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WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFDO2dCQUM3QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE9BQU87b0JBQ2IsUUFBUSxFQUFFLElBQUk7b0JBQ2QsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCO2FBQ04sQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksNENBQTRDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQXpHUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVd3Qyx1Q0FBZ0I7WUFDcEIsZ0NBQWtCO09BWDNDLGNBQWMsQ0EwRzFCO0lBQUQscUJBQUM7Q0FBQSxBQTFHRCxJQTBHQztBQTFHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbnJlZ2lzdGVyRWxlbWVudCgnQm90dG9tQmFyJywgKCkgPT4gQm90dG9tQmFyKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1hZG1pbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FkbWluLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hZG1pbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBoaWRkZW46IGJvb2xlYW47XG4gICAgcHVibGljIHRpdGxlU3RhdGU6IFRJVExFX1NUQVRFO1xuICAgIHB1YmxpYyBfYmFyOiBCb3R0b21CYXI7XG4gICAgcHVibGljIGluYWN0aXZlQ29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgYWNjZW50Q29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgc2VsZWN0ZWRpbmRleDogbnVtYmVyO1xuICAgIHB1YmxpYyBlbmFibGVIb21lOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgICAgICwgcHJpdmF0ZSBhbmRyb2lkYXBwbGljYXRpb246IEFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmJhY2tjbGljaygpO1xuICAgIH1cbiAgICBjaGFuZ2VJbmRleChldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50IDpcIiArIGV2ZW50KTtcbiAgICB9XG4gICAgYmFja2NsaWNrKCkge1xuICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgLy8gcHJldmVudHMgZGVmYXVsdCBiYWNrIGJ1dHRvbiBiZWhhdmlvclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIHByZXNzZWQgYWRtaW5cIik7XG4gICAgICAgICAgICBkYXRhLmNhbmNlbCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNuZmJveCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGNuZmJveCgpIHtcbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNSTVNcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRG8geW91IHdhbnQgdG8gZXhpdD9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZZXNcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwibm9cIlxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5maW5pc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhZG1pblwiXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZVN0YXRlID0gVElUTEVfU1RBVEUuU0hPV19XSEVOX0FDVElWRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuZW5hYmxlSG9tZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG9tZVwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXRlbXM6IEFycmF5PEJvdHRvbUJhckl0ZW0+ID0gW1xuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgwLCBcIkhvbWVcIiwgXCJpY19ob21lXCIsIFwidHJhbnNwYXJlbnRcIiwgbmV3IE5vdGlmaWNhdGlvbihcImFxdWFcIiwgXCJ3aGl0ZVwiLCBcIjFcIikpLFxuICAgICAgICBuZXcgQm90dG9tQmFySXRlbSgxLCBcIk93bmVyIExpc3RcIiwgXCJpY19ob21lXCIsIFwidHJhbnNwYXJlbnRcIiwgbmV3IE5vdGlmaWNhdGlvbihcImFxdWFcIiwgXCJibHVlXCIsIFwiMVwiKSksXG4gICAgICAgIG5ldyBCb3R0b21CYXJJdGVtKDIsIFwiU2V0dGluZ3NcIiwgXCJpY19ob21lXCIsIFwidHJhbnNwYXJlbnRcIiwgbmV3IE5vdGlmaWNhdGlvbihcImFxdWFcIiwgXCJ5ZWxsb3dcIiwgXCIxXCIpKSxcbiAgICAgICAgLy9uZXcgQm90dG9tQmFySXRlbSgzLCBcIk1lc3NhZ2VcIiwgXCJpY19ob21lXCIsIFwiZ3JlZW5cIiwgbmV3IE5vdGlmaWNhdGlvbihcImdyZWVuXCIsIFwicmVkXCIsIFwiMVwiKSlcbiAgICBdO1xuXG4gICAgdGFiTG9hZGVkKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2JhciA9IDxCb3R0b21CYXI+ZXZlbnQub2JqZWN0O1xuICAgICAgICB0aGlzLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpdGxlU3RhdGUgPSBUSVRMRV9TVEFURS5TSE9XX1dIRU5fQUNUSVZFO1xuICAgICAgICB0aGlzLmluYWN0aXZlQ29sb3IgPSBcInJnYig0MiwgMjUsIDU5KVwiO1xuICAgICAgICB0aGlzLmFjY2VudENvbG9yID0gXCJhcXVhXCI7XG4gICAgfVxuXG4gICAgdGFiU2VsZWN0ZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICAgICAgLy8gb25seSB0cmlnZ2VyZWQgd2hlbiBhIGRpZmZlcmVudCB0YWIgaXMgdGFwcGVkXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRpbmRleCA9IGFyZ3MubmV3SW5kZXg7XG4gICAgICAgIGlmIChhcmdzLm5ld0luZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlSG9tZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWRtaW5cIl0se1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3MubmV3SW5kZXggPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVIb21lID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYWRtaW4vbGlzdFwiXSx7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5uZXdJbmRleCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUhvbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhZG1pbi9zZXR0aW5nXCJdLHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VJblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzLm5ld0luZGV4KTtcbiAgICB9XG5cbiAgICBvbk5hdkJ0blRhcCgpIHtcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cbiAgICAgICAgY29uc29sZS5sb2coXCJOYXZpZ2F0aW9uIGJ1dHRvbiB0YXBwZWQhXCIpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuICAgIH1cbn1cblxuXG4iXX0=