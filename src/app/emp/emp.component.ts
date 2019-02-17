import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalVariable } from '../global';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  public list: Rooms[];
  update = 0
  name = "Name"
  id = 0;
  size = 23;
  price = 20;
  normal(){
    this.name = "Name"
    this.update = 0;
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
    this.http.get(GlobalVariable.BASE_API_URL + "room/getList").subscribe(result => {
     
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
            window.location.reload()
           )
           .catch();
    
  }

  setData(name, id , price, size){
    console.log("call");
    this.update = 1;
    this.name = name;
    this.id = id ;
    this.price = price;
    this.size = size;
  }
  del(id){
    this.http.get(GlobalVariable.BASE_API_URL + "room/delRoom/" + id).subscribe(result => {
    console.log(result);
    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}
}

interface Rooms {
  id: number;
  price: number;
  size: number;
  name: string;
 }
