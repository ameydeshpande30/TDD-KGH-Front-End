import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit, OnDestroy  {

  users$: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor() {
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      processing: true
    };
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
