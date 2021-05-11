import { Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { AuthGuard } from '../auth-guard.guard'
let _isUser = localStorage;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  __apiURL = 'https://reqres.in/api/'
 
  userCredential: object;
  isUserCred = _isUser

  private userSubj = new BehaviorSubject(this.isUserCred)
  currentUser = this.userSubj.asObservable()
  

  constructor(private router: Router, private apiService : ApiService) { }

   @ViewChild(AuthGuard) guard: AuthGuard;

    login(username: string, password: string) {
    const request = this.apiService.post(`${this.__apiURL}login`, {
        username,
        password
    });
    request.subscribe((res: any) => { 
      this.authAndRedirect(res, username, password)
    }),error =>{
      console.log(error);
     } 
     return request;
    }

    register(username: string, password: string) {
        const request = this.apiService.post(`${this.__apiURL}register`, {
        username,
        password
    });
         request.subscribe((res: any) => { 
         this.authAndRedirect(res, username, password)
      }),error =>{
        console.log(error);
        
       } 
       return request;
    }
    logout() {
      this.isUserCred.clear();
      this.router.navigate(['']);
      
    }

    setUsersCredentials(usersCred) {
      this.isUserCred.setItem('user', JSON.stringify(usersCred));

    }

    authAndRedirect(res, username, password){
      this.userCredential = {
        email : username,
        password  : password,
        token : res.token
      }
      this.setUsersCredentials(this.userCredential)
      this.router.navigate(['/dashboard']);
      // setTimeout(() => {
      //   this.isUserCred.clear()
      // }, 5000)  
      
      // Here I'm simulating the token expiration( removing token after 5 seconds user been logged)
      // After token expiration, it should redirect me out, however, canActivate from auth-guard doesnt check "else" condition
      // Calling a canActivate inside of setTimeout with passed parameter (user) didnt help me.

    }
  

}
