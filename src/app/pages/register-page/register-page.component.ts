import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { Snackbar } from 'src/app/components/snackbar/snackbar';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  serviceSubs: Subscription;
  action = 'Got it'
  message = 'Wrong credentials during regiser'

  constructor(private authService: AuthService, private snackBar : Snackbar) { }

  onRegisterClick(user: RegisterUser){
    this.authService.register(user.email, user.password).subscribe(
        res => console.log(res),
        err => this.snackBar.openSnackBar(this.message, this.action)
    );
  }
}