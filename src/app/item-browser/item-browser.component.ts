import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-browser',
  templateUrl: './item-browser.component.html',
  styleUrls: ['./item-browser.component.css']
})
export class ItemBrowserComponent implements OnInit {
  items:Item[];
  searchFilter;

  constructor(private cartService: CartService) {
    this.items = cartService.getItems();
    this.searchFilter = cartService.getSearchFilter();

    this.applyFilter();
  }

  ngOnInit() {
  }

  applyFilter(){
    if(this.searchFilter !== ""){
      var tempArray = [];
      for(var i = 0; i < this.items.length; i++){
        var item = this.items[i];
        if(item.name.toLowerCase().includes(this.searchFilter.toLowerCase())){
          tempArray.push(item);
        }
      }
      this.items = tempArray;
      this.cartService.searchFilter = "";
    }
  }

  addToCart(item:Item){
    this.cartService.getCart().add(item);
  }

}
