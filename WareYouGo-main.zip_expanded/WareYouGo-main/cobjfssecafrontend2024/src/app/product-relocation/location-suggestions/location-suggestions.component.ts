import { Component, OnInit } from '@angular/core';
import { Location } from '../location.model';
import { ProductRelocation } from '../product-relocation.model';
import { Product } from '../product.model';
import { RelocationService } from '../relocation.service';
import { StatusCode } from '../statusCode';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-location-suggestions',
  templateUrl: './location-suggestions.component.html',
  styleUrls: ['./location-suggestions.component.css']
})
export class LocationSuggestionsComponent implements OnInit {

  relocationDetails:ProductRelocation;

  productId : any;

  product : Product | undefined;
  locationSuggestions : any[] ;

  oldLocationId:any;

  selectedLocation:any;

  ledgerByproductId : any;

  constructor(private relocationService:RelocationService,private router: Router,private loginService: LoginService) { }

  ngOnInit() {
    this.relocationDetails = this.relocationService.getRelocationDetails();
    this.productId = this.relocationService.getProductId();
    this.oldLocationId=this.relocationService.getOldLocation();
    this.relocationService.getProductDetails(this.relocationDetails.productCode).subscribe(
      (data:Product)=>{
       // console.log(data);
        this.product = data;
        this.relocationService.getRelocationSuggestions(this.product).subscribe(
          (data:any)=>{
            this.locationSuggestions = data;
           // console.log(this.locationSuggestions);
          }
        );
        this.relocationService.getLedgerByProductId(this.relocationDetails.productCode,this.relocationService.getOldLocation()).subscribe(
          (res:any)=>{
            this.ledgerByproductId=res;
          }
        )
      }
    );  
  }

  getLedgerMode(mode: string): number {
    switch (mode) {
      case 'internalMovement':
        return 3;
      case 'rejectionReturn':
        return 4;
      case 'damaged':
        return 5;
      default:
        return 0; // Handle invalid mode
    }
  }

  temporaryBlock(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
    const day = ('0' + currentDate.getDate()).slice(-2);
    const hours = ('0' + currentDate.getHours()).slice(-2);
    const minutes = ('0' + currentDate.getMinutes()).slice(-2);
    const seconds = ('0' + currentDate.getSeconds()).slice(-2);
    const inOutTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

    const ledgerMode = this.getLedgerMode(this.relocationDetails.relocationReason);
    const productId = parseInt(this.productId);
    //const empId = 1;
    const locationId = this.selectedLocation;
    const supplier = this.ledgerByproductId.supplier;
    const quantity = this.ledgerByproductId.quantity;
    var user = this.loginService.getCookie();

    const data:any = {
      "inOutTime": inOutTime,
      "ledgerMode": ledgerMode,
      "product": {
        "productId": productId
      },
      "user": {
        "empId": user.empId
      },
      "location": {
        "locationId": locationId
      },
      "supplier": supplier,
      "quantity": quantity
    };
    console.log(data);
    this.relocationService.updateLocationStatusById(this.oldLocationId,'DEFAULT').subscribe(
      (res:any)=>{
        console.log("Old Location Status Changed");
      }
    );
    this.relocationService.updateLocationStatusById(locationId,'TEMPORARILY_BLOCKED').subscribe(
      (res:any)=>{
        console.log("New Location Status Changed");
      }
    );;
    this.relocationService.postLedger(data).subscribe(
      (res:any)=>{
        console.log("Ledger Created");
        const body=`Product(ID:${productId}) is relocated from location(ID:${this.oldLocationId}) to location(ID:${locationId})`;
        this.relocationService.setEmailBody(body);
        alert("Temporarily Blocked");
      }
    );;
    this.relocationService.postEmail().subscribe(
      (res : any)=>{
        console.log("Email Sent");
      }
    );
    this.router.navigate(['/product-relocation'])
  }


}
