import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BillDataService {
  public cemail : string;
  public cid : number;
  public cname : string;
  public cphone : string;
  public caddr : string;
  public iid : string;
  public idate : string;
  public item : any [];
  public ta : number;

  setData (id,cname, cid, cemail, cphone, caddr, iid, idate, item, ta){
    this.cname = cname;
    this.cid = cid;
    this.cemail = cemail;
    this.cphone = cphone;
    this.caddr = caddr;
    this.iid = iid;
    this.idate = idate;
    this.item = item;
    this.ta = ta;
    this.myRoute.navigate(["/bill"]);
  }


  
  constructor(private myRoute:Router) { }
}
