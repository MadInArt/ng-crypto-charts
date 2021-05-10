import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  __apiURL = 'https://reqres.in/api/'
  isToken: boolean;
  constructor(private router: Router, private apiService : ApiService) { }

 
    login(username: string, password: string) {
    const request = this.apiService.post(`${this.__apiURL}login`, {
        username,
        password
    });
    request.subscribe((res: any) => { 
      this.setToken(res.token)
      this.router.navigate(['/dashboard']);
    }),error =>{
      console.log('wrong credentials', error)
      return null;    } 
     return request;
  }

    register(username: string, password: string) {
      const request = this.apiService.post(`${this.__apiURL}register`, {
        username,
        password
    });
       request.subscribe((res: any) => { 
        
        this.setToken(res.token)
        this.router.navigate(['/dashboard']);
      }),error =>{
        console.log('wrong credentials', error)
        return null;    } 
       return request;
      }

    logout() {
      localStorage.removeItem('token');
      this.isToken = false;
      this.router.navigate(['']);
    }
    setToken(token: string) {
       localStorage.setItem('token', token);
       console.log("setToken")
    }
    getToken() {
        if(localStorage.getItem('token')){
          this.isToken = true;
           return localStorage.getItem('token')
        }else{
          this.isToken = false;
          return localStorage.getItem('token')
                  }
    }
    isLogged() {
      return this.getToken() !== null;
    }

}
