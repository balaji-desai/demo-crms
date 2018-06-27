import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import { registerElement, RouterExtensions } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { ActivatedRoute } from "@angular/router";
import { OwnerVm } from "~/admin/admin.model";
import { AdminService } from "~/admin/adminservice/admin.service";
import { Page } from "tns-core-modules/ui/page/page";
import { Frame } from "tns-core-modules/ui/frame/frame";

@Component({
  moduleId: module.id,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./admin.component.scss']
})
export class DetailComponent implements OnInit,AfterViewInit {
  ownerId: number;
  @ViewChild("detail")
  createContainer:ElementRef;
  public owner: OwnerVm;
  constructor(private router: ActivatedRoute, private adminService: AdminService,
    private _page: Page,
    private params: ModalDialogParams
  ) {
    // this.router.params.forEach((key)=>{
    //   this.ownerId = +(key["id"]);
    // });
    this.ownerId = params.context.ownerId;
    console.log(this.ownerId);
  }
  ngAfterViewInit(): void {
    this.animate();
  }
  animate()
  {
    var create = <Frame>this.createContainer.nativeElement;
    create.transition = {name: "flip",
    duration: 2000,
    curve: "linear"};
  }
  ngOnInit() {
    this.GetOwner();
  }
  public GetOwner() {
    var _me = this;
    this.adminService.GetById(this.ownerId).then(
      function (result) {
        _me.owner = result;
      },
      function (error) {

      }
    );
  }
  onClose() {
    //this.params.closeCallback("");
    this.params.closeCallback("");
  }
}

