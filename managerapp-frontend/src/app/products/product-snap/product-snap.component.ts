import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { ProductService } from '../../service/product.service';
import { ProductSnap } from '../../model/product-snap';

@Component({
  selector: 'app-product-snap',
  templateUrl: './product-snap.component.html',
  styleUrls: ['./product-snap.component.css']
})
export class ProductSnapComponent implements OnInit {

  private productSnaps: ProductSnap[];
  private inUseCheckbox: boolean = true;

  constructor(private productService: ProductService) {
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
}
