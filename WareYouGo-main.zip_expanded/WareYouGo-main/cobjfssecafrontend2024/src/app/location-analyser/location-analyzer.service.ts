import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ledger } from '../ledger/ledger.model';
import { Location } from '../location/location.model';
import { LocationAnalyzer } from '../models/locationAnalyzer';
import { ProductInbound } from '../product-inbound/product-inbound.model';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})


// class User {

//   // "empId": 25,
//   // "name": "Test Name",
//   // "email": "test@email.com",
//   // "password": "testPassword",
//   // "mobileNumber": "1234567890",
//   // "userType": null

//   empId:number;
//   name:string;
//   email:string;
//   password:string;
//   mobileNumber:string;
//   userType:any;

// }

export class LocationAnalyzerService{
    baseUrl: string = 'http://localhost:5050';

    constructor(private http: HttpClient){}

    getAllAvailableLocations(product: Product): Observable<LocationAnalyzer[]> {
        return this.http.post<LocationAnalyzer[]>(this.baseUrl + '/analyze',product);
    }

    updateLocation(location:Location){
      console.log(location.statusCode);
      location.statusCode="TEMPORARILY_BLOCKED";
      return this.http.put<Location>(this.baseUrl + '/analyze',location);
    }

    createNewLedger(user:any,product:Product,location:Location,productInbound:ProductInbound){
  
      var ledger: Ledger = new Ledger();
      ledger.inOutTime = new Date();
      ledger.ledgerMode = "INBOUND"
      ledger.user=user;
      ledger.product=product;
      //ledger.location=location;
      ledger.location = location;
      ledger.supplier=productInbound.supplierName;
      ledger.quantity=productInbound.quantity;

      console.log(ledger)
      return this.http.post<Ledger>(this.baseUrl + '/ledger',ledger);
    }
}