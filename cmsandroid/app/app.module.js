"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var app_routingmodule_1 = require("~/app.routingmodule");
var shared_module_1 = require("~/shared/shared.module");
var admin_module_1 = require("~/admin/admin.module");
var customer_module_1 = require("~/customer/customer.module");
var worker_module_1 = require("~/worker/worker.module");
var owner_module_1 = require("~/owner/owner.module");
var crms_interceptor_1 = require("~/Framework/crms.interceptor");
var token_provider_1 = require("~/Framework/token.provider");
var http_client_1 = require("nativescript-angular/http-client");
var http_2 = require("@angular/common/http");
var equalvalidator_1 = require("~/Framework/equalvalidator");
var showerror_component_1 = require("~/Framework/showerror.component");
var midiator_component_1 = require("~/Framework/midiator.component");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var application_1 = require("tns-core-modules/application/application");
var midiator_gaurd_1 = require("~/Framework/midiator.gaurd");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, equalvalidator_1.EqualValidator, showerror_component_1.ShowErrorsComponent, midiator_component_1.MidiatorComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                app_routingmodule_1.AppRoutingModule,
                worker_module_1.WorkerModule,
                owner_module_1.OwnerModule,
                customer_module_1.CustomerModule,
                admin_module_1.AdminModule,
                shared_module_1.SharedModule,
                http_client_1.NativeScriptHttpClientModule,
                http_2.HttpClientModule,
            ],
            providers: [{
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: crms_interceptor_1.CrmsInterceptor,
                    multi: true
                }, token_provider_1.TokenProvider,
                midiator_gaurd_1.MediatorGaurd,
                dialogs_1.ModalDialogService,
                application_1.AndroidApplication],
            schemas: [core_1.NO_ERRORS_SCHEMA],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsc0RBQXVFO0FBQ3ZFLGlEQUErQztBQUMvQyx5REFBdUQ7QUFDdkQsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUNuRCxpRUFBK0Q7QUFDL0QsNkRBQTJEO0FBQzNELGdFQUFnRjtBQUNoRiw2Q0FBMkU7QUFDM0UsNkRBQTREO0FBQzVELHVFQUFzRTtBQUN0RSxxRUFBbUU7QUFDbkUsbUVBQTZFO0FBQzdFLHdFQUE4RTtBQUM5RSw2REFBMkQ7QUE0QjNEO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUExQnJCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLDRCQUFZLEVBQUMsK0JBQWMsRUFBQyx5Q0FBbUIsRUFBQyxzQ0FBaUIsQ0FBQztZQUNqRixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQjtnQkFDMUIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsb0NBQWdCO2dCQUNoQiw0QkFBWTtnQkFDWiwwQkFBVztnQkFDWCxnQ0FBYztnQkFDZCwwQkFBVztnQkFDWCw0QkFBWTtnQkFDWiwwQ0FBNEI7Z0JBQzVCLHVCQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBQyxDQUFDO29CQUNULE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxrQ0FBZTtvQkFDekIsS0FBSyxFQUFFLElBQUk7aUJBQ1osRUFBQyw4QkFBYTtnQkFDYiw4QkFBYTtnQkFDYiw0QkFBa0I7Z0JBQ2xCLGdDQUFrQixDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC5yb3V0aW5nbW9kdWxlXCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwifi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuaW1wb3J0IHsgQWRtaW5Nb2R1bGUgfSBmcm9tIFwifi9hZG1pbi9hZG1pbi5tb2R1bGVcIjtcbmltcG9ydCB7IEN1c3RvbWVyTW9kdWxlIH0gZnJvbSBcIn4vY3VzdG9tZXIvY3VzdG9tZXIubW9kdWxlXCI7XG5pbXBvcnQgeyBXb3JrZXJNb2R1bGUgfSBmcm9tIFwifi93b3JrZXIvd29ya2VyLm1vZHVsZVwiO1xuaW1wb3J0IHsgT3duZXJNb2R1bGUgfSBmcm9tIFwifi9vd25lci9vd25lci5tb2R1bGVcIjtcbmltcG9ydCB7IENybXNJbnRlcmNlcHRvciB9IGZyb20gXCJ+L0ZyYW1ld29yay9jcm1zLmludGVyY2VwdG9yXCI7XG5pbXBvcnQgeyBUb2tlblByb3ZpZGVyIH0gZnJvbSBcIn4vRnJhbWV3b3JrL3Rva2VuLnByb3ZpZGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3IgfSBmcm9tIFwifi9GcmFtZXdvcmsvZXF1YWx2YWxpZGF0b3JcIjtcbmltcG9ydCB7IFNob3dFcnJvcnNDb21wb25lbnQgfSBmcm9tIFwifi9GcmFtZXdvcmsvc2hvd2Vycm9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWlkaWF0b3JDb21wb25lbnQgfSBmcm9tIFwifi9GcmFtZXdvcmsvbWlkaWF0b3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTWVkaWF0b3JHYXVyZCB9IGZyb20gXCJ+L0ZyYW1ld29yay9taWRpYXRvci5nYXVyZFwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsRXF1YWxWYWxpZGF0b3IsU2hvd0Vycm9yc0NvbXBvbmVudCxNaWRpYXRvckNvbXBvbmVudF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBXb3JrZXJNb2R1bGUsXG4gICAgT3duZXJNb2R1bGUsXG4gICAgQ3VzdG9tZXJNb2R1bGUsXG4gICAgQWRtaW5Nb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOlt7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6IENybXNJbnRlcmNlcHRvcixcbiAgICBtdWx0aTogdHJ1ZVxuICB9LFRva2VuUHJvdmlkZXIsXG4gICAgTWVkaWF0b3JHYXVyZCxcbiAgICBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgQW5kcm9pZEFwcGxpY2F0aW9uXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==