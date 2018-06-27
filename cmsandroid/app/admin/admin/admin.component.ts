import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import * as application from "application";
import * as dialogs from "ui/dialogs";

registerElement('BottomBar', () => BottomBar);

@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;
    public selectedindex: number;
    public enableHome: boolean;

    constructor(private routerExtensions: RouterExtensions
        , private androidapplication: AndroidApplication) {
        this.backclick();
    }
    changeIndex(event) {
        console.log("event :" + event);
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
            if (result == false) {
                //this.routerExtensions.navigate(["admin"]);
                this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
            }
        });
    }

    ngOnInit() {
        this.selectedindex = 0;
        this.enableHome = true;
        console.log("home");
    }

    public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Home", "ic_home", "transparent", new Notification("aqua", "white", "1")),
        new BottomBarItem(1, "Owner List", "ic_home", "transparent", new Notification("aqua", "blue", "1")),
        new BottomBarItem(2, "Settings", "ic_home", "transparent", new Notification("aqua", "yellow", "1")),
        //new BottomBarItem(3, "Message", "ic_home", "green", new Notification("green", "red", "1"))
    ];

    tabLoaded(event) {
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.inactiveColor = "rgb(42, 25, 59)";
        this.accentColor = "aqua";
    }

    tabSelected(args: SelectedIndexChangedEventData) {
        // only triggered when a different tab is tapped
        this.selectedindex = args.newIndex;
        if (args.newIndex == 0) {
            this.enableHome = true;
            this.routerExtensions.navigate(["admin"],{
                transition: {
                    name: "slide",
                    duration: 2000,
                    curve: "easeIn"
                  }
            });
        } else if (args.newIndex == 1) {
            this.enableHome = false;
            this.routerExtensions.navigate(["admin/list"],{
                transition: {
                    name: "slide",
                    duration: 2000,
                    curve: "easeIn"
                  }
            });
        } else if (args.newIndex == 2) {
            this.enableHome = false;
            this.routerExtensions.navigate(["admin/setting"],{
                transition: {
                    name: "slide",
                    duration: 2000,
                    curve: "easeIn"
                  }
            });
        }
        console.log(args.newIndex);
    }

    onNavBtnTap() {
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
        this.routerExtensions.back();
    }
}


