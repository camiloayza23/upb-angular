import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ConcertsComponent } from './concerts/concerts.component';
import { ConcertServiceService } from './services/concert-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HabilitadoPipe } from './habilitado.pipe';


@NgModule({
  declarations: [
    //Componentes directivas
    AppComponent,
    ConcertsComponent,
    HabilitadoPipe
  ],
  imports: [
    //Modulos dentro de este modulo
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    //Servicios
  
  ConcertServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
