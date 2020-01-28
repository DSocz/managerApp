import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { DeleteConfirmationDialogService } from '../confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService extends DeleteConfirmationDialogService{

  private usersUrl: string;
  private rowId: number;

  constructor(private http: HttpClient, modalService: NgbModal) {
    super(modalService);
    this.usersUrl = 'http://localhost:8080/product';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.usersUrl + '/products');
  }

  public deleteOne(id: number){
    return this.http.delete<Product>(this.usersUrl + '/deleteOne/' + id);
  }

  public confirmDelete(
  title: string,
  message: string,
  rowId: number,
  btnOkText: string = 'Delete',
  btnCancelText: string = 'Cancel',
  dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean>{
    this.rowId = rowId;
    return super.confirm(title, message, btnOkText, btnCancelText, dialogSize);
  }

  protected afterResultAction(){
    console.log('afterResultAction child class');
    return this.deleteOne(this.rowId).subscribe();
  };
}
