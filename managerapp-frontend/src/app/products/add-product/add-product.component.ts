import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  newProduct: Product = new Product();

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
    public brandService: BrandService,
    public productService: ProductService) { }

  ngOnInit() {
    this.brandService.findAllBrands().subscribe(data => { this.brands = data })
  }

  saveNewProduct(): void {
    this.productService.saveNewProductInDB(this.newProduct).subscribe();
    this.dialogRef.close();
  }


}
