import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService  } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 

implements OnInit {
  email = '';
  password = '';
  sw = false;

  constructor(private router: Router,
    private authService: AuthService) {
}

  ngOnInit(): void {
  }

  onLogin(form):void{
    console.log('USERNAME:',form.value);
    this.authService.onLogin(form.value).subscribe(
      res => {
        console.log('LOGIN RESPONSE: ', res);
      },
      err => {
        console.log('LOGIN ERROR: '),err;
      }
    );
  }

  /*onLogin2(form):void{
    console.log('FORM:',form.value);
    this.router.navigate(['/pages']);
  }*/

}