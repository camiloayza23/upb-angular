import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';


@NgModule({
  declarations: [
    //Componentes directivas
    AppComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //Servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
