import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { TreeStructure } from "~/admin/admin.model";


@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

    public tree = [];

    constructor(private routerExtensions: RouterExtensions
        , private androidapplication: AndroidApplication) {

    }

    ngOnInit(): void {
        this.tree = [
            {
                "ItemId": 1,
                "ItemName": "item1",
                "subItemList": [
                    {
                        "SubItemId": 1,
                        "SubItemName": "subitem1"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    }
                ]
            },
            {
                "ItemId": 2,
                "ItemName": "item2",
                "subItemList": [
                    {
                        "SubItemId": 1,
                        "SubItemName": "subitem1"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    }
                ]
            },
            {
                "ItemId": 3,
                "ItemName": "item3",
                "subItemList": [
                    {
                        "SubItemId": 1,
                        "SubItemName": "subitem1"
                    },
                    {
                        "SubItemId": 2,
                        "SubItemName": "subitem2"
                    },
                    {
                        "SubItemId": 3,
                        "SubItemName": "subitem3"
                    }
                ]
            }
        ]
    }

    onItemTap(itemobj) { 
        var stack = itemobj.object;
        var chield = stack.getChildAt(1);
        if (chield.className == "close") {
            chield.animate({
                scale:{x:0,y:0}
            }).then(function(){
                chield.className = "open";
                chield.animate({
                    scale:{x:1,y:1}
                });
            });

        }
        else {
             chield.animate({
                scale:{x:0,y:0}
            }).then(function(){
                chield.className = "close";
            });
        }

    }

}


