import { Component, OnInit } from "@angular/core";
import * as application from "application";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular";
import { TokenProvider } from "~/Framework/token.provider";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  template: `<lable text="test"></lable>`
})
export class MidiatorComponent implements OnInit {
  ngOnInit(): void {
    if (this.tokenProvider.getToken() != "" && this.tokenProvider.getUserInfo() != null) {
      //redirect to admin
      if (this.tokenProvider.getUserInfo().UserTypeId == 2) {
        this.routerExtensions.navigate(["/admin"]
          , {
            transition: {
              name: "none",
              duration: 2000,
              curve: "linear"
            },
            clearHistory: true,
          }
        );

      }
    }
    else {
      this.routerExtensions.navigate(["/login"],
        //     {
        //       transition: {
        //           name: "none",
        //           duration: 2000,
        //           curve: "linear"
        //       },
        //       clearHistory: true 
        //   }
      );
    }
  }
  // Your TypeScript logic goes here
  constructor(private page: Page, private routerExtensions: RouterExtensions,
    private tokenProvider: TokenProvider, private androidapplication: AndroidApplication) {
    this.androidapplication.on("activityBackPressed", () => {
      console.log("back pressed");

    });

    this.backclick();
  }

  backclick() {
    application.android.on(AndroidApplication.activityBackPressedEvent, (data: AndroidActivityBackPressedEventData) => {
      // prevents default back button behavior
      console.log("back pressed admin");
      data.cancel = true;
      this.cnfbox();
    });

  }

  cnfbox() {
    dialogs.confirm({
      title: "CRMS",
      message: "Do you want to exit?",
      okButtonText: "Yes",
      cancelButtonText: "no"
    }).then(result => {
      // result argument is boolean
      console.log("Dialog result: " + result);
      if (result == true) {
        application.android.foregroundActivity.finish();
      }
    });
  }
}
