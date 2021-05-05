import { Component} from '@angular/core';
import { Router} from '@angular/router'; 
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles/components/app.component.scss']
})
export class AppComponent {
  
  currentUrl: string;
  
  constructor(private router: Router, private authService : AuthService){}

  onLogoutClick(){
    this.authService.logout();
  }
}
         