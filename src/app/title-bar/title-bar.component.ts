import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  title:String;

  constructor() { 
    this.title = "Citio";

    /* <button (click)="onClickMe()">Click me!</button> */
    
  }

  ngOnInit() {
    var searchInput = document.getElementById('search-input')
    if(!searchInput){
      console.log("Search Input doesn't exist")
    }

    var leftSideSearchBar = document.getElementById("left-search");
    if(leftSideSearchBar){
      leftSideSearchBar.addEventListener('click', () => {
        searchInput.focus();
      })
    }else{
      console.log("LeftSideSearchBar doesn't exist");
    }
  }

}
