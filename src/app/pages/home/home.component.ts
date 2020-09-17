import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AddProduct } from './store/home.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  products = [];
  cart = [];
  productSubs :Subscription;
  homeSubs: Subscription;
  constructor(private store: Store<any>,
    private productService: ProductService) { }

  ngOnInit() {
    this.homeSubs = this.store.select(s => s.home).subscribe(res => {
      
      this.cart = Object.assign([],res.items);
      // Evitar el principio de inmutabilidad que nos devuelve el store
      // JSON.parse({JSON.stringify(res)})
    });

    this.productSubs = this.productService.getProducts().subscribe(res => {
      console.log('RS',res)
      console.log('RESPUESTA', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  ngOnDestroy():void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.homeSubs ? this.homeSubs.unsubscribe() : '';
  }

  onBuy(product): void {
    this.store.dispatch(AddProduct({product:Object.assign([],product)}));
  }

}