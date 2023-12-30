import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningFactService {
  private baseUrl = 'http://localhost:3000/learning-facts'; // Adjust as needed

  constructor(private http: HttpClient) { }

  getAllFacts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getFactById(Id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${Id}`);
  }

  getFactsByPackageId(Id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/learning-packages/${Id}/learning-facts`);
  }

  createFact(factData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, factData);
  }

  updateFact(id: number, factData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, factData);
  }

  deleteFact(id: number): Observable<any> {
    console.log(`${this.baseUrl}/${id}`)
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
