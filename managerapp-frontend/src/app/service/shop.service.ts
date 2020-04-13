import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Shop } from '../model/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private url: String = 'http://localhost:8080/shop';

  constructor(private http: HttpClient) {}

  public findAllShops(): Observable<Shop[]>{
    return this.http.get<Shop[]>(this.url + '/getAllShops');
  }
}
