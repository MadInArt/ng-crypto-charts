import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUser } from 'src/app/shared/models/user';
import { CustomValidators } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../assets/styles/components/register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  error = '';
  form: FormGroup;
  @Output() onRegister: EventEmitter<RegisterUser> =   new EventEmitter<RegisterUser>();

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
  onRegisterSubmit(form: FormGroup){
    const user: RegisterUser = {
      email:  form.value.email,
      password: form.value.password
    }
    this.onRegister.emit(user)
  }
}
