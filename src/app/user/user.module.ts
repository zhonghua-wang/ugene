import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserOrLoginComponent} from "./user-or-login/user-or-login.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    //UserRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserOrLoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    UserOrLoginComponent,
    SignUpComponent,
    SignInComponent,
  ]
})
export class UserModule { }
