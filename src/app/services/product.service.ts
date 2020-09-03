import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() 
export class ProductService {

  constructor(private http: HttpClient) { }
  
  public getProducts() : Observable<any> {
    return this.http.get('https://camila-angular.firebaseio.com/products.json');
  }

  public addProducts(product:any) : Observable<any> {
    return this.http.post('https://camila-angular.firebaseio.com/products.json',product);
  }

  public deleteProducts(id:string) : Observable<any> {
    return this.http.delete(`https://camila-angular.firebaseio.com/products/${id}.json`);
  }

  public updateProducts(id:any, product:any) : Observable<any>{
    return this.http.put(`https://camila-angular.firebaseio.com/products/${id}.json`, product);
  }

}