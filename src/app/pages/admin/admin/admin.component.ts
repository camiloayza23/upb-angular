import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProductService } from '../../../shared/services/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productSubs: Subscription;
  productSubs2: Subscription;
  productDelete: Subscription;
  productUpdate: Subscription;
  products = [];
  productForm : FormGroup;
  idEdit:any;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private authService: AuthService ) { }

  ngOnInit() {
    this.loadProducts();
    this.productForm = this.formBuilder.group({
      description:['',[Validators.required, Validators.minLength(3)]],
      imageUrl:'',
      ownerId:'',
      price: '',
      title:''
    });
   
  }

  loadProducts(): void {
    this.products = [];
    const idUser = this.authService.getUserId();
    this.productSubs2 = this.productService.getProductsById(idUser).subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any) :void{
    console.log('ID',id);
    this.productDelete = this.productService.deleteProducts(id).subscribe(res => {
      this.loadProducts();
    });
  }

  onEdit(product):void {
    console.log('A', product);
    this.productForm.patchValue({
      description: product.description,
      imageUrl: product.imageUrl,
      ownerId: product.ownerId,
      price: product.price,
      title: product.title

    });

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

  /*onEnviar():void{
    console.log('VALOR', this.nameControl);
    console.log('VALOR', this.nameControl.value);
  }*/

  onEnviar2():void{
    console.log('VALOR', this.productForm.value);
    this.productSubs = this.productService.addProducts({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(res => {
      console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  ngOnDestroy():void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productSubs2 ? this.productSubs2.unsubscribe() : '';
    this.productDelete ? this.productDelete.unsubscribe() : '';
    this.productUpdate ? this.productUpdate.unsubscribe() : '';
  }

}

export class SidenavAutosizeExample {
  showFiller = false;
}