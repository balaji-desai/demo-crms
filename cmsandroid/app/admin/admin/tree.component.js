"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var application_1 = require("tns-core-modules/application");
var enums_1 = require("ui/enums");
var nativescript_cardview_1 = require("nativescript-cardview");
nativescript_angular_1.registerElement('CardView', function () { return nativescript_cardview_1.CardView; });
var TreeComponent = /** @class */ (function () {
    function TreeComponent(routerExtensions, androidapplication) {
        this.routerExtensions = routerExtensions;
        this.androidapplication = androidapplication;
        this.tree = [];
    }
    TreeComponent.prototype.ngOnInit = function () {
        this.tree = [
            {
                "ItemId": 1,
                "ItemName": "item1",
                "subItemList": [
                    {
                        "SubItemId": 1,
                        "SubItemName": "subitem1"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    }
                ]
            },
            {
                "ItemId": 2,
                "ItemName": "item2",
                "subItemList": [
                    {
                        "SubItemId": 1,
                        "SubItemName": "subitem1"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    }
                ]
            },
            {
                "ItemId": 3,
                "ItemName": "item3",
                "subItemList": [
                    {
                        "SubItemId": 1,
                        "SubItemName": "subitem1"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 3,
                        "SubItemName": "subitem3"
                    }
                ]
            }
        ];
    };
    TreeComponent.prototype.onItemTap = function (itemobj) {
        var stack = itemobj.object;
        var chield = stack.getChildAt(1);
        if (chield.className == "close") {
            stack.opacity = 0;
            chield.className = "open";
            chield.translateY = -300;
            stack.opacity = 1;
            chield.animate({
                scale: { x: 1, y: 1 },
                translate: { x: 0, y: 0 },
                duration: 1000,
                curve: enums_1.AnimationCurve.easeIn
            });
        }
        else {
            chield.animate({
                scale: { x: 1, y: 1 }
            }).then(function () {
                chield.className = "close";
            });
        }
    };
    TreeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-admin',
            templateUrl: './tree.component.html',
            styleUrls: ['./tree.component.scss'],
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            application_1.AndroidApplication])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRiw2REFBeUU7QUFFekUsNERBQXVHO0FBRXZHLGtDQUF3QztBQUV4QywrREFBaUQ7QUFDakQsc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLGdDQUFRLEVBQVIsQ0FBUSxDQUFDLENBQUM7QUFRNUM7SUFJSSx1QkFBb0IsZ0JBQWtDLEVBQ3hDLGtCQUFzQztRQURoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3hDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFIN0MsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQUtqQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUjtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxVQUFVLEVBQUUsT0FBTztnQkFDbkIsYUFBYSxFQUFFO29CQUNYO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7aUJBQ0o7YUFDSjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixhQUFhLEVBQUU7b0JBQ1g7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7aUJBQ0o7YUFDSjtZQUNEO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixhQUFhLEVBQUU7b0JBQ1g7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7aUJBQ0o7YUFDSjtTQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsaUNBQVMsR0FBVCxVQUFVLE9BQU87UUFDYixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlCLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUM7Z0JBQ25CLFNBQVMsRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztnQkFDbkIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLHNCQUFjLENBQUMsTUFBTTthQUMvQixDQUFDLENBQUM7UUFFUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNaLEtBQUssRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUVMLENBQUM7SUFyR1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDbkMsQ0FBQzt5Q0FLb0MsdUNBQWdCO1lBQ3BCLGdDQUFrQjtPQUwzQyxhQUFhLENBdUd6QjtJQUFELG9CQUFDO0NBQUEsQUF2R0QsSUF1R0M7QUF2R1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBUcmVlU3RydWN0dXJlIH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4ubW9kZWxcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvYW5pbWF0aW9uL2RzbFwiO1xuaW1wb3J0IHsgQ2FyZFZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtY2FyZHZpZXcnO1xucmVnaXN0ZXJFbGVtZW50KCdDYXJkVmlldycsICgpID0+IENhcmRWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2FwcC1hZG1pbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyZWUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RyZWUuY29tcG9uZW50LnNjc3MnXSxcbiAgICB9KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHRyZWUgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICAgICAsIHByaXZhdGUgYW5kcm9pZGFwcGxpY2F0aW9uOiBBbmRyb2lkQXBwbGljYXRpb24pIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyZWUgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJJdGVtSWRcIjogMSxcbiAgICAgICAgICAgICAgICBcIkl0ZW1OYW1lXCI6IFwiaXRlbTFcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1MaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwiSXRlbU5hbWVcIjogXCJpdGVtMlwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbUxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0xXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkl0ZW1JZFwiOiAzLFxuICAgICAgICAgICAgICAgIFwiSXRlbU5hbWVcIjogXCJpdGVtM1wiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbUxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0xXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTNcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGl0ZW1vYmopIHsgXG4gICAgICAgIHZhciBzdGFjayA9IGl0ZW1vYmoub2JqZWN0O1xuICAgICAgICB2YXIgY2hpZWxkID0gc3RhY2suZ2V0Q2hpbGRBdCgxKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjaGllbGQuY2xhc3NOYW1lID09IFwiY2xvc2VcIikge1xuICAgICAgICAgICAgc3RhY2sub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBjaGllbGQuY2xhc3NOYW1lID0gXCJvcGVuXCI7XG4gICAgICAgICAgICBjaGllbGQudHJhbnNsYXRlWSA9IC0zMDA7XG4gICAgICAgICAgICBzdGFjay5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIGNoaWVsZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY2FsZTogeyB4OiAxLCB5OjF9LCAgIFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTp7eDowLHk6MH0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VJblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICBjaGllbGQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2NhbGU6e3g6MSx5OjF9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY2hpZWxkLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuXG4iXX0=