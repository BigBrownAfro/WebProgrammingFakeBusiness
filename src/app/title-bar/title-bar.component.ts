import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { CartService} from '../cart.service';
import { Cart } from '../cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})

export class TitleBarComponent implements OnInit {
  //More on data sharing https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
  searchInput:HTMLElement;
  @Output() sidebarToggledEvent = new EventEmitter();
  cart:Cart;
  title:String;

  constructor(private cartService:CartService, private router:Router) { 
    this.title = "Fake Business";
    this.cart = cartService.getCart();
    
  }

  ngOnInit() {
    this.searchInput = document.getElementById('input');
    this.searchInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13){
        event.preventDefault();
        document.getElementById('button').click();
      }
    })
  }

  onClickLeftSearch(inputElement:HTMLInputElement){
    inputElement.focus();
  }

  onClickSearch(inputElement:HTMLInputElement){
    this.cartService.setSearchFilter(inputElement.value);
    console.log(this.cartService.getSearchFilter());
    this.router.navigateByUrl('/cart-view').then(() => {
      this.router.navigateByUrl('/item-browser');
    });
  }
  _toggleSidebar(){
    this.sidebarToggledEvent.next();
  }
}
