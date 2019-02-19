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
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  http 
  constructor(public http2:HttpClient) {
    // this.list.push(this.rasd);
    console.log("hello");
    
   this.http = http2;
  }
  @ViewChild("asd") ne;
  ngOnInit() {
    this.http.get(GlobalVariable.BASE_API_URL + "inventory").subscribe(result => {
     
     
      this.dtOptions = {
        pagingType: 'numbers',
        pageLength: 10,
        processing: true
      };
      
    
      // this.dtTrigger.next();
      this.list = result as inventory[];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      
      this.id = this.list.length + 1;
     
      // this.dtTrigger.unsubscribe();
      console.log("done1");
      
  }, error => console.error(error));
  
  console.log("done2");
   
  this.openModel();
  this.tp();
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  tp() {

    this.ne.value = "asd";
    }

  

  openModel() {
  this.name = "Amey";

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
            //  this.setList()
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
