"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("@angular/router");
var admin_service_1 = require("~/admin/adminservice/admin.service");
var page_1 = require("tns-core-modules/ui/page/page");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, adminService, _page, params) {
        this.router = router;
        this.adminService = adminService;
        this._page = _page;
        this.params = params;
        // this.router.params.forEach((key)=>{
        //   this.ownerId = +(key["id"]);
        // });
        this.ownerId = params.context.ownerId;
        console.log(this.ownerId);
    }
    DetailComponent.prototype.ngAfterViewInit = function () {
        this.animate();
    };
    DetailComponent.prototype.animate = function () {
        var create = this.createContainer.nativeElement;
        create.transition = { name: "flip",
            duration: 2000,
            curve: "linear" };
    };
    DetailComponent.prototype.ngOnInit = function () {
        this.GetOwner();
    };
    DetailComponent.prototype.GetOwner = function () {
        var _me = this;
        this.adminService.GetById(this.ownerId).then(function (result) {
            _me.owner = result;
        }, function (error) {
        });
    };
    DetailComponent.prototype.onClose = function () {
        //this.params.closeCallback("");
        this.params.closeCallback("");
    };
    __decorate([
        core_1.ViewChild("detail"),
        __metadata("design:type", core_1.ElementRef)
    ], DetailComponent.prototype, "createContainer", void 0);
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-detail',
            templateUrl: './detail.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, admin_service_1.AdminService,
            page_1.Page,
            dialogs_1.ModalDialogParams])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsbUVBQTRFO0FBRzVFLDBDQUFpRDtBQUVqRCxvRUFBa0U7QUFDbEUsc0RBQXFEO0FBU3JEO0lBS0UseUJBQW9CLE1BQXNCLEVBQVUsWUFBMEIsRUFDcEUsS0FBVyxFQUNYLE1BQXlCO1FBRmYsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwRSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFakMsc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUNqQyxNQUFNO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QseUNBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0QsaUNBQU8sR0FBUDtRQUVFLElBQUksTUFBTSxHQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBQyxJQUFJLEVBQUUsTUFBTTtZQUNqQyxRQUFRLEVBQUUsSUFBSTtZQUNkLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ00sa0NBQVEsR0FBZjtRQUNFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzFDLFVBQVUsTUFBTTtZQUNkLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLENBQUMsRUFDRCxVQUFVLEtBQUs7UUFFZixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUF2Q0Q7UUFEQyxnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FDSixpQkFBVTs0REFBQztJQUhoQixlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQU00Qix1QkFBYyxFQUF3Qiw0QkFBWTtZQUM3RCxXQUFJO1lBQ0gsMkJBQWlCO09BUHhCLGVBQWUsQ0EyQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IEJvdHRvbUJhciwgQm90dG9tQmFySXRlbSwgVElUTEVfU1RBVEUsIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhLCBOb3RpZmljYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtYm90dG9tYmFyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgT3duZXJWbSB9IGZyb20gXCJ+L2FkbWluL2FkbWluLm1vZGVsXCI7XG5pbXBvcnQgeyBBZG1pblNlcnZpY2UgfSBmcm9tIFwifi9hZG1pbi9hZG1pbnNlcnZpY2UvYWRtaW4uc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgRnJhbWUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZGV0YWlsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkbWluLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LEFmdGVyVmlld0luaXQge1xuICBvd25lcklkOiBudW1iZXI7XG4gIEBWaWV3Q2hpbGQoXCJkZXRhaWxcIilcbiAgY3JlYXRlQ29udGFpbmVyOkVsZW1lbnRSZWY7XG4gIHB1YmxpYyBvd25lcjogT3duZXJWbTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3BhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBwYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zXG4gICkge1xuICAgIC8vIHRoaXMucm91dGVyLnBhcmFtcy5mb3JFYWNoKChrZXkpPT57XG4gICAgLy8gICB0aGlzLm93bmVySWQgPSArKGtleVtcImlkXCJdKTtcbiAgICAvLyB9KTtcbiAgICB0aGlzLm93bmVySWQgPSBwYXJhbXMuY29udGV4dC5vd25lcklkO1xuICAgIGNvbnNvbGUubG9nKHRoaXMub3duZXJJZCk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICB9XG4gIGFuaW1hdGUoKVxuICB7XG4gICAgdmFyIGNyZWF0ZSA9IDxGcmFtZT50aGlzLmNyZWF0ZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGNyZWF0ZS50cmFuc2l0aW9uID0ge25hbWU6IFwiZmxpcFwiLFxuICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIGN1cnZlOiBcImxpbmVhclwifTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLkdldE93bmVyKCk7XG4gIH1cbiAgcHVibGljIEdldE93bmVyKCkge1xuICAgIHZhciBfbWUgPSB0aGlzO1xuICAgIHRoaXMuYWRtaW5TZXJ2aWNlLkdldEJ5SWQodGhpcy5vd25lcklkKS50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBfbWUub3duZXIgPSByZXN1bHQ7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG5cbiAgICAgIH1cbiAgICApO1xuICB9XG4gIG9uQ2xvc2UoKSB7XG4gICAgLy90aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKFwiXCIpO1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soXCJcIik7XG4gIH1cbn1cblxuIl19