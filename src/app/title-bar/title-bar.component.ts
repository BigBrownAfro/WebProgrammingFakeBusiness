import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})

export class TitleBarComponent implements OnInit {
  title:String;

  constructor() { 
    this.title = "Bideo Gaming";
  }

  ngOnInit() {

  }

  onClickLeftSearch(inputElement:HTMLInputElement){
    inputElement.focus();
  }

}
