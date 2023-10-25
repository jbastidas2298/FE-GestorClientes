import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Constant } from '../constants/constant';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }
  
  public listarClientes(): Observable<any> {
    const url = Constant.urlBase + '/api/cliente';
    return this.http.get<any>(url);
  }
  public listarClientesPorId(id: number): Observable<any> {
    const url = `${Constant.urlBase}/api/cliente/${id}`; 
    return this.http.get<any>(url);
  }
  public eliminarClientes(id: number): Observable<any> {
    const url = `${Constant.urlBase}/api/cliente/${id}`; 
    return this.http.delete<any>(url);
  }
  public insertarClientes(data: any): Observable<any> {
    const url = Constant.urlBase + '/api/cliente';
    return this.http.post<any>(url, data);
  }
  public actualizarClientes(id: number, data: any): Observable<any> {
    const url = `${Constant.urlBase}/api/cliente/${id}`; 
    return this.http.put<void>(url, data);
  }
}
