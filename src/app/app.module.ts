import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainVideo } from './Main_Video_Homepage/Main-video';

import { SecondTopNavBarComponent } from './header/2nd-top-nav-bar-component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { ProductCard } from './product-cards/firstProdCard';
import { MainLayout } from './Layout/main-layout';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    MainVideo,
    ProductCard,
    MainLayout
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 