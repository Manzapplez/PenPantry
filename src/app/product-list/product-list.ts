import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})

export class ProductList implements OnInit {
  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    if (product.quantity <= 0) {
      alert("Lapiceran't");
      return;
    }

    if (product.quantity > product.stock) {
      alert('No hay suficiente stock.');
      return;
    }

    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  maxReached(msg: string) {
    alert(msg);
  }
}