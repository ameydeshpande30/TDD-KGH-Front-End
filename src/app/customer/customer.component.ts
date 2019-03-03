import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalVariable } from '../global';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public list: Customers[];
  update = 0
  name = "Name"
  id = 0;
  address: string;
  contactNumber: string;
  email: string;
  aadhar: string;
  idproof: string;
  file : File;
  sel(event){
    this.file = event.target.files[0];

  }
  normal(){
    this.name = "Name"
    this.update = 0;
    this.id = this.list[this.list.length - 1].id;
    this.address = "Address";
    this.contactNumber = "7588758032";
    this.email =  "ameyd30@gmail.com";
    this.aadhar =  "831-931-253";
    this.idproof = "file.pdf";
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
    this.http.get(GlobalVariable.BASE_API_URL + "customer/getList").subscribe(result => {
     
      this.dtOptions = {
        pagingType: 'numbers',
        pageLength: 10,
        processing: true
      };
      
      this.dtTrigger.next();  
      this.list = result as Customers[];
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
  getData(id, name, address, contactNumber, email, aadhar): void {
    let data = {
      "id" : id,
      "name" : name,
      "address" : address,
      "contactNumber" : contactNumber,
      "email" : email,
      "aadhar" : aadhar,
      "update" : this.update
    };
    var ext = this.file.name.split(".")[1];
    var seconds = new Date().getTime();
    let formData:FormData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("contactNumber", contactNumber);
    formData.append("email", email);
    formData.append("aadhar", aadhar);
    formData.append("file", this.file, seconds + "." + ext);

   
    this.http.post(GlobalVariable.BASE_API_URL + "customer/addUpdate/" + this.update, formData).toPromise()
           .then(
            //  this.setList()
            window.location.reload()
           )
           .catch();
    
  }

  setData(id, name, address, contactNumber, email, aadhar, idproof){
    console.log(email);
    this.update = 1;
      this.id = id,
      this.name = name,
      this.address = address,
      this.contactNumber = contactNumber,
      this.email = email,
      this.aadhar = aadhar,
      this.idproof = idproof
  }
  del(id){
    this.http.get(GlobalVariable.BASE_API_URL + "customer/del/" + id).subscribe(result => {
    console.log(result);
    if(result){
      window.location.reload()
    }
    
  }
  , error => console.error(error));}
}

interface Customers {
  id: number;
  name: string;
  address: string;
  contactNumber: string;
  email: string;
  aadhar: string;
  idproof: string;
 }