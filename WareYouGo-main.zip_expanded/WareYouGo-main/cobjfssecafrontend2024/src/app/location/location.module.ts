import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationComponent } from './add-location/add-location.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { DeleteLocationComponent } from './delete-location/delete-location.component';



@NgModule({
  declarations: [AddLocationComponent, UpdateLocationComponent, DeleteLocationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LocationModule { }
