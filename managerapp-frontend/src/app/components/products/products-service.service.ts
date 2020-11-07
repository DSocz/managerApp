import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../model/product';
import { Observable } from 'rxjs';
import { DeleteConfirmationDialogService } from '../confirmationDialogs/delete-confirmation-dialog/delete-confirmation-dialog.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService extends DeleteConfirmationDialogService{

  private usersUrl: string;
  private rowId: number;

  constructor(private http: HttpClient, modalService: NgbModal,
  private productService: ProductService) {
    super(modalService);
    this.usersUrl = 'http://localhost:8080/product';
  }

//TODO remove this file totally

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
    return this.productService.deleteOne(this.rowId).subscribe();
  };
}
