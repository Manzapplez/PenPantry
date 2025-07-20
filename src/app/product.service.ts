import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private products: Product[] = [
    { name: 'Lapicera azul', brand: 'Bic', price: 100, stock: 10, quantity: 0 },
    { name: 'Lapicera roja', brand: 'Bic', price: 100, stock: 5, quantity: 0 },
    { name: 'Lapicera verde', brand: 'Bic', price: 120, stock: 3, quantity: 0 }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  resetQuantities(): void {
    this.products.forEach(p => p.quantity = 0);
  }

  setProducts(products: Product[]): void {
    this.products = products;
  }

  increaseStock(productName: string, quantity: number): void {
    const product = this.products.find(p => p.name === productName);
    if (product) {
      product.stock += quantity;
    }
  }

}