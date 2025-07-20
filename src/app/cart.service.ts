import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCart(product: Product) {
    // throw new Error('Method not implemented.');
  }
  
}
