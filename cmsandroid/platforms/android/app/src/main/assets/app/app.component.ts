import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { AndroidApplication } from "tns-core-modules/application";
import { registerElement } from "nativescript-angular/element-registry";

@Component({
  selector: "my-app",
  template: `
  <Page class="page">
  <ActionBar
  backgroundColor="rgb(42, 25, 59)"
  title="Crms"></ActionBar>
    <!-- Your UI components go here -->
    <page-router-outlet></page-router-outlet>
    </Page>
  `
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor(private page:Page,private androidapplication:AndroidApplication){
    page.actionBarHidden = true;
  }
  
}
