import { Component, OnInit, Input } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { registerElement, RouterExtensions } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { ActivatedRoute } from "@angular/router";
import { OwnerVm } from "~/admin/admin.model";
import { AdminService } from "~/admin/adminservice/admin.service";
import { Page } from "tns-core-modules/ui/page/page";
import { TokenProvider } from "~/Framework/token.provider";

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: './setting.component.html',
  styleUrls: ['./admin.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private tokenprovider: TokenProvider,
    private routerExtension: RouterExtensions) {

  }
  ngOnInit() {

  }
  logout() {
    this.tokenprovider.setToken("");
    this.tokenprovider.setUserInfo(null);
    this.routerExtension.navigate(["login"], {
      transition: {
        name: "none",
        duration: 2000,
        curve: "linear"
      },
      clearHistory: true
    });
  }

  tree(){
    this.routerExtension.navigate(["tree"], {
      transition: {
        name: "none",
        duration: 2000,
        curve: "linear"
      },
      clearHistory: false
    });
  }
}

