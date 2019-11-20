import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Cart } from '../cart';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})

export class TitleBarComponent implements OnInit {
  //More on data sharing https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
  @Output() sidebarToggledEvent = new EventEmitter();
  @Output() toCartEvent = new EventEmitter();
  @Input() cart:Cart;
  title:String;

  constructor() { 
    this.title = "Fake Business";
  }

  ngOnInit() {

  }

  onClickLeftSearch(inputElement:HTMLInputElement){
    inputElement.focus();
  }

  _toggleSidebar(){
    this.sidebarToggledEvent.next();
  }

  _goToCart(){
    this.toCartEvent.next();
  }
}
