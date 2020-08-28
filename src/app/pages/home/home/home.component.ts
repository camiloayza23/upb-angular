import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      console.log('RES',res)
      console.log('RESPUESTA', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

}