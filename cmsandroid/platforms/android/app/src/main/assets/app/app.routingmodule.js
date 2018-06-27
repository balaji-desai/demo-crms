"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_component_1 = require("~/shared/shared/shared.component");
var midiator_gaurd_1 = require("~/Framework/midiator.gaurd");
var routes = [
    { path: "", redirectTo: "crms", pathMatch: "full" },
    { path: "crms", children: [{
                path: "",
                component: shared_component_1.SharedComponent,
                canActivate: [midiator_gaurd_1.MediatorGaurd]
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmdtb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZ21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUscUVBQW1FO0FBRW5FLDZEQUEyRDtBQUUzRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ25ELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQztnQkFDeEIsSUFBSSxFQUFDLEVBQUU7Z0JBQ1AsU0FBUyxFQUFDLGtDQUFlO2dCQUN6QixXQUFXLEVBQUMsQ0FBQyw4QkFBYSxDQUFDO2FBQzVCLENBQUM7S0FDTDtDQUNBLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNoYXJlZENvbXBvbmVudCB9IGZyb20gXCJ+L3NoYXJlZC9zaGFyZWQvc2hhcmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWlkaWF0b3JDb21wb25lbnQgfSBmcm9tIFwifi9GcmFtZXdvcmsvbWlkaWF0b3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZWRpYXRvckdhdXJkIH0gZnJvbSBcIn4vRnJhbWV3b3JrL21pZGlhdG9yLmdhdXJkXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJjcm1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiY3Jtc1wiLCBjaGlsZHJlbjpbe1xuICAgICAgcGF0aDpcIlwiLFxuICAgICAgY29tcG9uZW50OlNoYXJlZENvbXBvbmVudCxcbiAgICAgIGNhbkFjdGl2YXRlOltNZWRpYXRvckdhdXJkXVxuICAgIH1dIFxufVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=