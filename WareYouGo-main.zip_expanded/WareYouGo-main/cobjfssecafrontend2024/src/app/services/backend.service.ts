import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  port: number;
  constructor(private http: HttpClient) {
    this.port = 5050;
  }

  getLedgers(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/ledger`)
  }

  getLedgerById(id: number) : Observable<any>{
    return this.http.get<any>(`http://localhost:${this.port}/ledger/${id}`)
  }

  getSales(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/sales`)
  }

  getProductSales(id:number): Observable<any>{
    return this.http.get<any>(`http://localhost:${this.port}/sales/${id}`)
  }

  getProductLedgers(id: number): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/ledger?productId=${id}`)
  }

  getProducts(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/product`)
  }

  getInventory(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/inventory`)
  }

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/users/fetchallusers`)
  }

  getInventoryLocations(): Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:${this.port}/inventory/locations`)
  }

}
