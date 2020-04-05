import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../model/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/brand';
  }

  public findAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.usersUrl + '/getAllBrands');
  }
}
