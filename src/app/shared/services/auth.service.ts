  
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class AuthService {

  url = environment.auth.apiBaseUrl;
  key = environment.auth.key;

  constructor(private http: HttpClient) {

  }

  public onLogin(body: any): Observable<any> {
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
      map((res: any) => {
        this.authSuccess(res.idToken, res.localId);
        return res;
      })
    );
  }

  private authSuccess(token: string, userId: string): void {
    localStorage.setItem('auth', token);
    localStorage.setItem('userId', userId);
  }

}