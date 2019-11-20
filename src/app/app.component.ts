import { Component, ViewChildren } from '@angular/core';
import { Cart } from './cart';
import { ITEMS } from './mock-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ITEMS;
  private _opened:boolean;
  cart:Cart;

  constructor(){
    this._opened = false;
    this.cart = new Cart();
    for (var item of this.items){
      this.cart.add(item);
    }
  }

  private _toggleSidebar(){
    const pageContent = document.getElementById("pageContent");
    this._opened = !this._opened;
    if(this._opened){
      pageContent.style.filter = "brightness(.5)";
      pageContent.style.cursor = "default";
    }else{
      pageContent.style.filter = "brightness(1)";
    }
  }

  private _goToCart(){
    console.log("Going to cart page.");
    
  }
}
