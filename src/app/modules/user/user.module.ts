import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Us1Component } from './components/us1/us1.component';
import { Us2Component } from './components/us2/us2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Us1Component,
    Us2Component
  ]
})
export class UserModule { }