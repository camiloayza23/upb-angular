import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService  } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 

implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) {
}

  ngOnInit(): void {
  }

  onLogin(form):void{
    console.log('USERNAME:',form.value);

    this.authService.onLogin({
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true
    }).subscribe(
      res => {
        console.log('LOGIN RESPONSE: ', res);
        this.router.navigate(['pages']);
      },
      err => {
        console.log('LOGIN ERROR: '),err;
      }
    );
  }
}