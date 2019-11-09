import { Component, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //pageContent: HTMLDivElement;
  //@ViewChildren('pageContent') pageContent: HTMLDivElement;
  private _opened = false;
  brightness = 1;

  private _toggleSidebar(){
    //@ViewChildren('pageContent') pageContent: HTMLDivElement;
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
