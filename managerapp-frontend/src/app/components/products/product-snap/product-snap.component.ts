import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEditProductSnapComponent } from './add-edit-product-snap/add-edit-product-snap.component';

import { ProductService } from '../../../service/product.service';
import { ProductSnap } from '../../../model/product-snap';
import { Product } from '../../../model/product';
import { Brand } from '../../../model/brand';

@Component({
  selector: 'app-product-snap',
  templateUrl: './product-snap.component.html',
  styleUrls: ['./product-snap.component.css']
})
export class ProductSnapComponent implements OnInit {

  productSnaps: ProductSnap[];
  private inUseCheckbox: boolean = true;
  private emptyProductSnap: ProductSnap = new ProductSnap();

  constructor(private productService: ProductService,
    public dialog: MatDialog) {
    this.emptyProductSnap.product = new Product();
    this.emptyProductSnap.product.brand = new Brand();
  }

  ngOnInit() {
    this.productService.findAllInUseProductSnaps().subscribe(data => { this.productSnaps = data })
  }

  checked() {
    if (this.inUseCheckbox) {
      this.productService.findAllInUseProductSnaps().subscribe(data => { this.productSnaps = data })
    } else {
      this.productService.findAllNotInUseProductSnaps().subscribe(data => { this.productSnaps = data })
    }
  }

  editProductSnap(productSnap: ProductSnap) {
    this.openAddOrEditProductSnapDialog(productSnap, 'Edit product', false);
  }

  addNewProductSnap() {
    this.openAddOrEditProductSnapDialog(this.emptyProductSnap, 'Add product', true);
  }

  private openAddOrEditProductSnapDialog(productSnap: ProductSnap, windowTitle: string,
    isNewProductSnap: boolean): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.data = { productSnap, windowTitle, isNewProductSnap };
    const dialogRef = this.dialog.open(AddEditProductSnapComponent, dialogConfig);
  }

  onDelete(productSnap: ProductSnap) {
    // this.productsServiceService.confirmDelete('Delete the product', 'Are you f****** sure ... ?', product.productId)
    //   .then((confirmed) => this.flag = confirmed)
    //   .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
