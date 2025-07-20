import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})

export class ProductList { //implements OnInit?
  products: Product[] = [ // MOCK DATA
    {
      name: "nombre producto",
      brand: "marca producto",
      price: 1000,
      stock: 2,
      quantity: 0,
    },
    {
      name: "nombre 2",
      brand: "marca 2",
      price: 1000,
      stock: 3,
      quantity: 0,
    },
    {
      name: "nombre 3",
      brand: "marca",
      price: 1000,
      stock: 0,
      quantity: 0,
    }
  ];

  constructor() { }
  ngOnInit(): void { }

  // UNSURE
  downQuantity(product: Product) {
    if (product.quantity > 0)
      product.quantity--
  }

  upQuantity(product: Product) {
    if (product.quantity < product.stock)
      product.quantity++
  }

  /*
  addToCart(product : Product) {
  if (!product.quantity || product.quantity < 1)
    alert("Lapiceran't");
  return;
  }

  this.cartService.addToCart(product)
   product.quantity = 0;
  */
}