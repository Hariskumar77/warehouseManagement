import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Location } from "./location.model";
import { ProductRelocation } from "./product-relocation.model";
import { Product } from "./product.model";
import { StatusCode } from "./statusCode";

@Injectable({
  providedIn: "root",
})

export class RelocationService {
  private api = "http://localhost:5050/relocation";
  private productAPI = "http://localhost:5050/product";
  private locationSuggestion = "http://localhost:5050/analyze";
  private ledgerAPI = "http://localhost:5050/ledger";

  constructor(private http: HttpClient) {}

  relocationDetails: any;

  oldLocationId:number;

  newLocationId:number;

  productId:any;


  emailBody : any;

  setProductId(Id:any){
    this.productId = Id;
  }

  getProductId(){
    return this.productId;
  }

  setEmailBody(body:any){
    this.emailBody = body;
  }
  setRelocationDetails(relocation: any) {
    this.relocationDetails = relocation;
  }

  getRelocationDetails() {
    return this.relocationDetails;
  }

  setOldLocation(oldLocationId:number){
    this.oldLocationId = oldLocationId;
  }

  getOldLocation(){
    return this.oldLocationId;
  }

  getProductLocations(productId: number): Observable<any[]> {
    const url = `${this.api}/product/${productId}`;
    return this.http.get<any[]>(url);
  }

  getProductDetails(productId: number): Observable<Product> {
    const url = `${this.productAPI}/${productId}`;
    return this.http.get<Product>(url);
  }

  getRelocationSuggestions(data: Product):Observable<any[]> {
    //console.log("gg",data);
   const dt = this.http.post<any[]>(this.locationSuggestion,data);
   console.log("gg",dt);
    return dt;
  }


  updateLocationStatusById(id:any,status:string):Observable<any>{
    const url = `${this.api}/location/${id}/status/${status}`
    return this.http.put<any>(url,{});
  }

   postLedger(data:any):Observable<any>{
     return this.http.post<any>(this.ledgerAPI,data);
   }

   getLedgerByProductId(id:any,lid:any):Observable<any>{
     const url = `${this.api}/productDetails/${id}/location/${lid}`;
     return this.http.get<any>(url);
   }

  postEmail(): Observable<any> {
    return this.http.post("https://api.emailjs.com/api/v1.0/email/send", {
      service_id: "service_c1s2f17",
      template_id: "template_rxuqmbf",
      user_id: "8srAsdeOFG88nugJY",
      template_params: {
        to_name: "Goutham",
        from_name: "WYGAdmin",
        message: "Product Relocated",
        to_email: "gouthamgk2016@gmail.com",
      },
    });
  }

}
