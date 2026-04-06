import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTableComponent,
    ProductsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
