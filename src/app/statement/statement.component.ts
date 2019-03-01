import { DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalVariable } from '../global';

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
    this.http.get(GlobalVariable.BASE_API_URL + "bill/" + cin +  "/" + cout).subscribe((result) =>{
      $('#datatable-basic').DataTable().destroy()
      
     
      this.list = result as Statemnt[];
   
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
  CId:number;
  RId:number;
  check_in_date:string;
  check_out_date:string;
 }
