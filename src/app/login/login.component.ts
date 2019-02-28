import { GlobalVariable } from './../global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(public http:HttpClient, public auth:AuthService, private myRoute: Router) {
    this.auth.removeToken();
   }

  ngOnInit() {
  }
  model: any = {};
  
  
  onSubmit() {
    // btoa("password")
    // var headers = new Headers();
    var payload = "Basic " + btoa(this.model.username + ":" + this.model.password);
    // this.headers.append("Authorization", "Basic " + btoa(this.model.username + ":" + this.model.password );
    // headers.append("Authorization", "Basic YW1leTpwYXNzd29yZA==");
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    // const  headers1 = new  HttpHeaders().set('Authorization', 'Basic YW1leTpwYXNzd29yZA==');
    // console.log(payload);
    var data = {}
    this.http.get(GlobalVariable.LOGIN,{ headers: new HttpHeaders({'Authorization': payload})}).subscribe(result => {
      this.auth.setToken(payload);
      this.myRoute.navigate([""]);
      
    });
  }

}
