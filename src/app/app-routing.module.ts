import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemBrowserComponent } from './item-browser/item-browser.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { TechnologiesUsedComponent } from './technologies-used/technologies-used.component';


const routes: Routes = [
  {path:'', component: ItemBrowserComponent},
  {path:'item-browser', component: ItemBrowserComponent},
  {path:'cart-view', component: CartViewComponent},
  {path:'technologies-used', component: TechnologiesUsedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
