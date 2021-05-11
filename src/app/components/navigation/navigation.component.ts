import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent  {
  
  @Output() signedOut = new EventEmitter<any>();
 
   get isToken(): any{
    return this.authService.isUserCred;
  }

  currentUrl: string; 
  
   constructor(private router: Router, private authService : AuthService){}
  
   onLogoutClick(){
    this.signedOut.emit(this.authService.logout);
  }
}
