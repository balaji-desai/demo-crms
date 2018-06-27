"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var application_1 = require("tns-core-modules/application");
var enums_1 = require("ui/enums");
var dsl_1 = require("@angular/core/src/animation/dsl");
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
            chield.className = "open";
            chield.animate({
                translate: { x: 0, y: 100 },
                duration: 1000,
                curve: enums_1.AnimationCurve.easeIn
            });
        }
        else {
            chield.animate({
                scale: { x: 0, y: 0 }
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
            animations: [
                dsl_1.trigger('shrinkOut', [
                    dsl_1.state('in', core_1.style({})),
                    dsl_1.transition('* => void', [
                        core_1.style({ height: '*', opacity: 1 }),
                        dsl_1.animate(1000, core_1.style({ height: 0, opacity: 0 }))
                    ]),
                    dsl_1.transition('void => *', [
                        core_1.style({ height: 0, opacity: 0 }),
                        dsl_1.animate(1000, core_1.style({ height: '*', opacity: 1 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            application_1.AndroidApplication])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRiw2REFBeUU7QUFFekUsNERBQXVHO0FBRXZHLGtDQUF3QztBQUN4Qyx1REFBc0Y7QUFxQnRGO0lBSUksdUJBQW9CLGdCQUFrQyxFQUN4QyxrQkFBc0M7UUFEaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN4Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSDdDLFNBQUksR0FBRyxFQUFFLENBQUM7SUFLakIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1I7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLGFBQWEsRUFBRTtvQkFDWDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxVQUFVLEVBQUUsT0FBTztnQkFDbkIsYUFBYSxFQUFFO29CQUNYO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxVQUFVLEVBQUUsT0FBTztnQkFDbkIsYUFBYSxFQUFFO29CQUNYO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO2lCQUNKO2FBQ0o7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxPQUFPO1FBQ2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQztnQkFDMUIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLHNCQUFjLENBQUMsTUFBTTthQUMvQixDQUFDLENBQUM7UUFFUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNaLEtBQUssRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUVMLENBQUM7SUFoR1EsYUFBYTtRQW5CekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFVBQVUsRUFBRTtnQkFDUixhQUFPLENBQUMsV0FBVyxFQUFFO29CQUNuQixXQUFLLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEIsZ0JBQVUsQ0FBQyxXQUFXLEVBQUU7d0JBQ3RCLFlBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO3dCQUNsQyxhQUFPLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2hELENBQUM7b0JBQ0YsZ0JBQVUsQ0FBQyxXQUFXLEVBQUU7d0JBQ3RCLFlBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO3dCQUNoQyxhQUFPLENBQUMsSUFBSSxFQUFFLFlBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ2xELENBQUM7aUJBQ0gsQ0FBQzthQUNIO1NBQ04sQ0FBQzt5Q0FLd0MsdUNBQWdCO1lBQ3BCLGdDQUFrQjtPQUwzQyxhQUFhLENBa0d6QjtJQUFELG9CQUFDO0NBQUEsQUFsR0QsSUFrR0M7QUFsR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50LCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgQm90dG9tQmFyLCBCb3R0b21CYXJJdGVtLCBUSVRMRV9TVEFURSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEsIE5vdGlmaWNhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ib3R0b21iYXInO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uLCBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBUcmVlU3RydWN0dXJlIH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4ubW9kZWxcIjtcbmltcG9ydCB7QW5pbWF0aW9uQ3VydmV9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvYW5pbWF0aW9uL2RzbFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWFkbWluJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdHJlZS5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtcbiAgICAgICAgdHJpZ2dlcignc2hyaW5rT3V0JywgW1xuICAgICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHt9KSksXG4gICAgICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3BhY2l0eTogMSB9KSxcbiAgICAgICAgICAgIGFuaW1hdGUoMTAwMCwgc3R5bGUoeyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAgfSkpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICAgICAgc3R5bGUoeyBoZWlnaHQ6IDAsIG9wYWNpdHk6IDAgfSksXG4gICAgICAgICAgICBhbmltYXRlKDEwMDAsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIG9wYWNpdHk6IDEgfSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdHJlZSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgICAgICwgcHJpdmF0ZSBhbmRyb2lkYXBwbGljYXRpb246IEFuZHJvaWRBcHBsaWNhdGlvbikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJlZSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkl0ZW1JZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiSXRlbU5hbWVcIjogXCJpdGVtMVwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbUxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0xXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgXCJJdGVtTmFtZVwiOiBcIml0ZW0yXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTFcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic