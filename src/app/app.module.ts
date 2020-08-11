import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { T0807Component } from './components/t0807/t0807.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './components/persona/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    T0807Component,
    PersonaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
