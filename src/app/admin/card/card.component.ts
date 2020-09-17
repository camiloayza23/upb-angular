import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  productDelete: Subscription;
  products = [];
  
  hot = [];
  cold = [];

  productForm : FormGroup;
  idEdit:any;

  @Input () name:string;
  @Input () size:string;
  @Input () urlImage:string;
  @Input () stock:number;
  @Input () type:string;
  
  @Input () product:any;

  @Output () editPage = new EventEmitter<any>();

  onEdit():void {
    this.editPage.emit(this.product);
  }

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private authService: AuthService ) { }

  ngOnInit() {
    
  }

  onDelete() :void{
    this.productDelete = this.productService.deleteProducts(this.product.id).subscribe(res => {
      window.location.reload();
    });
  }

  ngOnDestroy():void {
    this.productDelete ? this.productDelete.unsubscribe() : '';
  }

  

}