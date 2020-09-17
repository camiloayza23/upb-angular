import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {

  @Input() receive:any;

  productSubs: Subscription;
  productSubs2: Subscription;
  productDelete: Subscription;
  productUpdate: Subscription;
  products = [];
  form:any;
  
  hot = [];
  cold = [];

  productForm : FormGroup;
  idEdit:any;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private authService: AuthService ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      size:'',
      stock:'',
      type: ['',[Validators.required]],
      urlImage:''
    });
}

  onEdit():void {
    if(this.receive != null){
    
    this.productForm.patchValue({
      name: this.receive.name,
      size: this.receive.size,
      stock: this.receive.stock,
      type: this.receive.type,
      urlImage: this.receive.urlImage

    });

    this.idEdit = this.receive.id;
  }}

  ngOnChanges(){
    if(this.receive != null) {
    this.productForm.patchValue({
      name: this.receive.name,
      size: this.receive.size,
      stock: this.receive.stock,
      type: this.receive.type,
      urlImage: this.receive.urlImage

    });

    this.idEdit = this.receive.id;
  }}

  onUpdate():void{
    this.productUpdate = this.productService.updateProducts(this.idEdit, this.productForm.value).subscribe(res => {
      window.location.reload();

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
    this.productSubs = this.productService.addProducts({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(res => {
      window.location.reload();
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