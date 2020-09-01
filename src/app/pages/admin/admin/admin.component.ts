import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productForm : FormGroup;
  //nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      description:['',[Validators.required, Validators.minLength(3)]],
      imageUrl:'',
      ownerId:'',
      price: '',
      title:''
    });
  }

  /*onEnviar():void{
    console.log('VALOR', this.nameControl);
    console.log('VALOR', this.nameControl.value);
  }*/

  onEnviar2():void{
    console.log('VALOR', this.productForm.value);
    this.productService.addProducts(this.productForm.value).subscribe(res => console.log('RES:',res));
  }

}