"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app
var admin_component_1 = require("./admin/admin.component");
var ownerlist_component_1 = require("~/admin/admin/ownerlist.component");
var ownecreate_component_1 = require("~/admin/admin/ownecreate.component");
var detail_component_1 = require("~/admin/admin/detail.component");
var shared_component_1 = require("~/shared/shared/shared.component");
var setting_component_1 = require("~/admin/admin/setting.component");
var tree_component_1 = require("~/admin/admin/tree.component");
exports.AdminRoutes = [
    {
        path: 'admin', component: admin_component_1.AdminComponent,
        children: [
            // {
            //     path: '',
            //     component: HomeComponent
            // },
            {
                path: 'list',
                component: ownerlist_component_1.OwnerListComponent,
                children: [
                    {
                        path: 'detail/:id',
                        component: detail_component_1.DetailComponent
                    },
                    {
                        path: 'create',
                        component: ownecreate_component_1.OwnerCreateComponent
                    }
                ]
            },
            {
                path: "setting",
                component: setting_component_1.SettingComponent
            }
        ]
    },
    {
        path: 'login',
        component: shared_component_1.SharedComponent
    },
    {
        path: 'tree',
        component: tree_component_1.TreeComponent
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRtaW4ucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTTtBQUNOLDJEQUF5RDtBQUN6RCx5RUFBdUU7QUFDdkUsMkVBQTBFO0FBRTFFLG1FQUFpRTtBQUNqRSxxRUFBbUU7QUFDbkUscUVBQW1FO0FBQ25FLCtEQUE2RDtBQUVoRCxRQUFBLFdBQVcsR0FBVztJQUMvQjtRQUNJLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjO1FBQ3hDLFFBQVEsRUFBRTtZQUNOLElBQUk7WUFDSixnQkFBZ0I7WUFDaEIsK0JBQStCO1lBQy9CLEtBQUs7WUFDTDtnQkFDSSxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUsd0NBQWtCO2dCQUM3QixRQUFRLEVBQUU7b0JBQ047d0JBQ0ksSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLFNBQVMsRUFBRSxrQ0FBZTtxQkFDN0I7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFFBQVE7d0JBQ2QsU0FBUyxFQUFFLDJDQUFvQjtxQkFDbEM7aUJBQ0o7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBQyxTQUFTO2dCQUNkLFNBQVMsRUFBQyxvQ0FBZ0I7YUFDN0I7U0FDSjtLQUNKO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxrQ0FBZTtLQUM3QjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsOEJBQWE7S0FDM0I7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGFwcFxuaW1wb3J0IHsgQWRtaW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluL2FkbWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPd25lckxpc3RDb21wb25lbnQgfSBmcm9tIFwifi9hZG1pbi9hZG1pbi9vd25lcmxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPd25lckNyZWF0ZUNvbXBvbmVudCB9IGZyb20gXCJ+L2FkbWluL2FkbWluL293bmVjcmVhdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2FkbWluL2FkbWluL2RldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNoYXJlZENvbXBvbmVudCB9IGZyb20gXCJ+L3NoYXJlZC9zaGFyZWQvc2hhcmVkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2V0dGluZ0NvbXBvbmVudCB9IGZyb20gXCJ+L2FkbWluL2FkbWluL3NldHRpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSBcIn4vYWRtaW4vYWRtaW4vdHJlZS5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IEFkbWluUm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge1xuICAgICAgICBwYXRoOiAnYWRtaW4nLCBjb21wb25lbnQ6IEFkbWluQ29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgLy8gICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnbGlzdCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBPd25lckxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2RldGFpbC86aWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBEZXRhaWxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2NyZWF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IE93bmVyQ3JlYXRlQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6XCJzZXR0aW5nXCIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OlNldHRpbmdDb21wb25lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICBjb21wb25lbnQ6IFNoYXJlZENvbXBvbmVudFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAndHJlZScsXG4gICAgICAgIGNvbXBvbmVudDogVHJlZUNvbXBvbmVudFxuICAgIH1cbl07XG4iXX0=