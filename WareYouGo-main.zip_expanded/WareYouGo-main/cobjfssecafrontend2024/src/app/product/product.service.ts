import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = 'http://localhost:5050'

  constructor(private http: HttpClient) { }

  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + '/product', product)
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/product/' + id)
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + '/product')
  }

  deleteProduct(productId:number):Observable<void> {
    
    return this.http.delete<void>(this.baseUrl+'/product/'+productId);
  }
 
  updateProduct(productId:number,productData: Product): Observable<Product> {
    const url = `${this.baseUrl}/product/${productId}`;
    return this.http.put<Product>(url, productData);
}
  updateCurrentStock(id: number, stock: number): Observable<Product[]> {
    return this.http.post<Product[]>(this.baseUrl + '/product/' + id + '/addcurrentstock', {"stock": stock})
  }
}
