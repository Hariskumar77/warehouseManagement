import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductRelocation } from '../product-relocation.model';
import { RelocationService } from '../relocation.service';

@Component({
  selector: 'app-relocation-form',
  templateUrl: './relocation-form.component.html',
  styleUrls: ['./relocation-form.component.css']
})
export class RelocationFormComponent implements OnInit {

  relocation: ProductRelocation;

  product : any;

  locations : any[];

  selectedLocation: number;
  
  productId:any;

  relocationForm: FormGroup;
  buttonsFlag: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,private relocationService:RelocationService) {}

  ngOnInit() {
    this.relocation = new ProductRelocation();
    this.relocationForm = this.fb.group({
      productName: ["", Validators.required],
      productCode: ["", Validators.required],
      productDimensionsLength: ["", Validators.required],
      productDimensionsWidth: ["", Validators.required],
      productDimensionsHeight: ["", Validators.required],
      productWeight: ["", Validators.required],
      purchaseOrderNo: ["", Validators.required],
      dateOfDelivery: ["", Validators.required],
      comments: ["", Validators.required],
      relocationReason: ["", Validators.required],
    });
  }

  onRelocationSubmit() {
      this.relocation.productName =
        this.relocationForm.get("productName").value;
      this.relocation.productCode =
        this.relocationForm.get("productCode").value;
      this.relocation.length = this.relocationForm.get(
        "productDimensionsLength"
      ).value;
      this.relocation.width = this.relocationForm.get(
        "productDimensionsWidth"
      ).value;
      this.relocation.height = this.relocationForm.get(
        "productDimensionsHeight"
      ).value;
      this.relocation.productWeight =
        this.relocationForm.get("productWeight").value;
      this.relocation.purchaseOrderNo =
        this.relocationForm.get("purchaseOrderNo").value;
      this.relocation.dateOfDelivery =
        this.relocationForm.get("dateOfDelivery").value;
      this.relocation.comments = this.relocationForm.get("comments").value;
      this.relocation.relocationReason =
        this.relocationForm.get("relocationReason").value;
        //console.log(this.relocationForm.value);
      this.buttonsFlag = true;
      
      this.relocationService.setRelocationDetails(this.relocation);

      this.relocationService.getProductLocations(this.relocation.productCode).subscribe(
        (locations: any[]) => {
          //console.log(locations);
          this.locations = locations;
        },
        (error) => {
          console.error('Error fetching product locations:', error);
        }
      );
      
      
  }

  displayLocationSuggestions() {
    this.relocationService.setProductId(this.productId);
    this.relocationService.setOldLocation(this.selectedLocation);
    this.router.navigate(['/product-relocation/location-suggestions']);
  }

  displayManualEntry() {
    this.relocationService.setProductId(this.productId);
    this.relocationService.setOldLocation(this.selectedLocation);
    this.router.navigate(['/product-relocation/manual-entry']);
  }

  fetchProductDetails(productId: number): void {
    this.productId=productId;
    this.relocationService.getProductDetails(productId).subscribe(
      (data: any) => {
        this.product = data;
        const productDetails = data;
        if (productDetails) {
          //this.product = productDetails;
          // Set form field values based on retrieved product details
          this.relocationForm.patchValue({
            productName: productDetails.name,
            productCode: productDetails.productId,
            productDimensionsLength: productDetails.length,
            productDimensionsWidth: productDetails.width,
            productDimensionsHeight: productDetails.height,
            productWeight: productDetails.weight,
            // Update other fields as needed
          });
        } else {
          this.relocationForm.reset();
          
          this.relocationForm.patchValue({
            relocationReason: ""
          });
          alert("Product is not available");
          console.error('Error: Product details are undefined or null.');
          // Handle the absence of product details if needed
        }
      },
      (error) => {
        this.relocationForm.reset();
        this.relocationForm.patchValue({
          relocationReason: ""
        });
        alert("Product is not available");
        console.error('Error fetching product details:', error);
        // Handle error if needed
      }
    );
  }
  

  onProductIdChange(productId: number): void {
    if (productId) {
      this.fetchProductDetails(productId);
    }
  }



}
