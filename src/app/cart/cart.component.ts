import { Component } from '@angular/core';
import { CartService } from '../service-cart/cart.service';

import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
