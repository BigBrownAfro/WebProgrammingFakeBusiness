import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})

export class TitleBarComponent implements OnInit {
  @Output() sidebarToggledEvent = new EventEmitter();
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
}
