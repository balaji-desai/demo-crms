"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var forms_1 = require("@angular/forms");
var login_service_1 = require("~/shared/login.service");
var login_model_1 = require("~/Framework/login.model");
var token_provider_1 = require("~/Framework/token.provider");
var SharedComponent = /** @class */ (function () {
    function SharedComponent(routerExtensions, formBuilder, loginService, tokenProvider) {
        this.routerExtensions = routerExtensions;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.tokenProvider = tokenProvider;
        this.loginObj = new login_model_1.Login();
        this.loginform = this.formBuilder.group({
            Email: ['', [
                    forms_1.Validators.required,
                ]
            ],
            Password: ['',
                [forms_1.Validators.required,
                    forms_1.Validators.maxLength(8),
                ]
            ]
        });
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent.prototype.submit = function () {
        this.loginObj.username = this.loginform.get("Email").value;
        this.loginObj.password = this.loginform.get("Password").value;
        var _me = this;
        this.loginService.Login(this.loginObj).then(function (result) {
            //this.router.navigate(["/admin"]);
            if (result.UserTypeId == 3) {
                _me.routerExtensions.navigate(["admin"], {
                    transition: {
                        name: "none",
                        duration: 2000,
                        curve: "linear"
                    },
                    clearHistory: true
                });
            }
        }, function (error) {
        });
    };
    SharedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-shared',
            templateUrl: './shared.component.html',
            styleUrls: ['./shared.component.scss']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            forms_1.FormBuilder,
            login_service_1.LoginService,
            token_provider_1.TokenProvider])
    ], SharedComponent);
    return SharedComponent;
}());
exports.SharedComponent = SharedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsNkRBQXdEO0FBQ3hELHdDQUErRTtBQUMvRSx3REFBc0Q7QUFDdEQsdURBQWdEO0FBQ2hELDZEQUEyRDtBQVEzRDtJQUdJLHlCQUFvQixnQkFBa0MsRUFDMUMsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsYUFBNEI7UUFIcEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUxqQyxhQUFRLEdBQVUsSUFBSSxtQkFBSyxFQUFFLENBQUM7UUFNakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNwQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ1Isa0JBQVUsQ0FBQyxRQUFRO2lCQUV0QjthQUNBO1lBRUQsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFDVCxDQUFDLGtCQUFVLENBQUMsUUFBUTtvQkFDcEIsa0JBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUV0QjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdkMsVUFBVSxNQUFNO1lBQ1osbUNBQW1DO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7d0JBQ2QsS0FBSyxFQUFFLFFBQVE7cUJBQ2xCO29CQUNELFlBQVksRUFBRSxJQUFJO2lCQUNyQixDQUFDLENBQUM7WUFDUCxDQUFDO1FBRUwsQ0FBQyxFQUNELFVBQVUsS0FBSztRQUVmLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQWxEUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN6QyxDQUFDO3lDQUl3Qyx1Q0FBZ0I7WUFDN0IsbUJBQVc7WUFDViw0QkFBWTtZQUNYLDhCQUFhO09BTi9CLGVBQWUsQ0FvRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3IsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L3NoYXJlZC9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJ+L0ZyYW1ld29yay9sb2dpbi5tb2RlbFwiO1xuaW1wb3J0IHsgVG9rZW5Qcm92aWRlciB9IGZyb20gXCJ+L0ZyYW1ld29yay90b2tlbi5wcm92aWRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLXNoYXJlZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NoYXJlZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2hhcmVkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbG9naW5PYmo6IExvZ2luID0gbmV3IExvZ2luKCk7XG4gICAgcHVibGljIGxvZ2luZm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdG9rZW5Qcm92aWRlcjogVG9rZW5Qcm92aWRlcikge1xuICAgICAgICB0aGlzLmxvZ2luZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgICAgRW1haWw6IFsnJywgW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgLy9WYWxpZGF0b3JzLnBhdHRlcm4oJ1thLXowLTkuXyUrLV0rQFthLXowLTkuLV0rXFwuW2Etel17MiwzfSQnKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgLFxuICAgICAgICAgICAgUGFzc3dvcmQ6IFsnJyxcbiAgICAgICAgICAgICAgICBbVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCg4KSxcbiAgICAgICAgICAgICAgICAgICAgLy9WYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSAgICBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLmxvZ2luT2JqLnVzZXJuYW1lID0gdGhpcy5sb2dpbmZvcm0uZ2V0KFwiRW1haWxcIikudmFsdWU7XG4gICAgICAgIHRoaXMubG9naW5PYmoucGFzc3dvcmQgPSB0aGlzLmxvZ2luZm9ybS5nZXQoXCJQYXNzd29yZFwiKS52YWx1ZTtcbiAgICAgICAgdmFyIF9tZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLkxvZ2luKHRoaXMubG9naW5PYmopLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYWRtaW5cIl0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuVXNlclR5cGVJZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIF9tZS5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImFkbWluXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==