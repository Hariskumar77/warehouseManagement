import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl: string = 'http://localhost:5050'

  constructor(private http: HttpClient) { }

  postLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(this.baseUrl + "/location", location) 
  }

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.baseUrl + "/location")
  }

  deleteLocation(locationId:number):Observable<void> {
    const url = `${this.baseUrl}/location/${locationId}`;
    return this.http.delete<void>(url);
  }

  

  updateLocation(location:Location): Observable<Location> {
    const url = `${this.baseUrl}/location/${location.locationId}`;
    console.log(url)
    return this.http.put<Location>(url,location );
  }
  getLocation(id: number): Observable<Location> {
    return this.http.get<Location>(this.baseUrl + '/location/' + id)
  }
}
