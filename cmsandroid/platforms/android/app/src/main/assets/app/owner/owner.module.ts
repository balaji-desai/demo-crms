import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { OwnerRoutes } from './owner.routes';
import { OwnerComponent } from './owner/owner.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>OwnerRoutes)
  ],
  declarations: [
  OwnerComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class OwnerModule { }
