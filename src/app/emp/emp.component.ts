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
  public list: any[];
  update = 0
  id = 0
  name = 0
  contactNumber = ""
  username = ""
  password = "" 
  sal = "2000"
  doj = "20/01/1998"
  rid = 1
  did = 1
  normal(){
   this.id = 0
   this.name = 0
   this.contactNumber = ""
   this.username = ""
   this.password = "" 
   this.sal = "2000"
   this.doj = "20/01/1998"
   this.rid = 1
   this.did = 1
  }
 
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  http 
  constructor(public http2:HttpClient) {
    // this.list.push(this.rasd);
   this.http = http2;
  }
  @ViewChild("asd") ne;
  ngOnInit() {
    this.http.get(GlobalVariable.BASE_API_URL + "employee").subscribe(result => {
      $('#datatable-basic').DataTable().destroy()
      this.list = result
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
  
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getData(id, name, contactNumber, username, password , sal, doj, rid, did): void {
    let data = {
      "id":id, 
      "name":name, 
      "contactNumber":contactNumber,
      "username":username ,
      "password":password,
      "sal": sal,
      "doj": doj,
      "rid": rid,
      "did": did,
      "update" : this.update
    };
    this.http.post(GlobalVariable.BASE_API_URL + "employee/add", data, ).toPromise()
           .then(
            //  this.setList()
            window.location.reload()
           )
           .catch();
    
  }

  setData(id, name, contactNumber, username, password , sal, doj, rid, did){
    this.id = id,
    this.name = name, 
    this.contactNumber = contactNumber,
    this.username = username, 
    this.password = password,
    this.sal = sal, 
    this.doj = doj, 
    this.rid = rid, 
    this.did = did
  }
  del(id){
    this.http.get(GlobalVariable.BASE_API_URL + "employee/del/" + id).subscribe(result => {
    console.log(result);
    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}
}
