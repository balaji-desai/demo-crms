"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var application_1 = require("tns-core-modules/application");
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
            chield.animate({
                scale: { x: 0, y: 0 }
            }).then(function () {
                chield.className = "open";
                chield.animate({
                    scale: { x: 1, y: 1 }
                });
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
            styleUrls: ['./tree.component.scss']
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions,
            application_1.AndroidApplication])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSw2REFBeUU7QUFFekUsNERBQXVHO0FBVXZHO0lBSUksdUJBQW9CLGdCQUFrQyxFQUN4QyxrQkFBc0M7UUFEaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN4Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBSDdDLFNBQUksR0FBRyxFQUFFLENBQUM7SUFLakIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1I7Z0JBQ0ksUUFBUSxFQUFFLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLGFBQWEsRUFBRTtvQkFDWDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxVQUFVLEVBQUUsT0FBTztnQkFDbkIsYUFBYSxFQUFFO29CQUNYO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO29CQUNEO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO2lCQUNKO2FBQ0o7WUFDRDtnQkFDSSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxVQUFVLEVBQUUsT0FBTztnQkFDbkIsYUFBYSxFQUFFO29CQUNYO3dCQUNJLFdBQVcsRUFBRSxDQUFDO3dCQUNkLGFBQWEsRUFBRSxVQUFVO3FCQUM1QjtvQkFDRDt3QkFDSSxXQUFXLEVBQUUsQ0FBQzt3QkFDZCxhQUFhLEVBQUUsVUFBVTtxQkFDNUI7b0JBQ0Q7d0JBQ0ksV0FBVyxFQUFFLENBQUM7d0JBQ2QsYUFBYSxFQUFFLFVBQVU7cUJBQzVCO2lCQUNKO2FBQ0o7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxPQUFPO1FBQ2IsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDO29CQUNYLEtBQUssRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQztpQkFDbEIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUNaLEtBQUssRUFBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQzthQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUVMLENBQUM7SUFsR1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FLd0MsdUNBQWdCO1lBQ3BCLGdDQUFrQjtPQUwzQyxhQUFhLENBb0d6QjtJQUFELG9CQUFDO0NBQUEsQUFwR0QsSUFvR0M7QUFwR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG5pbXBvcnQgeyBCb3R0b21CYXIsIEJvdHRvbUJhckl0ZW0sIFRJVExFX1NUQVRFLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgTm90aWZpY2F0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJvdHRvbWJhcic7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24sIEFuZHJvaWRBY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFRyZWVTdHJ1Y3R1cmUgfSBmcm9tIFwifi9hZG1pbi9hZG1pbi5tb2RlbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhcHAtYWRtaW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90cmVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdHJlZSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG4gICAgICAgICwgcHJpdmF0ZSBhbmRyb2lkYXBwbGljYXRpb246IEFuZHJvaWRBcHBsaWNhdGlvbikge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudHJlZSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIkl0ZW1JZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiSXRlbU5hbWVcIjogXCJpdGVtMVwiLFxuICAgICAgICAgICAgICAgIFwic3ViSXRlbUxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0xXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgXCJJdGVtTmFtZVwiOiBcIml0ZW0yXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTFcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiSXRlbUlkXCI6IDMsXG4gICAgICAgICAgICAgICAgXCJJdGVtTmFtZVwiOiBcIml0ZW0zXCIsXG4gICAgICAgICAgICAgICAgXCJzdWJJdGVtTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbUlkXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1OYW1lXCI6IFwic3ViaXRlbTFcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN1Ykl0ZW1JZFwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtTmFtZVwiOiBcInN1Yml0ZW0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWJJdGVtSWRcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViSXRlbU5hbWVcIjogXCJzdWJpdGVtM1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoaXRlbW9iaikgeyBcbiAgICAgICAgdmFyIHN0YWNrID0gaXRlbW9iai5vYmplY3Q7XG4gICAgICAgIHZhciBjaGllbGQgPSBzdGFjay5nZXRDaGlsZEF0KDEpO1xuICAgICAgICBpZiAoY2hpZWxkLmNsYXNzTmFtZSA9PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgIGNoaWVsZC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY2FsZTp7eDowLHk6MH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBjaGllbGQuY2xhc3NOYW1lID0gXCJvcGVuXCI7XG4gICAgICAgICAgICAgICAgY2hpZWxkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTp7eDoxLHk6MX1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgY2hpZWxkLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjYWxlOnt4OjAseTowfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNoaWVsZC5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cblxuIl19