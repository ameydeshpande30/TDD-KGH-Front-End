import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { longStackSupport } from 'q';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy  {
  
  public list: Rooms[];

 
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(public http:HttpClient) {
    // this.list.push(this.rasd);
    http.get("http://localhost:3000/data").subscribe(result => {
     
      this.dtOptions = {
        pagingType: 'numbers',
        pageLength: 10,
        processing: true
      };
      
      this.dtTrigger.next();  
      this.list = result as Rooms[];
      
  }, error => console.error(error));
  }

  ngOnInit() {
  
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      processing: true
    };
  }
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}

interface Rooms {
  id: number;
  price: number;
  size: number;
  name: string;
 }