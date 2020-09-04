import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    //Componentes directivas
    AppComponent
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    //Servicios
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
