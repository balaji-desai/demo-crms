"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var application_1 = require("tns-core-modules/application");
var AppComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function AppComponent(page, androidapplication) {
        this.page = page;
        this.androidapplication = androidapplication;
        page.actionBarHidden = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <Page class=\"page\">\n  <ActionBar\n  backgroundColor=\"rgb(42, 25, 59)\"\n  title=\"Crms\"></ActionBar>\n    <!-- Your UI components go here -->\n    <page-router-outlet></page-router-outlet>\n    </Page>\n  "
        }),
        __metadata("design:paramtypes", [page_1.Page, application_1.AndroidApplication])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsaURBQWdEO0FBQ2hELDREQUFrRTtBQWVsRTtJQUNFLGtDQUFrQztJQUNsQyxzQkFBb0IsSUFBUyxFQUFTLGtCQUFxQztRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBSlUsWUFBWTtRQVp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLHdOQVFUO1NBQ0YsQ0FBQzt5Q0FHeUIsV0FBSSxFQUE0QixnQ0FBa0I7T0FGaEUsWUFBWSxDQU14QjtJQUFELG1CQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICA8QWN0aW9uQmFyXG4gIGJhY2tncm91bmRDb2xvcj1cInJnYig0MiwgMjUsIDU5KVwiXG4gIHRpdGxlPVwiQ3Jtc1wiPjwvQWN0aW9uQmFyPlxuICAgIDwhLS0gWW91ciBVSSBjb21wb25lbnRzIGdvIGhlcmUgLS0+XG4gICAgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5cbiAgICA8L1BhZ2U+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6UGFnZSxwcml2YXRlIGFuZHJvaWRhcHBsaWNhdGlvbjpBbmRyb2lkQXBwbGljYXRpb24pe1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuICBcbn1cbiJdfQ==