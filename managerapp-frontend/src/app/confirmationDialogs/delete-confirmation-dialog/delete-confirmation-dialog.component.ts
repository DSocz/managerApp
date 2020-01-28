import { Component, ChangeDetectionStrategy, HostListener, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) { }

  public cancel() {
    this.activeModal.close(false);
    this.close();
  }

  public close() {
   this.activeModal.dismiss();
  }

  public accept(){
    this.activeModal.close(true);
  }

  @HostListener("keydown.esc")
    public onEsc() {
      this.close();
    }

}
