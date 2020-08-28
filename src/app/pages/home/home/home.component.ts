import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    products = [
    
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( res => console.log());
  }

}