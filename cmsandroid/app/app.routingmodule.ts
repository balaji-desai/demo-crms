import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedComponent } from "~/shared/shared/shared.component";
import { MidiatorComponent } from "~/Framework/midiator.component";
import { MediatorGaurd } from "~/Framework/midiator.gaurd";

const routes: Routes = [
    { path: "", redirectTo: "crms", pathMatch: "full" },
    { path: "crms", children:[{
      path:"",
      component:SharedComponent,
      canActivate:[MediatorGaurd]
    }] 
}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }