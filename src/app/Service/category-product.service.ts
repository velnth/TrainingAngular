import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductService {
  private apiUrl = 'https://localhost:7200/api/CategoryProducts'

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/GetAll");
  }

  createData(model: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const option = { headers: headers };
    return this.http.post<any>(this.apiUrl + "/CreateData", model, option);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/GetById/${id}`);
  }
  // getById(id: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/GetById/${id}`);
  // }

  updateData(id: string, model: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/UpdateData/${id}`, model, { headers });
  }

  // updateData(id: string, model: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const option = { headers: headers };
  //   return this.http.put<any>(`${this.apiUrl}/UpdateData/${id}`, model, option);
  // }

  deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteData/${encodeURIComponent(id)}`);
  }

  // deleteData(id: string): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/DeleteData/${id}`);
  // }

}