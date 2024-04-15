import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryNavBarComponent } from './inventory-nav-bar/inventory-nav-bar.component';
import { LedgerComponent } from './ledger/ledger.component';
import { LedgerHomeComponent } from './ledger-home/ledger-home.component';
import { AnalyticsHomeComponent } from './analytics-home/analytics-home.component';
import { ProductComponent } from './analytics/product/product.component';
import { UserComponent } from './analytics/user/user.component';
import { MovementComponent } from './analytics/movement/movement.component';
import { InventoryAnalyticsComponent } from './analytics/inventory-analytics/inventory-analytics.component';
import { RobotAnalyticsComponent } from './analytics/robot-analytics/robot-analytics.component';
import { LocationAnalyticsComponent } from './analytics/location-analytics/location-analytics.component';
import { DummyComponent } from './dummy/dummy.component';
import { LedgerDetailsComponent } from './ledger-details/ledger-details.component';
import { LoginComponent } from './login/login.component';
import { firstpagenavComponent } from './firstpagenav/firstpagenav.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { RegisterComponent } from './register/register.component';
import { TitleComponent } from './title/title.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
// import { ProductInboundComponent } from './product-inbound/add-product-inbound/product-inbound.component';
import { LocationAnalyserComponent } from './location-analyser/location-analyser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRelocationComponent } from './product-relocation/product-relocation.component';
import { LocationSuggestionsComponent } from './product-relocation/location-suggestions/location-suggestions.component';

import { RelocationService } from './product-relocation/relocation.service';
import { ProductModule } from './product/product.module';
import { LocationModule } from './location/location.module';
import { ProductInboundModule } from './product-inbound/product-inbound.module';
import { LedgerModule } from './ledger/ledger.module';
import { RouterModule } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserService } from './edit-user/edit.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginService } from './login/login.service';
import { RelocationFormComponent } from './product-relocation/relocation-form/relocation-form.component';
import { ManualEntryComponent } from './product-relocation/manual-entry/manual-entry.component';
import { ProductOutboundComponent } from './product-outbound/product-outbound.component';



@NgModule({
  declarations: [
    AppComponent,
    InventoryNavBarComponent,
    LedgerComponent,
    LedgerHomeComponent,
    AnalyticsHomeComponent,
    ProductComponent,
    UserComponent,
    MovementComponent,
    InventoryAnalyticsComponent,
    RobotAnalyticsComponent,
    LocationAnalyticsComponent,
    DummyComponent,
    LedgerDetailsComponent,
    LoginComponent,
    firstpagenavComponent,
    AboutComponent,
    ServiceComponent,
    ContactusComponent,
    SolutionsComponent,

    

    RegisterComponent,

    TitleComponent,

    DashboardComponent,
    HeaderComponent,
    // ProductInboundComponent,
    LocationAnalyserComponent,
    
    ProductRelocationComponent,
    LocationSuggestionsComponent,
    RelocationFormComponent,
    ManualEntryComponent,


    HeaderComponent,
    SlideComponent,
    ChangePasswordComponent,
    EditUserComponent,
    RequestAccessComponent,
    ForgotPasswordComponent,
    AboutusComponent,
    ProductOutboundComponent,
   

   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    ProductInboundModule,
    LocationModule,
    LedgerModule,
    RouterModule
  ],
  
  providers: [UserService, LoginService, DashboardComponent, EditUserComponent, RelocationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
