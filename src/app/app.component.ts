import { Component, ViewChild } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _opened = false;

  private _toggleSidebar(){
    this._opened = !this._opened;
  }
}
