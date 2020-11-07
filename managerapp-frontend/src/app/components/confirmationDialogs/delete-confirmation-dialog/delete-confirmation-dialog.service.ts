import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteConfirmationDialogService {

  constructor(protected modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    // rowId: number,
    btnOkText: string = 'Delete',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(DeleteConfirmationDialogComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    modalRef.result.then((result) => {
      if(result === true){
        this.afterResultAction();
      }
    });
    return modalRef.result;
  }

  protected afterResultAction(){
    console.log('afterResultAction parent class');
  }

}
