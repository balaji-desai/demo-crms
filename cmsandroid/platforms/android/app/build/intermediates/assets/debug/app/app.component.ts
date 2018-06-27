import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { AndroidApplication } from "tns-core-modules/application";
import { registerElement } from "nativescript-angular/element-registry";

@Component({
  selector: "my-app",
  template: `
  <Page class="page"
    <!-- Your UI components go here -->
    <page-router-outlet></page-router-outlet>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor(private page:Page,private androidapplication:AndroidApplication){
    page.actionBarHidden = true;
  }
  
}
