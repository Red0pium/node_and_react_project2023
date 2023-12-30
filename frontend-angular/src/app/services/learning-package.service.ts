import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { LearningFactService } from "./learning-fact.service";

@Injectable({
  providedIn: 'root'
})
export class LearningPackageService {
  private baseUrl = 'http://localhost:3000/learning-packages'; // Update with your API URL

  constructor(private http: HttpClient, private factService: LearningFactService) { }

  getAllPackages(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getPackageById(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}`);
  }

  getPackageFacts(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}/learning-facts`);
  }

  createPackage(factData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, factData);
  }

  updatePackage(id: number, factData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, factData);
  }

  deletePackage(packageId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${packageId}`, { responseType: 'text' });
  }
}
