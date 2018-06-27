import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular';

import { WorkerRoutes } from './worker.routes';
import { WorkerComponent } from './worker/worker.component';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forChild(<any>WorkerRoutes)
  ],
  declarations: [
  WorkerComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class WorkerModule { }
