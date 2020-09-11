import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from './shared/interceptors/auth.interceptor';
import {AuthGuard} from './shared/guards/auth.guard';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {
    path: 'pages', 
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
