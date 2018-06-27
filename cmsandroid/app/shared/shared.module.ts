import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { SharedRoutes } from './shared.routes';
import { SharedComponent } from './shared/shared.component';
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "~/shared/login.service";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>SharedRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    SharedComponent
  ],
  providers: [LoginService],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule { }
