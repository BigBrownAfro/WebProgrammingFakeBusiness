import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  title:String;

  constructor() { 
    this.title = "My Fake Business";
  }

  ngOnInit() {
  }

}
