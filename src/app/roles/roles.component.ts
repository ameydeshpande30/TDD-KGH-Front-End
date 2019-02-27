import { Component, OnInit } from '@angular/core';
import { GlobalVariable } from '../global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public list: any[];
  update = 0
  name = "Name"
  id = 0;
  desc = "desc";

  normal(){
    this.update = 0
    this.name = "Name"
    this.id = 0;
    this.desc = "desc";
  }
  ngOnDestroy(): void {
    $('#datatable-basic').DataTable().destroy()
    
  }
 
  http 
  constructor(public http2:HttpClient) {
    
   this.http = http2;
  }

  ngOnInit() {
 
  
    this.http.get(GlobalVariable.BASE_API_URL + "roles").subscribe(result => {
     
      this.list = result ;
      this.id = this.list.length + 1;
      setTimeout(function() {
        $(function() {
          $('#datatable-basic').DataTable().destroy()
        });
      }, 100);
      $('#datatable-basic').DataTable().destroy()
      setTimeout(function() {
        $(function() {
          $("#datatable-basic").DataTable({
            pagingType: "numbers",
            pageLength: 10,
            processing: true,
            responsive: true
          });
        });
      }, 200);
      
  }, error => console.error(error));
  
  }

  getData(id, name, desc): void {
    
    let data = {
      "id": id,
       "name":name, 
       "desc":desc, 
      "update" : this.update
    };
    
    this.http.post(GlobalVariable.BASE_API_URL + "roles/add", data, ).toPromise()
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
    this.http.delete(GlobalVariable.BASE_API_URL + "roles/del/" + id).subscribe(result => {

    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}
}
