import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductSnap } from '../../../model/product-snap';

@Component({
  selector: 'app-add-edit-product-snap',
  templateUrl: './add-edit-product-snap.component.html',
  styleUrls: ['./add-edit-product-snap.component.css']
})
export class AddEditProductSnapComponent implements OnInit {

  private productSnapForm: FormGroup;
  private productSnap: ProductSnap;
  windowTitle: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(public dialogRef: MatDialogRef<AddEditProductSnapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.windowTitle = data.windowTitle;
    this.productSnap = data.productSnap;
  }

  ngOnInit() {
    this.productSnapForm = new FormGroup({
      productName: new FormControl(this.productSnap.product.name),
      productBrand: new FormControl(this.productSnap.product.brand.brandName),
      startDate: new FormControl(this.productSnap.startDate),
      endDate: new FormControl(this.productSnap.endDate)
    })
  }

}
