"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var worker_routes_1 = require("./worker.routes");
var worker_component_1 = require("./worker/worker.component");
var WorkerModule = /** @class */ (function () {
    function WorkerModule() {
    }
    WorkerModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                nativescript_angular_1.NativeScriptRouterModule.forChild(worker_routes_1.WorkerRoutes)
            ],
            declarations: [
                worker_component_1.WorkerComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], WorkerModule);
    return WorkerModule;
}());
exports.WorkerModule = WorkerModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSw2REFBZ0U7QUFFaEUsaURBQStDO0FBQy9DLDhEQUE0RDtBQWU1RDtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQWJ4QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1Asd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLCtDQUF3QixDQUFDLFFBQVEsQ0FBTSw0QkFBWSxDQUFDO2FBQ3JEO1lBQ0QsWUFBWSxFQUFFO2dCQUNkLGtDQUFlO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuXG5pbXBvcnQgeyBXb3JrZXJSb3V0ZXMgfSBmcm9tICcuL3dvcmtlci5yb3V0ZXMnO1xuaW1wb3J0IHsgV29ya2VyQ29tcG9uZW50IH0gZnJvbSAnLi93b3JrZXIvd29ya2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKDxhbnk+V29ya2VyUm91dGVzKVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgV29ya2VyQ29tcG9uZW50XG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV29ya2VyTW9kdWxlIHsgfVxuIl19