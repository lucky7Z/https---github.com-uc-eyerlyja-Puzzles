import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { ManagementPortalComponent } from './management-portal/management-portal.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customer-portal', component:  CustomerPortalComponent },
  { path: 'employee-portal', component: EmployeePortalComponent },
  { path: 'management-portal', component: ManagementPortalComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
