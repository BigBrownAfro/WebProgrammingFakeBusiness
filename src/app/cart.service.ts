import { Injectable} from '@angular/core';
import { Cart } from './cart';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:Cart = new Cart();
  itemsJsonURL = "assets/items.json"
  items:Item[] = [];
  searchFilter:String = "";

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  getJSON(){
    return this.http.get(this.itemsJsonURL);
  }

  loadItems(){
    this.getJSON().subscribe((res : any[]) => {
      res["items"].forEach(element => {
        this.items.push(new Item(element["name"], element["price"], element["category"], element["imageURL"]));
      });
    });
  }

  getSearchFilter():String{
    return this.searchFilter;
  }

  getCart(): Cart{
    return this.cart;
  }

  getItems(): Item[]{
    return this.items;
  }

  setSearchFilter(str){
    this.searchFilter = str;
  }
}