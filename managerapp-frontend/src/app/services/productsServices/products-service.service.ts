import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../products/product';
import { Test } from '../../test2';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/product';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product/products');
  }
}
