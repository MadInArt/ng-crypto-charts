import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd   } from '@angular/router'; 
import { filter } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/components/app.component.scss']
})
export class AppComponent {
  
  currentUrl: string;
  
  constructor(private router: Router, private authService : AuthService){ 
  this.router.events.subscribe((res) => { 
    this.currentUrl = router.url;
    console.log(this.currentUrl);
  })
}

  onLogoutClick(){
    this.authService.logout();
  }
}
         