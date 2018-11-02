import { Component, OnInit } from '@angular/core';
import { ShowhistoryComponent } from '../showhistory/showhistory.component';
import { Transaction } from '../transaction';
import { MobileadivorsComponent } from '../mobileadivors/mobileadivors.component';
import { MobileAPI } from '../mobile-api';

@Component({
  selector: 'app-gridhistory',
  templateUrl: './gridhistory.component.html',
  styleUrls: ['./gridhistory.component.css']
})
export class GridhistoryComponent implements OnInit {
  Headers:Object[];
  Values:Object[];

  constructor(private service:MobileAPI) { 
    this.service.findallhistory().subscribe(data=>this.Headers=data,err=>console.log(err));
    this.service.findallhistory().subscribe(data=>this.Values=data,err=>console.log(err));

    }
  ngOnInit() {
    Object.keys;
    Object.values;

  }
  
}
