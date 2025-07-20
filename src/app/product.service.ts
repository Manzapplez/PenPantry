import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { HttpClient } from '@angular/common/http'; // PARA EL API

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // private apiURL = "";

  private products: Product[] = [
    { name: 'Lapicera azul', brand: 'Bic', price: 100, stock: 10, quantity: 0 },
    { name: 'Lapicera roja', brand: 'Bic', price: 100, stock: 5, quantity: 0 },
    { name: 'Lapicera verde', brand: 'Bic', price: 120, stock: 3, quantity: 0 }
  ];

  /* constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }
  */

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