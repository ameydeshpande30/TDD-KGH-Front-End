import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../global';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public list: any[];
  update = 0
  name = "Name"
  id = 0;
  desc = "";

  normal(){
    this.update = 0
    this.name = "Name"
    this.id = 0;
    this.desc = "";
  }
  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  http 
  constructor(public http2:HttpClient) {
    
   this.http = http2;
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'numbers',
      pageLength: 10,
      processing: true
    };
  
    this.http.get(GlobalVariable.BASE_API_URL + "department").subscribe(result => {
      $('#datatable-basic').DataTable().destroy()
      this.list = result ;
      this.id = this.list.length + 1;
      // setTimeout(function() {
      //   $(function() {
      //     $("#datatable-basic").DataTable({
      //       pagingType: "numbers",
      //       pageLength: 10,
      //       processing: true,
      //       responsive: true
      //     });
      //   });
      // }, 200);
      
  }, error => console.error(error));
  
  }


  getData(id, name, desc): void {
    
    let data = {
      "id": id,
       "name":name, 
       "desc":desc, 
      "update" : this.update
    };
    
    this.http.post(GlobalVariable.BASE_API_URL + "department/add", data, ).toPromise()
           .then(
            window.location.reload()
           )
           .catch(
             console.log("err")
             
           );
    
  }

  setData(id, name, desc){
    this.update = 1;
    this.id = id ; 
    this.name = name;
    this.desc = desc;
    
  }
  del(id){
    this.http.delete(GlobalVariable.BASE_API_URL + "department/del/" + id).subscribe(result => {
    console.log(result);
    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}

}
