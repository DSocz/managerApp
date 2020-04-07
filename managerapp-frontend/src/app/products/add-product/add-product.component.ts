import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../model/product';
import { Brand } from '../../model/brand';
import { BrandService } from '../../service/brand.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  brands: Brand[] = [];
  newProduct: Product;

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public brandService: BrandService,
    public productService: ProductService) {
    this.newProduct = data;
    console.log(this.newProduct.name);
  }

  ngOnInit() {
    this.brandService.findAllBrands().subscribe(data => { this.brands = data })
  }

  saveNewProduct(): void {
    this.productService.saveNewProductInDB(this.newProduct).subscribe();
    this.dialogRef.close();
  }
}
