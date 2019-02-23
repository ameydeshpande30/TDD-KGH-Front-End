import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  @ViewChild('vcDataTableDirective', {read: ViewContainerRef}) DataTableDirective: DataTablesModule;
  http;
  list = []
  id=1000;
  cid=73;
  amount=3579.18;
  cin="21/07/2018";
  cout="13/02/2019";
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(http:HttpClient) { 
    this.http = http;
  }
  value
  listn
  @ViewChild("asd") ne;
  getData(cin, cout){
    console.log(cin, cout);
    this.http.get("http://localhost:3000/data").subscribe((result) =>{
      $('#datatable-basic').DataTable().destroy()
      
      // this.id = this.list.length + 1;
      // this.dtOptions = {
      //   pagingType: 'numbers',
      //   pageLength: 10,
      //   processing: true,
      //   responsive: true
      // };
      // this.dtTrigger.next();
      this.list = result as Statemnt[];
      
      // this.dtTrigger.unsubscribe();
      // this.tp();
      // this.openModel();
      // this.listn = result as Statemnt[];
      // console.log(this.listn[0]);
      
      // $('#datatable-basic').DataTable().clear()
      // console.log(result);
      // setTimeout(function () {
        
      //   $('#datatable-basic').DataTable()
          
      // }, 100);
     
      // $('#datatable-basic').DataTable({
      //   pagingType: 'numbers',
      //   pageLength: 10,
      //   processing: true,
      //   responsive : true,
      // });
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
     
    })
  }
  openModel() {
    this.value = "Amey";
  
    }
    tp() {
     
     
      //  this.name_h.value = "text";
      //  this.name = "Amey2"
      this.ne.value = "asd";
      }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      processing: true,
      responsive: true
    };
  }

}
interface Statemnt {
  id:number;
  cid:number;
  amount:number;
  cin:string;
  cout:string;
 }
