import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './components/components.component';
import { ManagmentPortalComponent } from './managment-portal/managment-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SharedComponent,
    ComponentsComponent,
    ManagmentPortalComponent,
    EmployeePortalComponent,
    CustomerPortalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
