import { Component, OnInit } from '@angular/core';
import { Snackbar } from 'src/app/components/snackbar/snackbar';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../../../assets/styles/pages/register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  action = 'Got it'
  message = 'Wrong credentials during regiser'

  constructor(private authService: AuthService, private snackBar : Snackbar) { }

  ngOnInit(): void {}

  onRegisterClick(user: RegisterUser){
    this.authService.register(user.email, user.password).subscribe(
        res => console.log(res),
        err => this.snackBar.openSnackBar(this.message, this.action)
    );
  }
}
