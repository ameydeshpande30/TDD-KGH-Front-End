import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../global';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public list: any[] = [];
  update = 0
  name = "Name"
  id = 0;
  count = 0;
  normal(){
    this.name = "Name"
    this.update = 0;
    this.id = this.list.length + 1;
    this.count = 2;
   
  }
  http 
  constructor(public http2:HttpClient) {
    
   this.http = http2;
  }


  ngOnInit() {
    this.http.get(GlobalVariable.BASE_API_URL + "category").subscribe(result => {
      
      this.list = result 
      $('#datatable-basic').DataTable().destroy();
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
    $('#datatable-basic').DataTable().destroy()
  }
  getData(id, name, count): void {
    
    let data = {
      "id": id,
       "name":name, 
       "count":count, 
      "update" : this.update
    };
    var out = JSON.stringify(data)
    console.log(data);
    
    this.http.post(GlobalVariable.BASE_API_URL + "category/add", JSON.parse(out), ).toPromise()
           .then(
            window.location.reload()
           )
           .catch(
             console.log("err")
             
           );
    
  }

  setData(id, name, count){
    console.log("call");
    this.update = 1;
    this.id = id ; 
    this.name = name;
    this.count = count;
    
  }
  del(id){
    this.http.delete(GlobalVariable.BASE_API_URL + "category/del/" + id).subscribe(result => {
    console.log(result);
    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}
}

