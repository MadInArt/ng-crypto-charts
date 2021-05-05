import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../assets/styles/components/register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  error = '';
  form: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        CustomValidators.matchPasswords('password')
      ])
    })
  }
  register(form: FormGroup) {
    this.error = '';
    const email = form.value.email;
    const password = form.value.password;
    this.authService
        .register(email, password)
        .subscribe(
            res => this.router.navigate(['/dashboard']),
            err => (this.error = err.error.error)
        );
  }
}
