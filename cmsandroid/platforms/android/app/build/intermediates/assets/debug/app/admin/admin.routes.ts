import { Routes } from '@angular/router';
// app
import { AdminComponent } from './admin/admin.component';
import { OwnerListComponent } from "~/admin/admin/ownerlist.component";
import { OwnerCreateComponent } from "~/admin/admin/ownecreate.component";
import { HomeComponent } from "~/admin/admin/home.component";
import { DetailComponent } from "~/admin/admin/detail.component";
import { SharedComponent } from "~/shared/shared/shared.component";
import { SettingComponent } from "~/admin/admin/setting.component";
import { TreeComponent } from "~/admin/admin/tree.component";

export const AdminRoutes: Routes = [
    {
        path: 'admin', component: AdminComponent,
        children: [
            // {
            //     path: '',
            //     component: HomeComponent
            // },
            {
                path: 'list',
                component: OwnerListComponent,
                children: [
                    {
                        path: 'detail/:id',
                        component: DetailComponent
                    },
                    {
                        path: 'create',
                        component: OwnerCreateComponent
                    }
                ]
            },
            {
                path:"setting",
                component:SettingComponent
            }
        ]
    },
    {
        path: 'login',
        component: SharedComponent
    },
    {
        path: 'tree',
        component: TreeComponent
    }
];
