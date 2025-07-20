import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  constructor(private productService: ProductService) { }

  addToCart(product: Product): void {
    const existing = this.cart.find(p => p.name === product.name);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.cart.push({ ...product });
    }
    this.cartSubject.next(this.cart);
  }

  getCart() {
    return this.cartSubject.asObservable();
  }

  removeOneFromCart(productName: string): void {
    const item = this.cart.find(p => p.name === productName);
    if (!item) return;

    item.quantity--;

    this.productService.increaseStock(productName, 1);

    if (item.quantity <= 0) {
      this.cart = this.cart.filter(p => p.name !== productName);
    }

    this.cartSubject.next(this.cart);
  }
}
