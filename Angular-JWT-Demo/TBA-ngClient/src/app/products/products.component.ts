import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // product: Product = {
  //   id: 101,
  //   name: 'Tea',
  //   price: 13
  // }

  selectedProduct: Product;
  products = null;


  constructor(private productService: ProductService) {

   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(prods => this.products = prods);
  }
  
  onSelect(prod: Product)
  {
    this.selectedProduct = prod;
  }
}
