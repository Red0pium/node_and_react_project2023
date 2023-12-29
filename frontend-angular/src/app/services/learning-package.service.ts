import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningPackageService {
  private baseUrl = 'http://localhost:3000/learning-packages'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getAllPackages(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getPackageById(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}`);
  }

  getPackageFacts(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}/learning-facts`);
  }
}
