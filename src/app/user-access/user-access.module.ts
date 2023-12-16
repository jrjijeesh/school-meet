import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSignupComponent } from './user-signup/user-signup.component';

@NgModule({
  declarations: [UserLoginComponent, UserSignupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class UserAccessModule {}
