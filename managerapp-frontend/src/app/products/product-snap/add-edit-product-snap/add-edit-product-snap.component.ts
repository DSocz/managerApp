import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductSnap } from '../../../model/product-snap';
import { Shop } from '../../../model/shop';
import { Product } from '../../../model/product';
import { ProductService } from '../../../service/product.service';
import { ShopService } from '../../../service/shop.service';

@Component({
  selector: 'app-add-edit-product-snap',
  templateUrl: './add-edit-product-snap.component.html',
  styleUrls: ['./add-edit-product-snap.component.css']
})
export class AddEditProductSnapComponent implements OnInit {

  private productSnapForm: FormGroup;
  private productSnap: ProductSnap;
  windowTitle: string;
  usageLevels: string[] = ['Plenty of', '50/50', 'Almost done'];
  shops: Shop[];
  products: Product[];

  constructor(public dialogRef: MatDialogRef<AddEditProductSnapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private shopService: ShopService) {
    this.windowTitle = data.windowTitle;
    this.productSnap = data.productSnap;
    this.productService.findAll().subscribe(data => { this.products = data });
    this.shopService.findAllShops().subscribe(data => { this.shops = data });
  }

  ngOnInit() {
    this.productSnapForm = new FormGroup({
      productName: new FormControl(this.productSnap.product, [Validators.required]),
      productBrand: new FormControl(this.productSnap.product.brand.brandName, [Validators.required]),
      startDate: new FormControl(this.productSnap.startDate, [Validators.required]),
      endDate: new FormControl(this.productSnap.endDate, [Validators.required]),
      usageLevel: new FormControl(this.productSnap.usageLevel, [Validators.required]),
      price: new FormControl(this.productSnap.price, [Validators.required]),
      shop: new FormControl(this.productSnap.shop, [Validators.required])
    })
  }

  compareProducts(p1: Product, p2: Product): boolean {
    return p1 && p2 ? p1.productId === p2.productId : p1 === p2;
  }

  compareShops(s1: Shop, s2: Shop): boolean {
    return s1 && s2 ? s1.shopId === s2.shopId : s1 === s2;
  }
}
