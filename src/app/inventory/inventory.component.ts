import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public list: Rooms[];

  name = "Name"
  id = 0;
  size = 23;
  price = 20;
  normal(){
    this.name = "Name"
    this.id = this.list.length + 1;
    this.size = 23;
    this.price = 20;
  }
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  http 
  constructor(public http2:HttpClient) {
    // this.list.push(this.rasd);
   this.http = http2;
  }
  @ViewChild("asd") ne;
  ngOnInit() {
    this.http.get("http://localhost:3000/data").subscribe(result => {
     
      this.dtOptions = {
        pagingType: 'numbers',
        pageLength: 10,
        processing: true
      };
      
      this.dtTrigger.next();  
      this.list = result as Rooms[];
      this.id = this.list.length + 1;
      this.dtTrigger.unsubscribe();
  }, error => console.error(error));
  

   
  this.openModel();
  this.tp();
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  tp() {
     
     
    //  this.name_h.value = "text";
    //  this.name = "Amey2"
    this.ne.value = "asd";
    }

  

  openModel() {
  this.name = "Amey";

  }

  setData(name, id , price, size){
    console.log("call");
    
    this.name = name;
    this.id = id ;
    this.price = price;
    this.size = size;
  }
  del(id){
    console.log("delete",id);
    
  }

}
interface Rooms {
  id: number;
  price: number;
  size: number;
  name: string;
 }