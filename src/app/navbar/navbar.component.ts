import { AuthService } from './../Auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name = "Amey Deshpande"
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }
  
  logout(){
    this.auth.removeToken();
    window.location.reload();
  }

}
