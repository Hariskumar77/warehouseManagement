import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductInbound } from "./product-inbound.model";

@Injectable({
    providedIn: 'root'
})
export class ProductInboundService {
    private apiUrl = "http://localhost:8000/inbound";

    constructor(private http: HttpClient) {}

    getProductInbound(): Observable<ProductInbound[]> {
        return this.http.get<ProductInbound[]>(this.apiUrl);
    }

    createProductInbound(productInbound: ProductInbound): Observable<ProductInbound> {
        return this.http.post<ProductInbound>(this.apiUrl, productInbound);
    }
}