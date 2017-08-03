import {Injectable} from '@angular/core';
import * as Settings from '../settings';
//import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";


@Injectable()
export class RestApiService {

  private restUrl = Settings.REST_URL;
  token$ = new Subject<string>();
  currentUser$ = new Subject<User>();

  set token(value: string) {
    this.token$.next(value);
    localStorage.setItem('token', value)
  }

  get token(): string {
    return localStorage.getItem('token')
  }


  constructor(private http: HttpClient) {
  }

  private fetchData(url: string, auth: boolean = false): any {
    if (auth) {
      return this.http.get(`${this.restUrl}/${url}`, {
        headers: new HttpHeaders().set('Authorization', 'Token ' + localStorage.getItem('token'))
      })
    }
    else {
      return this.http.get(`${this.restUrl}/${url}`);
    }

  }

  fetchUser() {
    this.fetchData(`${this.restUrl}/auth/me`, true).subscribe(
      user => {
        this.currentUser$.next(user)
      }
    )
  }


  login(username: string, password) {
    return this.http.post(`${this.restUrl}/auth/login/`, {
      username: username,
      password: password
    })
      .map(data => {
        console.log(data);
        if (data && data['auth_token']) {
          localStorage.setItem('token', data['auth_token']);
          this.token = data['auth_token'];
          // get current user profile
          this.fetchUser();
        }

        return data
      })
    // .map((res: Response) => {
    //   let user = res.json();
    //   if (user && user.auth_token) {
    //     localStorage.setItem('currentUser', JSON.stringify(user))
    //   }
    //   return user;
    // })
  }

  private getAuthHeader(): any {
    return {
      headers: new HttpHeaders().set('Authorization', 'Token ' + localStorage.getItem('token'))
    }
  }

  logout() {
    this.http.post(`${this.restUrl}/logout/`, {}, this.getAuthHeader()).subscribe(
      data => {
        localStorage.removeItem('token');
        this.token = '';
        this.currentUser$.next(null)
      }
    )
  }


}
