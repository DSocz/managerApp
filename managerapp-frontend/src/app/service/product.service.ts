import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductSnap } from '../model/product-snap';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/product';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.usersUrl + '/products');
  }

  public deleteOne(id: number) {
    return this.http.delete<Product>(this.usersUrl + '/deleteOne/' + id);
  }

  public saveNewProductInDB(product: Product): Observable<Product> {
    return this.http.post<Product>(this.usersUrl + '/addNewProduct', product);
  }

  public findAllInUseProductSnaps(): Observable<ProductSnap[]> {
    return this.http.get<ProductSnap[]>(this.usersUrl + '/getAllInUseProductSnaps');
  }

  public findAllNotInUseProductSnaps(): Observable<ProductSnap[]> {
    return this.http.get<ProductSnap[]>(this.usersUrl + '/getAllNotInUseProductSnaps');
  }
}
