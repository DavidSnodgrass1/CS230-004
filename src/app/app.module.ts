import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainVideo } from './Main_Video_Homepage/Main-video';
import { SecondTopNavBarComponent } from './header/2nd-top-nav-bar-component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { ProductCard } from './product-cards/firstProdCard';
import { MainLayout } from './Layout/main-layout';
import { AppRoutingModule } from './app-routing.module';
import { DispatchLayoutComponent } from './Layout/Dispatch-Layout-Folder/dispatch-layout.component';
import { HomepageLayoutComponent } from './Layout/homepage-layout.component';
import { NavigationComponent } from './header/navigation.component';
import { HelpLayoutComponent } from './Layout/help-layout.component';
import { SustainLayoutComponent } from './Layout/sustain-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondTopNavBarComponent,
    MainVideo,
    ProductCard,
    MainLayout,
    DispatchLayoutComponent,
    HomepageLayoutComponent,
    NavigationComponent,
    HelpLayoutComponent,
    SustainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 