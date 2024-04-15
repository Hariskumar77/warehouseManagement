import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInboundComponent } from './add-product-inbound/product-inbound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ProductInboundComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductInboundModule { }

// pass the productinbound form and product as @Input to location analyzer
