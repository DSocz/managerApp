import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product';
import { Brand } from '../../model/brand';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  brands: Brand[] = [];

  constructor(public dialogRef: MatDialogRef<AddProductComponent>,
              public addProductService: AddProductService) {}

  ngOnInit() {
    this.addProductService.findAllBrands().subscribe(data => { this.brands = data })
   }


}
