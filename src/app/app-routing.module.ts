import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer-portal', component:  CustomerPortalComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

