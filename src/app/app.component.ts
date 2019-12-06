import { Component } from '@angular/core';
import { ITEMS } from './mock-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ITEMS;
  private _opened:boolean;

  constructor(){
    this._opened = false;
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
}
