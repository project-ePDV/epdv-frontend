import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewDidEnter } from '@ionic/angular';
import { AuthenticationService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, ViewDidEnter {
  formLogin!: FormGroup;
  validationList = ['required', 'minlength', 'pattern']
  isContentLoaded: boolean = false;
  isInvalidLogin: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  get email() {
    return this.formLogin.get('email')
  }

  get password() {
    return this.formLogin.get('password')
  }

  async onSubmit() {
    this.formLogin.valid && await this.auth.login(
      {
        email: this.email?.value,
        password: this.password?.value
      }
    ).then((t) => {
      this.isInvalidLogin = true;
    })
  }

  setValidationErrorMessage(label: string, field: string, validations: string[]) {
    const input = this.formLogin.get(field);
    const errorMessageList = {
      'required': `O campo ${label} precisa ser preenchido`,
      'pattern': 'E-mail invalido, preencha o campo novamente',
      'minlength': `O campo ${label} deve conter no mínimo 8 caracteres`,
    };

    return validations.map(validation => {
      if (input?.errors && input.errors[validation]) {
        return errorMessageList[validation as keyof typeof errorMessageList];
      }
      return null
    }).filter(Boolean);
  }

  ionViewDidEnter() {
    this.isContentLoaded = true;    
  }
}
