import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "~/app.routingmodule";
import { SharedModule } from "~/shared/shared.module";
import { AdminModule } from "~/admin/admin.module";
import { CustomerModule } from "~/customer/customer.module";
import { WorkerModule } from "~/worker/worker.module";
import { OwnerModule } from "~/owner/owner.module";
import { CrmsInterceptor } from "~/Framework/crms.interceptor";
import { TokenProvider } from "~/Framework/token.provider";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { EqualValidator } from "~/Framework/equalvalidator";
import { ShowErrorsComponent } from "~/Framework/showerror.component";
import { MidiatorComponent } from "~/Framework/midiator.component";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { AndroidApplication } from "tns-core-modules/application/application";
import { MediatorGaurd } from "~/Framework/midiator.gaurd";

@NgModule({
  declarations: [AppComponent,EqualValidator,ShowErrorsComponent,MidiatorComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    AppRoutingModule,
    WorkerModule,
    OwnerModule,
    CustomerModule,
    AdminModule,
    SharedModule,
    NativeScriptHttpClientModule,
    HttpClientModule,
  ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: CrmsInterceptor,
    multi: true
  },TokenProvider,
    MediatorGaurd,
    ModalDialogService,
    AndroidApplication],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
