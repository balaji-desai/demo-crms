"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var customer_routes_1 = require("./customer.routes");
var customer_component_1 = require("./customer/customer.component");
var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(customer_routes_1.CustomerRoutes)
            ],
            declarations: [
                customer_component_1.CustomerComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsNkRBQWdFO0FBRWhFLHFEQUFtRDtBQUNuRCxvRUFBa0U7QUFlbEU7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFiMUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QiwrQ0FBd0IsQ0FBQyxRQUFRLENBQU0sZ0NBQWMsQ0FBQzthQUN2RDtZQUNELFlBQVksRUFBRTtnQkFDZCxzQ0FBaUI7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBDdXN0b21lclJvdXRlcyB9IGZyb20gJy4vY3VzdG9tZXIucm91dGVzJztcbmltcG9ydCB7IEN1c3RvbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZCg8YW55PkN1c3RvbWVyUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgQ3VzdG9tZXJDb21wb25lbnRcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lck1vZHVsZSB7IH1cbiJdfQ==