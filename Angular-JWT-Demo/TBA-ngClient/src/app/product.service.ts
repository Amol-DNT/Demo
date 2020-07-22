import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Product} from './products/product'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://mysitebuilder20200613144934.azurewebsites.net/api/Products";
  constructor(private http: HttpClient) { }

  getProducts()
  {   
    return this.http.get<Product[]>(this.apiUrl, {headers: new HttpHeaders({ 'Authorization':'bearer '+localStorage.getItem("jwt") })});
  }
  
}
