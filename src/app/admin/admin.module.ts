import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminComponent} from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ProductService } from '../shared/services/product.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    ProductService
  ],
  exports: [RouterModule]
})
export class AdminModule {
}