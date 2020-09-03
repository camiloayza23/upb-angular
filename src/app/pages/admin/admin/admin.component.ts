import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productSubs: Subscription;
  productSubs2: Subscription;
  products = [];
  productForm : FormGroup;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      description:['',[Validators.required, Validators.minLength(3)]],
      imageUrl:'',
      ownerId:'',
      price: '',
      title:''
    });

    this.productSubs2 = this.productService.getProducts().subscribe(res => {
      console.log('RES',res)
      console.log('RESPUESTA', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  /*onEnviar():void{
    console.log('VALOR', this.nameControl);
    console.log('VALOR', this.nameControl.value);
  }*/

  onEnviar2():void{
    console.log('VALOR', this.productForm.value);
    this.productSubs = this.productService.addProducts(this.productForm.value).subscribe(res => {
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
  }

}

export class SidenavAutosizeExample {
  showFiller = false;
}