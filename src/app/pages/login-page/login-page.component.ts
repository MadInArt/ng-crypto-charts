import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from 'src/app/shared/models/user';
import { Snackbar } from '../../components/snackbar/snackbar'
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  action = 'Got it'
  message = 'No such user exists'
  constructor(private authService: AuthService, private snackBar : Snackbar){} 

  ngOnInit(){}

  onLoginClick(user: LoginUser){
    this.authService.login(user.email, user.password).subscribe(
      res => console.log(res),
      err => this.snackBar.openSnackBar(this.message, this.action)
    )
  }

}
