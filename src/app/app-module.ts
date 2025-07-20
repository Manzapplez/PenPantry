import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { ProductList } from './product-list/product-list';
import { Cart } from './cart/cart';
import { About } from './about/about';

import { FormsModule } from '@angular/forms';
import { Store } from './store/store';

@NgModule({
  declarations: [
    App,
    ProductList,
    Cart,
    About,
    Store
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
