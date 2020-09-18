import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ProductService } from '../shared/services/product.service';
import { Store } from '@ngrx/store'
import { AddProduct } from './store/admin.actions'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  @Output () editForm = new EventEmitter<any>();

  productSubs: Subscription;
  productSubs2: Subscription;
  productUpdate: Subscription;
  adminSubs: Subscription;

  public receive: any;
  products = [];
  
  hot = [];
  cold = [];

  result = [];
  rhot = [];
  rcold = [];

  productForm : FormGroup;
  idEdit:any;

  search:string;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private authService: AuthService,
              private store: Store<any> ) { }

  ngOnInit() {
    this.loadProducts();   
  }

  onReport(){
    this.store.dispatch(AddProduct({total: this.products.length,cold:this.cold.length,hot: this.hot.length}));
  }

  loadProducts(): void {
    this.products = [];
    this.productSubs2 = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.hot = this.products.filter(s => s.type === 'calor');
      this.cold = this.products.filter(s => s.type === 'frio');
    });
  }

  loadProductsSearch(): void {
    this.result = [];
    this.rhot = [];
    this.rcold = [];

    if(this.search == null || this.search == ''){
      this.loadProducts();
    } else {
      this.products.filter(s => 
        s.name.includes(this.search.toLowerCase()) ? this.result.push(s) : ''
      );
      this.rhot = this.result.filter(s => s.type === 'calor');
      this.rcold = this.result.filter(s => s.type === 'frio');
      
    }
  }

  onUpdateProduct():void{
    this.productUpdate = this.productService.updateProducts(
        this.idEdit, 
        {...this.productForm.value,
        ownerId: this.authService.getUserId()
      }).subscribe(res => {
      this.loadProducts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }


  ngOnDestroy():void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productSubs2 ? this.productSubs2.unsubscribe() : '';
    this.productUpdate ? this.productUpdate.unsubscribe() : '';
  }

  saveEvent(product):void {
    this.receive = product;
  }

}

export class SidenavAutosizeExample {
  showFiller = false;
}

