"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var admin_service_1 = require("~/admin/adminservice/admin.service");
var ownecreate_component_1 = require("~/admin/admin/ownecreate.component");
var nativescript_angular_1 = require("nativescript-angular");
var detail_component_1 = require("~/admin/admin/detail.component");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var OwnerListComponent = /** @class */ (function () {
    function OwnerListComponent(routerextension, adminService, modal, vcRef) {
        this.routerextension = routerextension;
        this.adminService = adminService;
        this.modal = modal;
        this.vcRef = vcRef;
    }
    OwnerListComponent.prototype.ngAfterViewInit = function () {
        this.applyanimation();
    };
    OwnerListComponent.prototype.applyanimation = function () {
        var searchbar = this.searchContainer.nativeElement;
        // this.showadd = false;
        // searchbar.animate({
        //   translate:{x:0,y:0},
        //   duration:500
        // }).then(function(){
        //   searchbar.animate({
        //     scale:{x:0,y:0},
        //     duration:500
        //   });
        // });
    };
    OwnerListComponent.prototype.onSubmit = function (args) {
        var searchBar = args.object;
        alert("You are searching for " + searchBar.text);
    };
    OwnerListComponent.prototype.onTextChanged = function (args) {
        var searchBar = args.object;
        console.log("SearchBar text changed! New value: " + searchBar.text);
        // Observable.of(this.europianCountries).switchMap((country)=>
        // country).filter((country) => country == searchBar.text).subscribe((value)=>
        // {
        //   this.Country.push(value);
        // });
    };
    OwnerListComponent.prototype.ngOnInit = function () {
        console.log("show");
        this.enableList = true;
        this.enableCreat = false;
        this.enableDetail = false;
        this.container;
        this.isLoading = true;
        this.getall();
    };
    OwnerListComponent.prototype.getall = function () {
        var _me = this;
        this.adminService.GetAll().then(function (result) {
            _me.isLoading = false;
            _me.Owner = result;
        }, function (error) {
            _me.isLoading = false;
        });
    };
    OwnerListComponent.prototype.cancelanim = function () {
        var searchbar = this.searchContainer.nativeElement;
        // console.log("onblur");
        //     this.showadd = true;
        //     searchbar.animate({
        //       translate:{x:0,y:10},
        //       scale:{x:1,y:1},
        //       duration:500
        //     });
    };
    OwnerListComponent.prototype.create = function (serchtext) {
        if (serchtext === void 0) { serchtext = ''; }
        this.isLoading = true;
        var options = {
            viewContainerRef: this.vcRef,
            context: {},
            fullscreen: true
        };
        var _me = this;
        this.modal.showModal(ownecreate_component_1.OwnerCreateComponent, options)
            .then(function (result) {
            _me.getall();
            console.log(result);
        });
    };
    OwnerListComponent.prototype.onItemTap = function (event) {
        var list = event.object;
        var own = this.Owner[event.index];
        var options = {
            viewContainerRef: this.vcRef,
            context: { ownerId: own.CrmsOwnerId },
            fullscreen: true
        };
        var _me = this;
        this.modal.showModal(detail_component_1.DetailComponent, options)
            .then(function (result) {
            _me.isLoading = false;
            console.log(result);
        });
        console.log(event);
    };
    OwnerListComponent.prototype.showview = function () {
        this.enableList = true;
        this.enableCreat = false;
        this.enableDetail = false;
        this.getall();
    };
    OwnerListComponent.prototype.onSwipe = function (args) {
        this.cancelanim();
        var search = this.searchContainer.nativeElement;
        search.dismissSoftInput();
        //bottom.set("showDetails", false);
        console.log("Swipe Direction: " + args.direction);
    };
    __decorate([
        core_1.ViewChild("bottom"),
        __metadata("design:type", core_1.ElementRef)
    ], OwnerListComponent.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], OwnerListComponent.prototype, "searchContainer", void 0);
    __decorate([
        core_1.ViewChild("add"),
        __metadata("design:type", core_1.ElementRef)
    ], OwnerListComponent.prototype, "addContainer", void 0);
    OwnerListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-list',
            templateUrl: './ownerlist.component.html',
            styleUrls: ['./admin.component.scss']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            admin_service_1.AdminService,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], OwnerListComponent);
    return OwnerListComponent;
}());
exports.OwnerListComponent = OwnerListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXJsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm93bmVybGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBdUk7QUFFdkksbUVBQWlHO0FBR2pHLG9FQUFrRTtBQUNsRSwyRUFBMEU7QUFDMUUsNkRBQXdEO0FBQ3hELG1FQUFpRTtBQUdqRSwwRUFBd0U7QUFDeEUsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBUS9FO0lBMkJFLDRCQUFvQixlQUFpQyxFQUMzQyxZQUEwQixFQUMxQixLQUF5QixFQUN6QixLQUF1QjtRQUhiLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUMzQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUN6QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUdqQyxDQUFDO0lBekJELDRDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDJDQUFjLEdBQWQ7UUFFRSxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUUxRCx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixNQUFNO0lBQ1osQ0FBQztJQWFNLHFDQUFRLEdBQWYsVUFBZ0IsSUFBSTtRQUNsQixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLDBDQUFhLEdBQXBCLFVBQXFCLElBQUk7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSw4REFBOEQ7UUFDOUQsOEVBQThFO1FBQzlFLElBQUk7UUFDSiw4QkFBOEI7UUFDOUIsTUFBTTtJQUNSLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQzdCLFVBQVUsTUFBTTtZQUNkLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLENBQUMsRUFDRCxVQUFVLEtBQUs7WUFDYixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLENBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBRUUsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDOUQseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIsVUFBVTtJQUNaLENBQUM7SUFDRCxtQ0FBTSxHQUFOLFVBQU8sU0FBYztRQUFkLDBCQUFBLEVBQUEsY0FBYztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFNLE9BQU8sR0FBdUI7WUFDbEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDNUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO1FBQ0YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsMkNBQW9CLEVBQUUsT0FBTyxDQUFDO2FBQ2hELElBQUksQ0FBQyxVQUFDLE1BQWM7WUFDbkIsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksSUFBSSxHQUFhLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQXVCO1lBQ2xDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzVCLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFO1lBQ3JDLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7UUFFRixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFWCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxrQ0FBZSxFQUFFLE9BQU8sQ0FBQzthQUMzQyxJQUFJLENBQUMsVUFBQyxNQUFjO1lBQ25CLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWhCLENBQUM7SUFDRCxvQ0FBTyxHQUFQLFVBQVEsSUFBMkI7UUFFakMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFjLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQzNELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLG1DQUFtQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBbkltQjtRQUFuQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBVyxpQkFBVTt5REFBQztJQUN0QjtRQUFuQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBaUIsaUJBQVU7K0RBQUM7SUFDL0I7UUFBaEIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQWMsaUJBQVU7NERBQUM7SUFOL0Isa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQTRCcUMsdUNBQWdCO1lBQzdCLDRCQUFZO1lBQ25CLDRCQUFrQjtZQUNsQix1QkFBZ0I7T0E5QnRCLGtCQUFrQixDQXlJOUI7SUFBRCx5QkFBQztDQUFBLEFBeklELElBeUlDO0FBeklZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBPd25lclZtIH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4ubW9kZWxcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgQWRtaW5TZXJ2aWNlIH0gZnJvbSBcIn4vYWRtaW4vYWRtaW5zZXJ2aWNlL2FkbWluLnNlcnZpY2VcIjtcbmltcG9ydCB7IE93bmVyQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4vb3duZWNyZWF0ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FkbWluL2FkbWluL2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3L2xpc3Qtdmlld1wiO1xuaW1wb3J0IHsgU3dpcGVHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXMvZ2VzdHVyZXNcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vd25lcmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZG1pbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE93bmVyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlclZpZXdJbml0IHtcbiAgcHVibGljIG93bmVySWQ6IG51bWJlcjtcbiAgcHVibGljIHNob3dhZGQ6Ym9vbGVhbjtcbiAgcHVibGljIGlzTG9hZGluZzpib29sZWFuO1xuICBAVmlld0NoaWxkKFwiYm90dG9tXCIpY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2VhcmNoXCIpc2VhcmNoQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiYWRkXCIpYWRkQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5YW5pbWF0aW9uKCk7XG4gIH1cblxuICBhcHBseWFuaW1hdGlvbigpXG4gIHtcbiAgICBsZXQgc2VhcmNoYmFyID0gPFNlYXJjaEJhcj50aGlzLnNlYXJjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIFxuICAgICAgICAvLyB0aGlzLnNob3dhZGQgPSBmYWxzZTtcbiAgICAgICAgLy8gc2VhcmNoYmFyLmFuaW1hdGUoe1xuICAgICAgICAvLyAgIHRyYW5zbGF0ZTp7eDowLHk6MH0sXG4gICAgICAgIC8vICAgZHVyYXRpb246NTAwXG4gICAgICAgIC8vIH0pLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICBzZWFyY2hiYXIuYW5pbWF0ZSh7XG4gICAgICAgIC8vICAgICBzY2FsZTp7eDowLHk6MH0sXG4gICAgICAgIC8vICAgICBkdXJhdGlvbjo1MDBcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfSk7XG4gIH1cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJleHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgcHJpdmF0ZSBhZG1pblNlcnZpY2U6IEFkbWluU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG5cbiAgfVxuICBwdWJsaWMgZW5hYmxlTGlzdDogYm9vbGVhbjtcbiAgcHVibGljIGVuYWJsZUNyZWF0OiBib29sZWFuO1xuICBwdWJsaWMgZW5hYmxlRGV0YWlsOiBib29sZWFuO1xuICBwdWJsaWMgc2VhcmNoUGhyYXNlOiBzdHJpbmc7XG4gIHB1YmxpYyBPd25lcjogQXJyYXk8T3duZXJWbT47XG4gIHB1YmxpYyBvblN1Ym1pdChhcmdzKSB7XG4gICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgYWxlcnQoXCJZb3UgYXJlIHNlYXJjaGluZyBmb3IgXCIgKyBzZWFyY2hCYXIudGV4dCk7XG4gIH1cblxuICBwdWJsaWMgb25UZXh0Q2hhbmdlZChhcmdzKSB7XG4gICAgbGV0IHNlYXJjaEJhciA9IDxTZWFyY2hCYXI+YXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJTZWFyY2hCYXIgdGV4dCBjaGFuZ2VkISBOZXcgdmFsdWU6IFwiICsgc2VhcmNoQmFyLnRleHQpO1xuICAgIC8vIE9ic2VydmFibGUub2YodGhpcy5ldXJvcGlhbkNvdW50cmllcykuc3dpdGNoTWFwKChjb3VudHJ5KT0+XG4gICAgLy8gY291bnRyeSkuZmlsdGVyKChjb3VudHJ5KSA9PiBjb3VudHJ5ID09IHNlYXJjaEJhci50ZXh0KS5zdWJzY3JpYmUoKHZhbHVlKT0+XG4gICAgLy8ge1xuICAgIC8vICAgdGhpcy5Db3VudHJ5LnB1c2godmFsdWUpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJzaG93XCIpO1xuICAgIHRoaXMuZW5hYmxlTGlzdCA9IHRydWU7XG4gICAgdGhpcy5lbmFibGVDcmVhdCA9IGZhbHNlO1xuICAgIHRoaXMuZW5hYmxlRGV0YWlsID0gZmFsc2U7XG4gICAgdGhpcy5jb250YWluZXI7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZ2V0YWxsKCk7XG4gIH1cbiAgZ2V0YWxsKCkge1xuICAgIHZhciBfbWUgPSB0aGlzO1xuICAgIHRoaXMuYWRtaW5TZXJ2aWNlLkdldEFsbCgpLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIF9tZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgX21lLk93bmVyID0gcmVzdWx0O1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBfbWUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgY2FuY2VsYW5pbSgpXG4gIHtcbiAgICBsZXQgc2VhcmNoYmFyID0gPFNlYXJjaEJhcj50aGlzLnNlYXJjaENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKFwib25ibHVyXCIpO1xuICAgIC8vICAgICB0aGlzLnNob3dhZGQgPSB0cnVlO1xuICAgIC8vICAgICBzZWFyY2hiYXIuYW5pbWF0ZSh7XG4gICAgLy8gICAgICAgdHJhbnNsYXRlOnt4OjAseToxMH0sXG4gICAgLy8gICAgICAgc2NhbGU6e3g6MSx5OjF9LFxuICAgIC8vICAgICAgIGR1cmF0aW9uOjUwMFxuICAgIC8vICAgICB9KTtcbiAgfVxuICBjcmVhdGUoc2VyY2h0ZXh0ID0gJycpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH07XG4gICAgdmFyIF9tZSA9IHRoaXM7XG4gICAgdGhpcy5tb2RhbC5zaG93TW9kYWwoT3duZXJDcmVhdGVDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAudGhlbigocmVzdWx0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgX21lLmdldGFsbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkl0ZW1UYXAoZXZlbnQpIHtcbiAgICB2YXIgbGlzdCA9IDxMaXN0Vmlldz5ldmVudC5vYmplY3Q7XG4gICAgdmFyIG93biA9IHRoaXMuT3duZXJbZXZlbnQuaW5kZXhdO1xuICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICBjb250ZXh0OiB7IG93bmVySWQ6IG93bi5Dcm1zT3duZXJJZCB9LFxuICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgX21lID0gdGhpcztcblxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChEZXRhaWxDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgICAgICAgLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBfbWUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gIH1cblxuICBzaG93dmlldygpIHtcbiAgICB0aGlzLmVuYWJsZUxpc3QgPSB0cnVlO1xuICAgIHRoaXMuZW5hYmxlQ3JlYXQgPSBmYWxzZTtcbiAgICB0aGlzLmVuYWJsZURldGFpbCA9IGZhbHNlO1xuICAgIHRoaXMuZ2V0YWxsKCk7XG5cbiAgfVxuICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSlcbiAge1xuICAgIHRoaXMuY2FuY2VsYW5pbSgpO1xuICAgIGxldCBzZWFyY2ggPSA8U2VhcmNoQmFyPnRoaXMuc2VhcmNoQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgc2VhcmNoLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAvL2JvdHRvbS5zZXQoXCJzaG93RGV0YWlsc1wiLCBmYWxzZSk7XG4gICAgY29uc29sZS5sb2coXCJTd2lwZSBEaXJlY3Rpb246IFwiICsgYXJncy5kaXJlY3Rpb24pOyAgICBcbiAgfVxuXG59XG5cbiJdfQ==