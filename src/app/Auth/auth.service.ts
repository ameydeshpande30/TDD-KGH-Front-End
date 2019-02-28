import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public setToken(token : string): void{
    localStorage.setItem("token", token);
  }
  public removeToken(): void{
    localStorage.removeItem("token")
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if(token){
      
        return true;
    }
    else{
      return false;
    }
    
  }
}