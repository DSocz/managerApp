import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

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
  product: Product;
  productForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public brandService: BrandService,
    public productService: ProductService) {
    this.product = data;
  }

  ngOnInit() {
    this.brandService.findAllBrands().subscribe(data => { this.brands = data })
    this.productForm = new FormGroup({
      productName: new FormControl(this.product.name),
      selectedBrand: new FormControl(this.product.brand),
      productInci: new FormControl(this.product.inci)
    });
  }

  saveNewProduct(): void {
    this.product.name = this.productForm.value.productName;
    this.product.brand = this.productForm.value.selectedBrand;
    this.product.inci = this.productForm.value.productInci;

    this.productService.saveNewProductInDB(this.product).subscribe();
    this.dialogRef.close();
  }

  compareBrands(b1: Brand, b2: Brand): boolean {
    return b1 && b2 ? b1.brandId === b2.brandId : b1 === b2;
  }
}
