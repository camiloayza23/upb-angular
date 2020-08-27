import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { NgElseDirective } from '../directives/ng-else.directive';


@NgModule({
  declarations: [
    LoginComponent,
    NgElseDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }