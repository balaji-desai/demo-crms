"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var owner_routes_1 = require("./owner.routes");
var owner_component_1 = require("./owner/owner.component");
var OwnerModule = /** @class */ (function () {
    function OwnerModule() {
    }
    OwnerModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(owner_routes_1.OwnerRoutes)
            ],
            declarations: [
                owner_component_1.OwnerComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], OwnerModule);
    return OwnerModule;
}());
exports.OwnerModule = OwnerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3duZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELGdGQUE4RTtBQUM5RSxvREFBcUU7QUFDckUsNkRBQWdFO0FBRWhFLCtDQUE2QztBQUM3QywyREFBeUQ7QUFlekQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWJ2QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBTSwwQkFBVyxDQUFDO2FBQ3BEO1lBQ0QsWUFBWSxFQUFFO2dCQUNkLGdDQUFjO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5cbmltcG9ydCB7IE93bmVyUm91dGVzIH0gZnJvbSAnLi9vd25lci5yb3V0ZXMnO1xuaW1wb3J0IHsgT3duZXJDb21wb25lbnQgfSBmcm9tICcuL293bmVyL293bmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKDxhbnk+T3duZXJSb3V0ZXMpXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICBPd25lckNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE93bmVyTW9kdWxlIHsgfVxuIl19