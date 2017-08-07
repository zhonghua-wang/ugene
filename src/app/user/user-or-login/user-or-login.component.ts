import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {RestApiService} from "../../service/rest-api.service";

@Component({
  selector: 'app-user-or-login',
  templateUrl: './user-or-login.component.html',
  styleUrls: ['./user-or-login.component.css']
})
export class UserOrLoginComponent implements OnInit {
  currentUser: User = new User();
  token: string = '';
  displayName: string = '';

  constructor(private restAPIService: RestApiService) {
    console.log('user-or-login constructed')
  }

  ngOnInit() {
    console.log('user-or-login init')
    this.restAPIService.token$.subscribe(
      token => {
        this.token = token
        console.log('token: ' + this.token)
      }
    )
    this.restAPIService.currentUser$.subscribe(
      user => {
        this.currentUser = user;
        this.displayName = user.last_name + user.first_name || user.username;
        console.log(user.username);
      }
    )
  }

  logout() {
    this.restAPIService.logout();
  }
}
