"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var application_1 = require("tns-core-modules/application");
var enums_1 = require("ui/enums");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRiw2REFBeUU7QUFFekUsNERBQXVHO0FBRXZHLGtDQUF3QztBQVN4QztJQUlJLHVCQUFvQixnQkFBa0MsRUFDeEMsa0JBQXNDO1FBRGhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUg3QyxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBS2pCLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRztZQUNSO2dCQUNJLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixhQUFhLEVBQUU7b0JBQ1g7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLGFBQWEsRUFBRTtvQkFDWDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLGFBQWEsRUFBRTtvQkFDWDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtpQkFDSjthQUNKO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsT0FBTztRQUNiLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDMUIsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN6QixLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsRUFBQztnQkFDbkIsU0FBUyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO2dCQUNuQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUUsc0JBQWMsQ0FBQyxNQUFNO2FBQy9CLENBQUMsQ0FBQztRQUVQLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ1osS0FBSyxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDO2FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0osTUFBTSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBRUwsQ0FBQztJQXJHUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNuQyxDQUFDO3lDQUtvQyx1Q0FBZ0I7WUFDcEIsZ0NBQWtCO09BTDNDLGFBQWEsQ0F1R3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZHRCxJQXVHQztBQXZHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgTm90aWZpY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFRyZWVTdHJ1Y3R1cmUgfSBmcm9tIFwifi9hZG1pbi9hZG1pbi5tb2RlbFwiO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInVpL2VudW1zXCI7XG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy9hbmltYXRpb24vZHNsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtYWRtaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgfSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyB0cmVlID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICAgICAgLCBwcml2YXRlIGFuZHJvaWRhcHBsaWNhdGlvbjogQW5kcm9pZEFwcGxpY2F0aW9uKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50cmVlID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiSXRlbUlkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJJdGVtTmFtZVwiOiBcIml0ZW0xXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTFcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICBcIkl0ZW1OYW1lXCI6IFwiaXRlbTJcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1MaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJJdGVtSWRcIjogMyxcbiAgICAgICAgICAgICAgICBcIkl0ZW1OYW1lXCI6IFwiaXRlbTNcIixcbiAgICAgICAgICAgICAgICBcInN1Ykl0ZW1MaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0zXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIG9uSXRlbVRhcChpdGVtb2JqKSB7IFxuICAgICAgICB2YXIgc3RhY2sgPSBpdGVtb2JqLm9iamVjdDtcbiAgICAgICAgdmFyIGNoaWVsZCA9IHN0YWNrLmdldENoaWxkQXQoMSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2hpZWxkLmNsYXNzTmFtZSA9PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgIHN0YWNrLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgY2hpZWxkLmNsYXNzTmFtZSA9IFwib3BlblwiO1xuICAgICAgICAgICAgY2hpZWxkLnRyYW5zbGF0ZVkgPSAtMzAwO1xuICAgICAgICAgICAgc3RhY2sub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBjaGllbGQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2NhbGU6IHsgeDogMSwgeToxfSwgICBcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6e3g6MCx5OjB9LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlSW5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgY2hpZWxkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjYWxlOnt4OjEseToxfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNoaWVsZC5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cblxuIl19