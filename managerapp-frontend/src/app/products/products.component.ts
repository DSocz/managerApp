import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { ProductsServiceService } from './products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  flag: boolean;

  constructor(private productsServiceService: ProductsServiceService,
    private productService: ProductService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.productService.findAll().subscribe(data => { this.products = data })
  }

  onDelete(product: Product) {
    this.productsServiceService.confirmDelete('Delete the product', 'Are you f****** sure ... ?', product.productId)
      .then((confirmed) => this.flag = confirmed)
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  editProduct(product: Product) {
    this.openAddOrEditProductDialog(product, 'Edit product');
  }

  addNewProduct() {
    this.openAddOrEditProductDialog(new Product(), 'Add product');
  }

  private openAddOrEditProductDialog(product: Product, windowTitle: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.data = { product, windowTitle };
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);
  }
}
