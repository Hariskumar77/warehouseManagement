import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product.model';
import { Ledger } from '../ledger/ledger.model';
import { ProductInbound } from '../product-inbound/product-inbound.model';
import { ProductOutbound } from './product-outbound.model';
import { Location } from '../location/location.model';

@Injectable({
  providedIn: 'root'
})

export class OutboundService{
    private apiUrl = 'http://localhost:5050/product';
    private apiUrl1 = 'http://localhost:5050/relocation/product';
    private baseUrl: "http://localhost:5050/ledger";
    private baseUrl1: "http://localhost:5050";
    private api = "http://localhost:5050/relocation";
    private outAPI = "http://localhost:5050/product-outbound";


    constructor(private http: HttpClient) { }

    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.apiUrl);
    }

    getLocationsByProductId(productId: Number): Observable<Location[]> {
      return this.http.get<Location[]>(`${this.apiUrl1}/${productId}`);
  }



  postLedger(data:any):Observable<any>{
    return this.http.post<any>(this.baseUrl,data);
  }

  // updateLocationStatusById(id:any,status:string):Observable<any>{
  //   const url = `${this.api}/location/${id}/status/${status}`
  //   return this.http.put<any>(url,{});
  // }
  // getLedgerByProductId(id:any):Observable<any>{
  //   const url = `${this.outAPI}/ledger/${id}`;
  //   return this.http.get<any>(url);
  // }


updateLocation(location:Location){
      console.log(location.statusCode);
      location.statusCode="TEMPORARILY_BLOCKED";
      return this.http.put<Location>('http://localhost:5050/analyze/',location);
    }

  createNewLedger(user:any,product:Product,location:Location,productInbound:ProductInbound,productOutbound:ProductOutbound){
    var ledger: Ledger = new Ledger();
    ledger.inOutTime = new Date();
    ledger.ledgerMode = "OUTBOUND"
    ledger.user=user;
    ledger.product=product;
    ledger.location = location;
    ledger.supplier=productInbound.supplierName;
    ledger.quantity=productOutbound.productQuantity;

    console.log(ledger)
    return this.http.post<Ledger>('http://localhost:5050/ledger',ledger);
  }



  }


