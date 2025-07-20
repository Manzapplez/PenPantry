import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})

export class Cart implements OnInit {
  products: Product[] = [];

  constructor(private cartService: ProductCartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(products => {
      this.products = products;
    });
  }

  total(): number {
    return this.products.reduce((acc, p) => acc + p.price * p.quantity, 0);
  }

  removeOneFromCart(name: string): void {
    this.cartService.removeOneFromCart(name);
  }

}
