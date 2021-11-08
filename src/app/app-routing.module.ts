import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AccountInfoLayoutComponent } from './Layout/Account-Info-Folder/account-info-layout.component';
import { CreateAccountLayoutComponent } from './Layout/Create-Account-Layout-Folder/create-account-layout.component';
import { DispatchLayoutComponent } from './Layout/Dispatch-Layout-Folder/dispatch-layout.component';
import { HelpLayoutComponent } from './Layout/Help-Layout-Folder/help-layout.component';
import { HomepageLayoutComponent } from './Layout/Homepage-Layout-Folder/homepage-layout.component';
import { NewForMenLayoutComponent } from './Layout/New-ForMen-Layout/new-for-men-layout.component';
import { StoresLayoutComponent } from './Layout/Stores-Layout-Folder/stores-layout.component';
import { SustainLayoutComponent } from './Layout/Sustain-Layout-Folder/sustain-layout.component';


const routes: Routes = [
  { path: 'home', component:  HomepageLayoutComponent},
  { path: 'dispatch', component: DispatchLayoutComponent },
  { path: 'start-the-journey', component: HelpLayoutComponent},
  { path: 'sustainability', component: SustainLayoutComponent},
  { path: 'stores', component: StoresLayoutComponent},
  { path: 'new/men', component : NewForMenLayoutComponent},
  { path: 'create-account', component : CreateAccountLayoutComponent},
  { path: 'account-info', component : AccountInfoLayoutComponent},
  { path: 'auth', component : AuthComponent},
  { path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
