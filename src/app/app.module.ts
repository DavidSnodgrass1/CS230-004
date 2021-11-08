import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainVideo } from './Main_Video_Homepage/Main-video';
import { SecondTopNavBarComponent } from './header/2nd-top-nav-folder/2nd-top-nav-bar-component';
import { TopNavBarComponent } from './header/top-nav-folder/top-nav-bar.component';
import { ProductCard } from './product-cards/firstProdCard';
import { MainLayout } from './Layout/Main-Layout-Folder/main-layout';
import { AppRoutingModule } from './app-routing.module';
import { DispatchLayoutComponent } from './Layout/Dispatch-Layout-Folder/dispatch-layout.component';
import { HomepageLayoutComponent } from './Layout/Homepage-Layout-Folder/homepage-layout.component';
import { NavigationComponent } from './header/navigation-folder/navigation.component';
import { HelpLayoutComponent } from './Layout/Help-Layout-Folder/help-layout.component';
import { SustainLayoutComponent } from './Layout/Sustain-Layout-Folder/sustain-layout.component';
import { StoresLayoutComponent } from './Layout/Stores-Layout-Folder/stores-layout.component';
import { NewForMenLayoutComponent } from './Layout/New-ForMen-Layout/new-for-men-layout.component';
import { ProductCardComponent } from './Body/Prod-Card-Folder/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info-folder/user-info.component';
import { CreateAccountLayoutComponent } from './Layout/Create-Account-Layout-Folder/create-account-layout.component';
import { FormsModule } from '@angular/forms';
import { AccountInfoLayoutComponent } from './Layout/Account-Info-Folder/account-info-layout.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';

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
    StoresLayoutComponent,
    NewForMenLayoutComponent,
    ProductCardComponent,
    UserInfoComponent,
    CreateAccountLayoutComponent,
    AccountInfoLayoutComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'lv-app'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 