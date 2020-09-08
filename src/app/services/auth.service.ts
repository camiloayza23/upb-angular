import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() 
export class AuthService {

  constructor(private http: HttpClient) { }
  
  public onLogin(body:any) : Observable<any> {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSJkn80iyWVkdhibnsDoT-j_0QoOwpEXo',body);
  }

}