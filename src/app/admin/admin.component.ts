import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ProductService } from '../shared/services/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Output () editForm = new EventEmitter<any>();

  productSubs: Subscription;
  productSubs2: Subscription;
  productUpdate: Subscription;

  public receive: any;
  products = [];
  
  hot = [];
  cold = [];

  productForm : FormGroup;
  idEdit:any;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private authService: AuthService ) { }

  ngOnInit() {
    this.loadProducts();

   
  }

  loadProducts(): void {
    this.products = [];
    this.productSubs2 = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.hot = this.products.filter(s => s.type === 'calor');
      this.cold = this.products.filter(s => s.type === 'frio');
    });
  }

  onEdit(product):void {
    console.log('A', product);
    
    this.idEdit = product.id;
    // PATCHVALUE SETVALUE, setvalue hay que enviar pedacitos si o si
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

