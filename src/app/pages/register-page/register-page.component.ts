import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../../../assets/styles/pages/register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onRegisterClick(user: RegisterUser){
    this.authService.register(user.email, user.password).subscribe(
        res => console.log(res),
        err => console.log(err)
    );
  }
}
