
import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { OwnerVm } from "~/admin/admin.model";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { AdminService } from "~/admin/adminservice/admin.service";
import { OwnerCreateComponent } from "~/admin/admin/ownecreate.component";
import { RouterExtensions } from "nativescript-angular";
import { DetailComponent } from "~/admin/admin/detail.component";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@Component({
  moduleId: module.id,
  selector: 'app-list',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./admin.component.scss']
})
export class OwnerListComponent implements OnInit,AfterViewInit {
  public ownerId: number;
  public showadd:boolean;
  public isLoading:boolean;
  @ViewChild("bottom")container: ElementRef;
  @ViewChild("search")searchContainer: ElementRef;
  @ViewChild("add")addContainer: ElementRef;

  ngAfterViewInit(): void {
    this.applyanimation();
  }

  applyanimation()
  {
    let searchbar = <SearchBar>this.searchContainer.nativeElement;
    
        // this.showadd = false;
        // searchbar.animate({
        //   translate:{x:0,y:0},
        //   duration:500
        // }).then(function(){
        //   searchbar.animate({
        //     scale:{x:0,y:0},
        //     duration:500
        //   });
        // });
  }
  constructor(private routerextension: RouterExtensions,
    private adminService: AdminService,
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef,
  ) {

  }
  public enableList: boolean;
  public enableCreat: boolean;
  public enableDetail: boolean;
  public searchPhrase: string;
  public Owner: Array<OwnerVm>;
  public onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    alert("You are searching for " + searchBar.text);
  }

  public onTextChanged(args) {
    let searchBar = <SearchBar>args.object;
    console.log("SearchBar text changed! New value: " + searchBar.text);
    // Observable.of(this.europianCountries).switchMap((country)=>
    // country).filter((country) => country == searchBar.text).subscribe((value)=>
    // {
    //   this.Country.push(value);
    // });
  }

  ngOnInit() {
    console.log("show");
    this.enableList = true;
    this.enableCreat = false;
    this.enableDetail = false;
    this.container;
    this.isLoading = true;
    this.getall();
  }
  getall() {
    var _me = this;
    this.adminService.GetAll().then(
      function (result) {
        _me.isLoading = false;
        _me.Owner = result;
      },
      function (error) {
        _me.isLoading = false;
      }
    )
  }

  cancelanim()
  {
    let searchbar = <SearchBar>this.searchContainer.nativeElement;
    // console.log("onblur");
    //     this.showadd = true;
    //     searchbar.animate({
    //       translate:{x:0,y:10},
    //       scale:{x:1,y:1},
    //       duration:500
    //     });
  }
  create(serchtext = '') {
    this.isLoading = true;
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: {},
      fullscreen: true
    };
    var _me = this;
    this.modal.showModal(OwnerCreateComponent, options)
      .then((result: string) => {
        _me.getall();
        console.log(result);
      });
  }

  onItemTap(event) {
    var list = <ListView>event.object;
    var own = this.Owner[event.index];
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: { ownerId: own.CrmsOwnerId },
      fullscreen: true
    };

    var _me = this;

        this.modal.showModal(DetailComponent, options)
          .then((result: string) => {
            _me.isLoading = false;
            console.log(result);
          });
        console.log(event);
  }

  showview() {
    this.enableList = true;
    this.enableCreat = false;
    this.enableDetail = false;
    this.getall();

  }
  onSwipe(args: SwipeGestureEventData)
  {
    this.cancelanim();
    let search = <SearchBar>this.searchContainer.nativeElement;
    search.dismissSoftInput();
    //bottom.set("showDetails", false);
    console.log("Swipe Direction: " + args.direction);    
  }

}

