import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../../../assets/styles/pages/login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error = ''
  constructor(private authService: AuthService){} 

  ngOnInit(){}

  onLoginClick(user: LoginUser){
    this.authService.login(user.email, user.password).subscribe(
      res => 
      console.log(res),
      err => (this.error = err.error.error)
    )
  }
}
