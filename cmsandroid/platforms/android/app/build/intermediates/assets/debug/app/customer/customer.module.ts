import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { CustomerRoutes } from './customer.routes';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>CustomerRoutes)
  ],
  declarations: [
  CustomerComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CustomerModule { }
