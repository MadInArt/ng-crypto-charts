import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./services/auth.service";



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

   canActivate() {

    if(!this.authService.isUserCred.getItem('user')){
      return this.router.navigate([''])
    } else {
      return true;
    }
    // if (this.isAuthed) { 
    //   return true;
    // } else  {
    //   this.router.navigate([''])
    //   return false;
    // }
    
  }
  
}
