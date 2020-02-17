import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProductComponent>) {}

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
