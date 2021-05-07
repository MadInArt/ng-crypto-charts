import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/shared/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = '';
  form: FormGroup;
  @Output() onLogin: EventEmitter<LoginUser> =   new EventEmitter<LoginUser>();

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
      ])
     })
     }
    onLoginSubmit(form: FormGroup) {
    const user: LoginUser = {
      email:  form.value.email,
      password: form.value.password
    }
    this.onLogin.emit(user)
  }
}
