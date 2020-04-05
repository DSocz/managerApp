import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsServiceService } from './products-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductService } from '../service/product.service';

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

  openAddProductDialog(): void {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "addProductDialog";
    dialogConfig.panelClass = 'custom-dialog-container';

    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
    });
  }

}
