import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserOrLoginComponent} from "./user-or-login/user-or-login.component";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserOrLoginComponent,
  ],
  exports: [
    UserOrLoginComponent,
  ]
})
export class UserModule { }
