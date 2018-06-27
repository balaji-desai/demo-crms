import { Routes } from '@angular/router';
// app
import { SharedComponent } from './shared/shared.component';
import { AdminComponent } from "~/admin/admin/admin.component";
import { OwnerListComponent } from "~/admin/admin/ownerlist.component";
import { HomeComponent } from "~/admin/admin/home.component";

export const SharedRoutes: Routes = [
    {
        path: 'admin' ,component:AdminComponent
    }
];
