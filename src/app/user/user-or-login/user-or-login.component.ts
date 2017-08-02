import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-user-or-login',
  templateUrl: './user-or-login.component.html',
  styleUrls: ['./user-or-login.component.css']
})
export class UserOrLoginComponent implements OnInit {
  currentUser: User;
  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

}
