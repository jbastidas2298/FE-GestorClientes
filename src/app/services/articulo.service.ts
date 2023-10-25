import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../constants/constant';


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(
    private http: HttpClient
  ) { }
  
  public listarArticulos(): Observable<any> {
    const url = Constant.urlBase + '/api/articulo';
    return this.http.get<any>(url);
  }
  public listarArticulosPorId(id: number): Observable<any> {
    const url = `${Constant.urlBase}/api/articulo/${id}`; 
    return this.http.get<any>(url);
  }
  public insertarArticulos(data: any): Observable<any> {
    const url = Constant.urlBase + '/api/articulo';
    return this.http.post<any>(url, data);
  }

}
