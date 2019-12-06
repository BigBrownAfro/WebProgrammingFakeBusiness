import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  cart:Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

  onSelect(item:Item){
    this.cart.add(item)
  }
}
