import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobileplan',
  templateUrl: './mobileplan.component.html',
  styleUrls: ['./mobileplan.component.css']
})
export class MobileplanComponent implements OnInit {

  mainheading:string;
  mobilelogo:string;
  constructor() {
    this.mainheading="Welcome to Mobile world";
    this.mobilelogo='assets/images/mobile.png';
    

   }

  ngOnInit() {
  }

}
