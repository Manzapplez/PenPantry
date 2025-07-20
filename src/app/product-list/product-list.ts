import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products: Product[] = [
    {
      name: "nombre producto",
      brand: "marca producto",
      price: 1000,
      stock: 2000
    },
    {
      name: "nombre 2",
      brand: "marca 2",
      price: 1000,
      stock: 2000
    }

  ]

}
