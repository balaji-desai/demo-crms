"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var forms_1 = require("@angular/forms");
var admin_service_1 = require("~/admin/adminservice/admin.service");
var nativescript_angular_1 = require("nativescript-angular");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("TextInputLayout", function () { return require("nativescript-textinputlayout").TextInputLayout; });
var OwnerCreateComponent = /** @class */ (function () {
    function OwnerCreateComponent(pageRoute, router, formBuilder, adminService, routerExtensions, params) {
        this.pageRoute = pageRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.routerExtensions = routerExtensions;
        this.params = params;
        this.onshow = new core_1.EventEmitter();
        this.CreateForm();
    }
    OwnerCreateComponent.prototype.ngOnInit = function () {
        this.enablePQ = true;
        this.enableCD = false;
        //propertychange
    };
    OwnerCreateComponent.prototype.ngAfterViewInit = function () {
        //this.animate();
    };
    OwnerCreateComponent.prototype.animate = function () {
        var create = this.createContainer.nativeElement;
        create.transition = { name: "slide",
            duration: 380,
            curve: "easeIn" };
        // create.animate({
        //   translate:{x:0,y:100},
        //   opacity:1,
        //   duration:5000
        // });
    };
    OwnerCreateComponent.prototype.CreateForm = function () {
        this.createowner = this.formBuilder.group({
            FirstName: ['', forms_1.Validators.required],
            LastName: ['', forms_1.Validators.required],
            Address: ['', forms_1.Validators.required],
            City: ['', forms_1.Validators.required],
            State: ['', forms_1.Validators.required],
            ZipCode: ['', forms_1.Validators.required],
            ISDCode: ['91', [forms_1.Validators.required, forms_1.Validators.maxLength(3)]],
            MobileNo: ['', forms_1.Validators.required],
            CrName: ['', forms_1.Validators.required]
        });
        this.Passwords = this.formBuilder.group({
            UserName: ['', forms_1.Validators.required],
            Password: ['', [forms_1.Validators.required]],
            ConfirmPassword: ['', [forms_1.Validators.required]],
        }, { validator: this.passwordConfirming });
    };
    OwnerCreateComponent.prototype.passwordConfirming = function (c) {
        if (c.get('Password').value !== c.get('ConfirmPassword').value) {
            return { invalid: true };
        }
    };
    OwnerCreateComponent.prototype.Create = function (OwnerVm, password) {
        OwnerVm.Password = password.Password;
        OwnerVm.UserName = password.UserName;
        var _me = this;
        this.adminService.Create(OwnerVm).then(function (result) {
        }, function (error) {
        });
    };
    OwnerCreateComponent.prototype.next = function () {
        this.enableCD = true;
        this.enablePQ = false;
    };
    OwnerCreateComponent.prototype.onClose = function () {
        //     var create = <Frame>this.createContainer.nativeElement;
        //     create.transition = {name: "flip",
        //     curve: "linear",
        //     duration:2000
        // };
        this.params.closeCallback("");
        //this.params.closeCallback("");
    };
    __decorate([
        core_1.ViewChild("create"),
        __metadata("design:type", core_1.ElementRef)
    ], OwnerCreateComponent.prototype, "createContainer", void 0);
    __decorate([
        core_1.Output("onshow"),
        __metadata("design:type", Object)
    ], OwnerCreateComponent.prototype, "onshow", void 0);
    OwnerCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-create',
            templateUrl: './ownercreate.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [router_2.PageRoute,
            router_1.ActivatedRoute,
            forms_1.FormBuilder,
            admin_service_1.AdminService,
            nativescript_angular_1.RouterExtensions,
            nativescript_angular_1.ModalDialogParams])
    ], OwnerCreateComponent);
    return OwnerCreateComponent;
}());
exports.OwnerCreateComponent = OwnerCreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZWNyZWF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvd25lY3JlYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFxSDtBQUNySCwwQ0FBeUQ7QUFDekQsc0RBQXdEO0FBRXhELHdDQUFnRztBQUVoRyxvRUFBa0U7QUFJbEUsNkRBQTJFO0FBRzNFLDBFQUF3RTtBQUV4RSxrQ0FBZSxDQUFDLGlCQUFpQixFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQyxlQUFlLEVBQXZELENBQXVELENBQUMsQ0FBQztBQVNsRztJQThCRSw4QkFBb0IsU0FBb0IsRUFDOUIsTUFBc0IsRUFDdEIsV0FBd0IsRUFDeEIsWUFBMEIsRUFDMUIsZ0JBQWtDLEVBQ2xDLE1BQXlCO1FBTGYsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBTm5DLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQVExQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQWhDRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsZ0JBQWdCO0lBQ2xCLENBQUM7SUFDRCw4Q0FBZSxHQUFmO1FBQ0UsaUJBQWlCO0lBQ25CLENBQUM7SUFDRCxzQ0FBTyxHQUFQO1FBRUUsSUFBSSxNQUFNLEdBQVUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDdkQsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFP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QUMsUUFBUSxDQUFDO2tDQUNKLGlCQUFVO2lFQUFDO0lBd0IzQjtRQURDLGFBQU0sQ0FBQyxRQUFRLENBQUM7O3dEQUNXO0lBN0JqQixvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBK0IrQixrQkFBUztZQUN0Qix1QkFBYztZQUNULG1CQUFXO1lBQ1YsNEJBQVk7WUFDUix1Q0FBZ0I7WUFDMUIsd0NBQWlCO09BbkN4QixvQkFBb0IsQ0E2RmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE93bmVyVm0gfSBmcm9tIFwifi9hZG1pbi9hZG1pbi5tb2RlbFwiO1xuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlIH0gZnJvbSBcIn4vYWRtaW4vYWRtaW5zZXJ2aWNlL2FkbWluLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucywgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IEZyYW1lIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIlRleHRJbnB1dExheW91dFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRleHRpbnB1dGxheW91dFwiKS5UZXh0SW5wdXRMYXlvdXQpO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jcmVhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3duZXJjcmVhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZG1pbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE93bmVyQ3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xuICBQYXNzd29yZHM6IEZvcm1Hcm91cDtcbiAgcHVibGljIGVuYWJsZVBROiBib29sZWFuO1xuICBwdWJsaWMgZW5hYmxlQ0Q6IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoXCJjcmVhdGVcIilcbiAgY3JlYXRlQ29udGFpbmVyOkVsZW1lbnRSZWY7XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW5hYmxlUFEgPSB0cnVlO1xuICAgIHRoaXMuZW5hYmxlQ0QgPSBmYWxzZTtcbiAgICAvL3Byb3BlcnR5Y2hhbmdlXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vdGhpcy5hbmltYXRlKCk7XG4gIH1cbiAgYW5pbWF0ZSgpXG4gIHtcbiAgICB2YXIgY3JlYXRlID0gPEZyYW1lPnRoaXMuY3JlYXRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY3JlYXRlLnRyYW5zaXRpb24gPSB7IG5hbWU6IFwic2xpZGVcIixcbiAgICBkdXJhdGlvbjogMzgwLFxuICAgIGN1cnZlOiBcImVhc2VJblwifTtcbiAgICAvLyBjcmVhdGUuYW5pbWF0ZSh7XG4gICAgLy8gICB0cmFuc2xhdGU6e3g6MCx5OjEwMH0sXG4gICAgLy8gICBvcGFjaXR5OjEsXG4gICAgLy8gICBkdXJhdGlvbjo1MDAwXG4gICAgLy8gfSk7XG4gIH1cbiAgc2VyY2h0ZXh0OiBzdHJpbmc7XG4gIGNyZWF0ZW93bmVyOiBGb3JtR3JvdXA7XG4gIEBPdXRwdXQoXCJvbnNob3dcIilcbiAgb25zaG93ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXNcbiAgKSB7XG4gICAgdGhpcy5DcmVhdGVGb3JtKCk7XG4gIH1cblxuXG4gIENyZWF0ZUZvcm0oKSB7XG4gICAgdGhpcy5jcmVhdGVvd25lciA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgRmlyc3ROYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgTGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBBZGRyZXNzOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgQ2l0eTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIFN0YXRlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgWmlwQ29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIElTRENvZGU6IFsnOTEnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICAgIE1vYmlsZU5vOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgQ3JOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG5cbiAgICB0aGlzLlBhc3N3b3JkcyA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgVXNlck5hbWU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBQYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgQ29uZmlybVBhc3N3b3JkOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSwgeyB2YWxpZGF0b3I6IHRoaXMucGFzc3dvcmRDb25maXJtaW5nIH0pXG4gIH1cblxuICBwYXNzd29yZENvbmZpcm1pbmcoYzogQWJzdHJhY3RDb250cm9sKTogeyBpbnZhbGlkOiBib29sZWFuIH0ge1xuICAgIGlmIChjLmdldCgnUGFzc3dvcmQnKS52YWx1ZSAhPT0gYy5nZXQoJ0NvbmZpcm1QYXNzd29yZCcpLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyBpbnZhbGlkOiB0cnVlIH07XG4gICAgfVxuICB9XG5cbiAgQ3JlYXRlKE93bmVyVm06IE93bmVyVm0sIHBhc3N3b3JkKSB7XG4gICAgT3duZXJWbS5QYXNzd29yZCA9IHBhc3N3b3JkLlBhc3N3b3JkO1xuICAgIE93bmVyVm0uVXNlck5hbWUgPSBwYXNzd29yZC5Vc2VyTmFtZTtcbiAgICB2YXIgX21lID0gdGhpcztcbiAgICB0aGlzLmFkbWluU2VydmljZS5DcmVhdGUoT3duZXJWbSkudGhlbihcbiAgICAgIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcblxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgbmV4dCgpIHtcbiAgICB0aGlzLmVuYWJsZUNEID0gdHJ1ZTtcbiAgICB0aGlzLmVuYWJsZVBRID0gZmFsc2U7XG4gIH1cbiAgb25DbG9zZSgpIHtcbi8vICAgICB2YXIgY3JlYXRlID0gPEZyYW1lPnRoaXMuY3JlYXRlQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4vLyAgICAgY3JlYXRlLnRyYW5zaXRpb24gPSB7bmFtZTogXCJmbGlwXCIsXG4vLyAgICAgY3VydmU6IFwibGluZWFyXCIsXG4vLyAgICAgZHVyYXRpb246MjAwMFxuLy8gfTtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwiXCIpO1xuICAgIC8vdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjayhcIlwiKTtcbiAgfVxuXG59XG5cbiJdfQ==