import {Injectable} from '@angular/core';
import * as Settings from '../settings';
//import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class RestApiService {

  private restUrl = Settings.REST_URL;
  private authUrl = Settings.AUTH_URL;

  constructor(private http: HttpClient) {
  }

  private fetchData(url: string): any {
    return this.http.get(`${this.restUrl}/${url}`);
  }

  // private getTokenHeader() {
  //   // create authorization header with jwt token
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser && currentUser.token) {
  //     let headers = new Headers({'Authorization': 'Token ' + currentUser.token});
  //     return new RequestOptions({headers: headers});
  //   }
  // }

  login(username: string, password) {
    return this.http.post(`${this.authUrl}/login/`, {
      username: username,
      password: password
    })
      .map(data=>{
        console.log(data)
      })
    // .map((res: Response) => {
    //   let user = res.json();
    //   if (user && user.auth_token) {
    //     localStorage.setItem('currentUser', JSON.stringify(user))
    //   }
    //   return user;
    // })
  }

  // logout() {
  //   this.http.post(`${this.authUrl}/logout/`, {}, this.getTokenHeader());
  //   localStorage.removeItem('currentUser')
  // }


}
