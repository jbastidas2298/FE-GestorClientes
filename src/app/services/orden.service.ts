import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../constants/constant';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(
    private http: HttpClient
  ) { }
  
  public listarOrden(): Observable<any> {
    const url = Constant.urlBase + '/api/orden';
    return this.http.get<any>(url);
  }
  public listarOrdenPorId(id: number): Observable<any> {
    const url = `${Constant.urlBase}/api/orden/${id}`; 
    return this.http.get<any>(url);
  }
  public insertarOrden(data: any): Observable<any> {
    const url = Constant.urlBase + '/api/orden';
    return this.http.post<any>(url, data);
  }

}