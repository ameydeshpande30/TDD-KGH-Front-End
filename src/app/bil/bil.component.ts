import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillDataService } from '../bill-data.service';

@Component({
  selector: 'app-bil',
  templateUrl: './bil.component.html',
  styleUrls: ['./bil.component.css']
})
export class BilComponent implements OnInit {
  public id: string;
  public cname : string;
  public cid : number;
  public cphone : string;
  private cemail : string;
  public caddr : string;
  public iid : string;
  public idate : string;
  public item : any [];
  public ta : number;

  constructor(private bd:BillDataService) {
    this.cname = bd.cname;
    this.cid = bd.cid;
    this.cemail = bd.cemail;
    this.caddr = bd.caddr;
    this.cphone = bd.cphone;
    this.iid = bd.iid;
    this.idate = bd.idate;
    this.item = bd.item;
    this.ta = bd.ta;

  }

  ngOnInit() {
   
    
  }

}
