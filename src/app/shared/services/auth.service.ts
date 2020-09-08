import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable() 
export class AuthService {

  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;
  constructor(private http: HttpClient) { }
  
  public onLogin(body:any) : Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`,body);
  }

}