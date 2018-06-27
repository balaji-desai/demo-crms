
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular";

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./admin.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() { 
  }
  constructor(private router:RouterExtensions){}

}

