import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsServiceService } from '../services/productsServices/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private ProductsServiceService: ProductsServiceService) { }

  ngOnInit() {
    this.ProductsServiceService.findAll()
    .subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

  onDelete(product: Product){
    this.ProductsServiceService.deleteOne(product.productId).subscribe(
      () => {this.products.splice(this.products.indexOf(product), 1);
      });
  }
}
