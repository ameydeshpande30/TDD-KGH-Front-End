import { GlobalVariable } from './../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  http;
  constructor(http:HttpClient) {
    this.http = http
   }

  ngOnInit() {
  }
  model: any = {};
  
  
  onSubmit() {
    // btoa("password")
    var headers = new Headers();
    var payload = "Basic " + btoa(this.model.username + ":" + this.model.password);
    // this.headers.append("Authorization", "Basic " + btoa(this.model.username + ":" + this.model.password );
    headers.append("Authorization", "Basic YW1leTpwYXNzd29yZA==");
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    const  headers1 = new  HttpHeaders().set('Authorization', 'Basic YW1leTpwYXNzd29yZA==');
    console.log(headers);
    var data = {}
    this.http.get(GlobalVariable.LOGIN,{ headers: new HttpHeaders({'Authorization': payload})}).subscribe(result => {
      console.log(result);
      
    });
  }

}
