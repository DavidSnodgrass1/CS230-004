import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchLayoutComponent } from './Layout/Dispatch-Layout-Folder/dispatch-layout.component';
import { HelpLayoutComponent } from './Layout/help-layout.component';
import { HomepageLayoutComponent } from './Layout/homepage-layout.component';
import { SustainLayoutComponent } from './Layout/sustain-layout.component';


const routes: Routes = [
  { path: 'home', component:  HomepageLayoutComponent},
  { path: 'dispatch', component: DispatchLayoutComponent },
  { path: 'start-the-journey', component: HelpLayoutComponent},
  { path: 'sustainability', component: SustainLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }