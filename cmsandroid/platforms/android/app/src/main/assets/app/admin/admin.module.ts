import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { MaskedTextFieldModule } from "nativescript-masked-text-field/angular";
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './admin/admin.component';
import { NativescriptBottomNavigationModule } from "nativescript-bottom-navigation/angular";
import { OwnerCreateComponent } from "~/admin/admin/ownecreate.component";
import { OwnerListComponent } from "~/admin/admin/ownerlist.component";
import { HomeComponent } from "~/admin/admin/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DetailComponent } from "~/admin/admin/detail.component";
import { AdminService } from "~/admin/adminservice/admin.service";
import { SettingComponent } from "~/admin/admin/setting.component";
import { TreeComponent } from "~/admin/admin/tree.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>AdminRoutes),
    NativescriptBottomNavigationModule,
    ReactiveFormsModule,
    MaskedTextFieldModule
  ],
  declarations: [
    AdminComponent,
    OwnerListComponent,
    OwnerCreateComponent,
    HomeComponent,
    DetailComponent,
    SettingComponent,
    TreeComponent
  ],
  providers: [AdminService, ModalDialogService],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AdminModule { }
