import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

@NgModule({
  declarations: [AddProductComponent,UpdateProductComponent, DeleteProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
