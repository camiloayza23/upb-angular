import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ad1Component } from './components/ad1/ad1.component';
import { Ad2Component } from './components/ad2/ad2.component';
import { Ad3Component } from './components/ad3/ad3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Ad1Component,
    Ad2Component,
    Ad3Component
  ],
  exports:[
    Ad1Component,
    Ad2Component,
    Ad3Component
  ]
})
export class AdminModule { }