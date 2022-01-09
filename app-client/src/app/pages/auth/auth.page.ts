import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup;
  messageLogin: string;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createLoginForm();
  }

  onSubmit() {
    this.messageLogin = `Seu email: ${this.loginForm.value['email']} - Sua senha ${this.loginForm.value['password']}`;
  }

  private createLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
