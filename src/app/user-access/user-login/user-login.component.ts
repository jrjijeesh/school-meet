import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  protected form: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({ username: null, password: '' });
  }

  protected submitForm(): void {
    console.log('submit');
    this.router.navigate(['app', 'profile']);
  }
}
