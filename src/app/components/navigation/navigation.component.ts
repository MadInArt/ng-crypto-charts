import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['../../../assets/styles/components/navigation.component.scss']
})

export class NavigationComponent  {
  
  @Output() signedOut = new EventEmitter<boolean>();
 
   get isToken():boolean{
    return this.authService.isToken;
  }

  currentUrl: string; 
  
   constructor(private router: Router, private authService : AuthService){ 
    this.router.events.subscribe((res) => { 
      this.currentUrl = router.url;
      console.log(this.currentUrl,  "navigation");
  })
}
  onLogoutClick(){
    this.signedOut.emit(true);
  }
}
