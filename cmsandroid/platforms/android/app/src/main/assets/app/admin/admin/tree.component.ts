import { Component, OnInit, ViewChild, ElementRef, style } from '@angular/core';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { AndroidApplication, AndroidActivityBackPressedEventData } from "tns-core-modules/application";
import { TreeStructure } from "~/admin/admin.model";
import {AnimationCurve} from "ui/enums";
import { trigger, state, transition, animate } from "@angular/core/src/animation/dsl";

@Component({
    moduleId: module.id,
    selector: 'app-admin',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
    animations: [
        trigger('shrinkOut', [
          state('in', style({})),
          transition('* => void', [
            style({ height: '*', opacity: 1 }),
            animate(1000, style({ height: 0, opacity: 0 }))
          ]),
          transition('void => *', [
            style({ height: 0, opacity: 0 }),
            animate(1000, style({ height: '*', opacity: 1 }))
          ])
        ])
      ]
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
        var stack = 