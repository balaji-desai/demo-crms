
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { FormGroup, FormBuilder, Validator, Validators, AbstractControl } from "@angular/forms";
import { OwnerVm } from "~/admin/admin.model";
import { AdminService } from "~/admin/adminservice/admin.service";
import { Observable } from "rxjs/Observable";
import * as application from "application";
import { AndroidApplication } from "application";
import { RouterExtensions, ModalDialogParams } from "nativescript-angular";
import { Page } from "tns-core-modules/ui/page/page";
import { Frame } from "tns-core-modules/ui/frame/frame";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("TextInputLayout", () => require("nativescript-textinputlayout").TextInputLayout);


@Component({
  moduleId: module.id,
  selector: 'app-create',
  templateUrl: './ownercreate.component.html',
  styleUrls: ['./admin.component.scss']
})
export class OwnerCreateComponent implements OnInit,AfterViewInit {
  Passwords: FormGroup;
  public enablePQ: boolean;
  public enableCD: boolean;
  @ViewChild("create")
  createContainer:ElementRef;
  ngOnInit() {
    this.enablePQ = true;
    this.enableCD = false;
    //propertychange
  }
  ngAfterViewInit(): void {
    //this.animate();
  }
  animate()
  {
    var create = <Frame>this.createContainer.nativeElement;
    create.transition = { name: "slide",
    duration: 380,
    curve: "easeIn"};
    // create.animate({
    //   translate:{x:0,y:100},
    //   opacity:1,
    //   duration:5000
    // });
  }
  serchtext: string;
  createowner: FormGroup;
  @Output("onshow")
  onshow = new EventEmitter();
  constructor(private pageRoute: PageRoute,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private routerExtensions: RouterExtensions,
    private params: ModalDialogParams
  ) {
    this.CreateForm();
  }


  CreateForm() {
    this.createowner = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      ZipCode: ['', Validators.required],
      ISDCode: ['91', [Validators.required, Validators.maxLength(3)]],
      MobileNo: ['', Validators.required],
      CrName: ['', Validators.required]
    });

    this.Passwords = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
    }, { validator: this.passwordConfirming })
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('Password').value !== c.get('ConfirmPassword').value) {
      return { invalid: true };
    }
  }

  Create(OwnerVm: OwnerVm, password) {
    OwnerVm.Password = password.Password;
    OwnerVm.UserName = password.UserName;
    var _me = this;
    this.adminService.Create(OwnerVm).then(
      function (result) {
      },
      function (error) {

      }
    );
  }
  next() {
    this.enableCD = true;
    this.enablePQ = false;
  }
  onClose() {
//     var create = <Frame>this.createContainer.nativeElement;
//     create.transition = {name: "flip",
//     curve: "linear",
//     duration:2000
// };
    this.params.closeCallback("");
    //this.params.closeCallback("");
  }

}

