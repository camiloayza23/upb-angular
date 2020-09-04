import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConcertServiceService {

   constructor(private http: HttpClient) { }
  
  public getConcerts() : Observable<any> {
    return this.http.get('https://super-ticket-test.firebaseio.com/concerts.json');
  }

  public addConcert(concert:any) : Observable<any> {
    return this.http.post('https://super-ticket-test.firebaseio.com/concerts.json',concert);
  }

  public deleteConcert(id:string) : Observable<any> {
    return this.http.delete(`https://super-ticket-test.firebaseio.com/concerts/${id}.json`);
  }

  public updateProducts(id:any, concert:any) : Observable<any>{
    return this.http.put(`https://super-ticket-test.firebaseio.com/concerts/${id}.json`, concert);
  }
}