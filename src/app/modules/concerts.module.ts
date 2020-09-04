import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertsComponent } from './concerts.component';

@NgModule({
  imports: [
    CommonModule,
    ConcertsComponent
  ],
  declarations: [ConcertsComponent]
})
export class ConcertsModule { }