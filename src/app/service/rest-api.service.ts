import {Injectable} from '@angular/core';
import * as Settings from '../settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Job} from "../models/job";


@Injectable()
export class RestApiService{

  private restUrl = Settings.REST_URL;
  private _token = new BehaviorSubject('');
  private _currentUser = new BehaviorSubject(new User());
  private _jobList = new BehaviorSubject(new Job())
  token$ = this._token.asObservable();
  currentUser$ = this._currentUser.asObservable()

  setToken(token){
    return this._token.next(token)
  }
  setCurrentUser(currentUser: User){
    return this._currentUser.next(currentUser)
  }


  constructor(private http: HttpClient) {
    console.log('rest api service constructed')
    // if token is already stored in localStorage
    if (localStorage['token']){
      console.log(`token ${localStorage['token']}`);
      this.setToken(localStorage['token']);
      this.fetchUser();
    }

  }
  private _postData(url: string, data: any, auth: boolean=true): any{
    if (auth){
      return this.http.post(`${this.restUrl}/${url}`, data, {
        headers: new HttpHeaders().set('Authorization', 'Token ' + localStorage.getItem('token'))
      });
    }
    else{
      return this.http.post(`${this.restUrl}/${url}`, data);
    }
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
    this.fetchData('auth/me', true).subscribe(
      user => {
        this.setCurrentUser(user)
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
          this.setToken(data['auth_token'])
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
    this.http.post(`${this.restUrl}/auth/logout/`, {}, this.getAuthHeader()).subscribe(
      data => {
        localStorage.removeItem('token');
        this.setToken('')
        this.setCurrentUser(null)
      },
      error => {
        localStorage.removeItem('token');
        this.setToken('')
        this.setCurrentUser(null)
      }
    )
  }

  // get user job list
  getJobs(userId: string): Observable<any>{
    return this.fetchData(`jobs/?filter{user}=${userId}`, true)
      .map(data => data.jobs)
  }

  addJob(job: any): Observable<any>{
    return this._postData('jobs/', job, true);
  }

  getJobDetail(id: string): Observable<any>{
    return this.fetchData(`jobs/${id}/?include[]=report_set.*&include[]=report_set.reportunit_set.*`, true);
  }

}
