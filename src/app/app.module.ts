import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedComponent } from './shared/shared.component';
import { ComponentsComponent } from './components/components.component';
import { ManagementPortalComponent } from './management-portal/management-portal.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { CommercialPortalComponent } from './commercial-portal/commercial-portal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { NavComponent } from './nav/nav.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
    SharedComponent,
    ComponentsComponent,
    ManagementPortalComponent,
    EmployeePortalComponent,
    CustomerPortalComponent,
    CommercialPortalComponent,
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,    
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
