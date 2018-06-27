"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var angular_1 = require("nativescript-masked-text-field/angular");
var admin_routes_1 = require("./admin.routes");
var admin_component_1 = require("./admin/admin.component");
var angular_2 = require("nativescript-bottom-navigation/angular");
var ownecreate_component_1 = require("~/admin/admin/ownecreate.component");
var ownerlist_component_1 = require("~/admin/admin/ownerlist.component");
var home_component_1 = require("~/admin/admin/home.component");
var forms_2 = require("@angular/forms");
var detail_component_1 = require("~/admin/admin/detail.component");
var admin_service_1 = require("~/admin/adminservice/admin.service");
var setting_component_1 = require("~/admin/admin/setting.component");
var tree_component_1 = require("~/admin/admin/tree.component");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(admin_routes_1.AdminRoutes),
                angular_2.NativescriptBottomNavigationModule,
                forms_2.ReactiveFormsModule,
                angular_1.MaskedTextFieldModule
            ],
            declarations: [
                admin_component_1.AdminComponent,
                ownerlist_component_1.OwnerListComponent,
                ownecreate_component_1.OwnerCreateComponent,
                home_component_1.HomeComponent,
                detail_component_1.DetailComponent,
                setting_component_1.SettingComponent,
                tree_component_1.TreeComponent
            ],
            providers: [admin_service_1.AdminService, dialogs_1.ModalDialogService],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsNkRBQWdFO0FBQ2hFLG1FQUE2RTtBQUM3RSxrRUFBK0U7QUFDL0UsK0NBQTZDO0FBQzdDLDJEQUF5RDtBQUN6RCxrRUFBNEY7QUFDNUYsMkVBQTBFO0FBQzFFLHlFQUF1RTtBQUN2RSwrREFBNkQ7QUFDN0Qsd0NBQXFEO0FBQ3JELG1FQUFpRTtBQUNqRSxvRUFBa0U7QUFDbEUscUVBQW1FO0FBQ25FLCtEQUE2RDtBQXlCN0Q7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQXZCdkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQU0sMEJBQVcsQ0FBQztnQkFDbkQsNENBQWtDO2dCQUNsQywyQkFBbUI7Z0JBQ25CLCtCQUFxQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDWixnQ0FBYztnQkFDZCx3Q0FBa0I7Z0JBQ2xCLDJDQUFvQjtnQkFDcEIsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2Ysb0NBQWdCO2dCQUNoQiw4QkFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksRUFBRSw0QkFBa0IsQ0FBQztZQUM3QyxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBNYXNrZWRUZXh0RmllbGRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hc2tlZC10ZXh0LWZpZWxkL2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFkbWluUm91dGVzIH0gZnJvbSAnLi9hZG1pbi5yb3V0ZXMnO1xuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXRpdmVzY3JpcHRCb3R0b21OYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ib3R0b20tbmF2aWdhdGlvbi9hbmd1bGFyXCI7XG5pbXBvcnQgeyBPd25lckNyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCJ+L2FkbWluL2FkbWluL293bmVjcmVhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPd25lckxpc3RDb21wb25lbnQgfSBmcm9tIFwifi9hZG1pbi9hZG1pbi9vd25lcmxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FkbWluL2FkbWluL2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFkbWluU2VydmljZSB9IGZyb20gXCJ+L2FkbWluL2FkbWluc2VydmljZS9hZG1pbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5nQ29tcG9uZW50IH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4vc2V0dGluZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRyZWVDb21wb25lbnQgfSBmcm9tIFwifi9hZG1pbi9hZG1pbi90cmVlLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZCg8YW55PkFkbWluUm91dGVzKSxcbiAgICBOYXRpdmVzY3JpcHRCb3R0b21OYXZpZ2F0aW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWFza2VkVGV4dEZpZWxkTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFkbWluQ29tcG9uZW50LFxuICAgIE93bmVyTGlzdENvbXBvbmVudCxcbiAgICBPd25lckNyZWF0ZUNvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIERldGFpbENvbXBvbmVudCxcbiAgICBTZXR0aW5nQ29tcG9uZW50LFxuICAgIFRyZWVDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbQWRtaW5TZXJ2aWNlLCBNb2RhbERpYWxvZ1NlcnZpY2VdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluTW9kdWxlIHsgfVxuIl19