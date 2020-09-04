import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConcertServiceService {

   constructor(private http: HttpClient) { }
  
  public getProducts() : Observable<any> {
    return this.http.get('https://super-ticket-test.firebaseio.com/concerts.json');
  }

  public addProducts(product:any) : Observable<any> {
    return this.http.post('https://super-ticket-test.firebaseio.com/concerts.json',product);
  }

  //public deleteProducts(id:string) : Observable<any> {
    // return this.http.delete(`https://camila-angular.firebaseio.com/products/${id}.json`);
  //}

  //public updateProducts(id:any, product:any) : Observable<any>{
    // return this.http.put(`https://camila-angular.firebaseio.com/products/${id}.json`, product);
  //}

}