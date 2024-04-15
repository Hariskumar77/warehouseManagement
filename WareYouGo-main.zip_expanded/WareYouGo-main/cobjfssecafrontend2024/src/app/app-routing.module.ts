import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsHomeComponent } from "./analytics-home/analytics-home.component";
import { InventoryAnalyticsComponent } from "./analytics/inventory-analytics/inventory-analytics.component";
import { LocationAnalyticsComponent } from "./analytics/location-analytics/location-analytics.component";
import { MovementComponent } from "./analytics/movement/movement.component";
import { ProductComponent } from "./analytics/product/product.component";
import { RobotAnalyticsComponent } from "./analytics/robot-analytics/robot-analytics.component";
import { UserComponent } from "./analytics/user/user.component";
import { DummyComponent } from "./dummy/dummy.component";

import { LedgerDetailsComponent } from "./ledger-details/ledger-details.component";
import { LedgerHomeComponent } from "./ledger-home/ledger-home.component";
import { AddLocationComponent } from "./location/add-location/add-location.component";
import { AddProductComponent } from "./product/add-product/add-product.component";
import { ProductInboundComponent } from "./product-inbound/add-product-inbound/product-inbound.component";
import { LocationAnalyserComponent } from "./location-analyser/location-analyser.component";
import { LocationSuggestionsComponent } from "./product-relocation/location-suggestions/location-suggestions.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

import { firstpagenavComponent } from "./firstpagenav/firstpagenav.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RequestAccessComponent } from "./request-access/request-access.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HeaderComponent } from "./header/header.component";
import { ManualEntryComponent } from "./product-relocation/manual-entry/manual-entry.component";
import { ProductRelocationComponent } from "./product-relocation/product-relocation.component";
import { RelocationFormComponent } from "./product-relocation/relocation-form/relocation-form.component";
import { UpdateProductComponent } from "./product/update-product/update-product.component";
import { DeleteProductComponent } from "./product/delete-product/delete-product.component";
import { UpdateLocationComponent } from "./location/update-location/update-location.component";
import { DeleteLocationComponent } from "./location/delete-location/delete-location.component";
import { ProductOutboundComponent } from './product-outbound/product-outbound.component';

const routes: Routes = [
  // {path: '', redirectTo: 'inventory', pathMatch: 'full'},
    
  // { path: '', component: DashboardComponent },
  { path: "", component: firstpagenavComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgotpassword", component: ForgotPasswordComponent },
  {
    path: "",
    component: HeaderComponent,
    children: [
      {path: 'inventory', component: DummyComponent},
    {path: 'ledgers/:ledgerId', component: LedgerDetailsComponent},
    {path: 'ledgers', component: LedgerHomeComponent},
    {path:'analytics',component: AnalyticsHomeComponent, children: [
        { path: 'products', component: ProductComponent},
        { path: 'users', component: UserComponent},
        { path: 'warehouse-movement', component: MovementComponent},
        { path: 'inventory-analytics', component: InventoryAnalyticsComponent},
        { path: 'robot-analytics', component: RobotAnalyticsComponent},
        { path: 'location-analytics', component: LocationAnalyticsComponent},
    ]},
      { path: "product", component: AddProductComponent },
      { path: "location", component: AddLocationComponent },
      { path: "product-inbound", component: ProductInboundComponent },
      { path: "product-outbound", component: ProductOutboundComponent },
      { path: "display-locations", component: LocationAnalyserComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "edituser", component: EditUserComponent },
      { path: "changepassword", component: ChangePasswordComponent },
      { path: "requestaccess", component: RequestAccessComponent },
      {path: "product-update",component:UpdateProductComponent},
      {path:"product-delete",component:DeleteProductComponent},
      {path:"location-update",component:UpdateLocationComponent},
      {path:"location-delete",component:DeleteLocationComponent},
      {
        path: "product-relocation",
        redirectTo: "/product-relocation/relocation-form",
        pathMatch: "full",
      },
      {
        path: "product-relocation",
        component: ProductRelocationComponent,
        children: [
          {
            path: "location-suggestions",
            component: LocationSuggestionsComponent,
          },
          { path: "manual-entry", component: ManualEntryComponent },
          { path: "relocation-form", component: RelocationFormComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation : 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
