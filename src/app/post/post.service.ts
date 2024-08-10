import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs';




//a service in a angular is a class whose object could be injected into any component within the angular and use its method and data, we use services to creste sinalton objects that can be refered across the component of the angular applicatio.
// we have injectable diractive that allows the objects of this class injected into the component , this is the di angular.
//this service will create method for interacting with the REST API by using the HttpCLient object and try to call the HTTP method: Get, Post, Put and Delete
//provided in root will make this service available at the root level(Top most) of the angular app, this feature is made available from Aung-5
@Injectable({
  providedIn: 'root'
})
export class PostService {
//constroctor in angular is typically used to inject additional component into the class
private baseAddress: string="http://localhost:5204/api/StockMarket"
httpOptions={
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}
  constructor(private httpClient: HttpClient) {

   }
   create(post:Post): Observable<any>{
    return this.httpClient.post(this.baseAddress+"/Stocks", JSON.stringify(post), this.httpOptions);

   }
   getAll():Observable<any>{
    return this.httpClient.get(this.baseAddress+"/Stocks");

   }
   find(id: Number): Observable<any>{
    return this.httpClient.get(this.baseAddress+"/Stocks/"+id);

   }
   update(id: Number, post:Post): Observable<any>{
    return this.httpClient.put(this.baseAddress+"/Stocks/", JSON.stringify(post), this.httpOptions);

   }
   delete(id: number): Observable<any>{
    return this.httpClient.delete(this.baseAddress+"/Stocks/"+id, this.httpOptions);
   }
}
