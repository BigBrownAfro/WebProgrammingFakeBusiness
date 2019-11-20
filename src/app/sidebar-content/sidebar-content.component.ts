import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent implements OnInit {
  @Output() sidebarToggledEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  _toggleSidebar(){
    this.sidebarToggledEvent.next();
  }
}
