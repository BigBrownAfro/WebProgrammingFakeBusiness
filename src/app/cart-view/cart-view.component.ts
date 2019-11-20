import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart';
import { Item } from '../item';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  @Input() cart:Cart;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item:Item){
    this.cart.add(item)
  }
}
