import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../global';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public list: inventory[];
  update = 0
  name = "Name"
  id = 0;
  id1 = 0;
  qty = 2;
  cp = 20;
  sp = 30;
  cid = 10;
  availability = true;
  normal(){
    this.name = "Name"
    this.update = 0;
    this.id = this.list.length + 1;
    this.qty = 2;
    this.cp = 20;
    this.sp = 30;
    this.cid = 10;
    this.availability = true;
  }
  clist : any[] = [];
  users$: any[] = [];
 
  http 
  constructor(public http2:HttpClient) {
    
   this.http = http2;
  }

  ngOnInit() {
 
    this.http.get(GlobalVariable.BASE_API_URL + "category").subscribe(result => {
      this.clist = result;
    });
    this.http.get(GlobalVariable.BASE_API_URL + "inventory").subscribe(result => {
      $('#datatable-basic').DataTable().destroy()
      this.list = result as inventory[];
      this.id = this.list.length + 1;
      setTimeout(function() {
        $(function() {
          $("#datatable-basic").DataTable({
            pagingType: "numbers",
            pageLength: 10,
            processing: true,
            responsive: true
          });
        });
      }, 100);
      
  }, error => console.error(error));
  
  }

  getData(id, name, qty, cp, sp, cid, availability): void {
    
    let data = {
      "id": id,
       "name":name, 
       "qty":qty, 
       "cp":cp, 
       "sp":sp, 
       "cid":cid, 
       "availability":availability,
      "update" : this.update
    };
    console.log(data);
    
    this.http.post(GlobalVariable.BASE_API_URL + "inventory/add", data, ).toPromise()
           .then(
            window.location.reload()
           )
           .catch(
             console.log("err")
             
           );
    
  }

  setData(id, name, qty, cp, sp, cid, availability){
    console.log("call");
    this.update = 1;
    this.id = id ; 
    this.name = name;
    this.qty = qty;
    this.cp = cp;
    this.sp = sp;
    this.cid = cid;
    this.availability = availability;
  }
  del(id){
    this.http.delete(GlobalVariable.BASE_API_URL + "inventory/del/" + id).subscribe(result => {
    console.log(result);
    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}
}

interface inventory {
  id:number;
  name:string;
  qty:number;
  cp:number;
  sp:number;
  cid:number;
  availability:number;
 }
