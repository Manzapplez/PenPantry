import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  constructor(private productCartService: ProductCartService) { }
}
