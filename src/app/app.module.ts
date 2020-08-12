import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { T0807Component } from './components/t0807/t0807.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';


@NgModule({
  declarations: [
    //Componentes directivas
    AppComponent,
    TestComponent,
    T0807Component,
    PersonaComponent

  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule
  ],
  providers: [
    //Servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
