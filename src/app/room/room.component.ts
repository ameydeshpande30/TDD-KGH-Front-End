import { Component, OnDestroy, OnInit, ViewChild, NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../global';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy  {
  
  public list: Rooms[];
  update = 0
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
  getData(id,name,price,size): void {
    let data = {
      "id" : id,
      "name" : name,
      "price" : price,
      "size" : size,
      "update" : this.update
    };
    this.http.post(GlobalVariable.BASE_API_URL + "room/addUpdate", data, ).toPromise()
           .then(
            //  this.setList()
           )
           .catch();
    
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