import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    ProductService
  ]
})
export class AdminModule {
}