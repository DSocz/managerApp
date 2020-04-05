import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../../model/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
  this.usersUrl = 'http://localhost:8080/brand';
  }

  public findAllBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.usersUrl + '/getAllBrands');
  }
}
