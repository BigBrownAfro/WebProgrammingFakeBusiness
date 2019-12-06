import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { ItemBrowserComponent } from './item-browser/item-browser.component';
import { TechnologiesUsedComponent } from './technologies-used/technologies-used.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SidebarContentComponent,
    CartViewComponent,
    ItemBrowserComponent,
    TechnologiesUsedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
