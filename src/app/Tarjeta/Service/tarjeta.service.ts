import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarjeta } from '../Modelo/tarjeta';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  url = 'http://localhost:8080/tarjeta'
  url1 = 'http://localhost:8080/tarjeta/crear'
  url2 = 'http://localhost:8080/tarjeta/eliminar'
  url3= 'http://localhost:8080/tarjeta/myCards1'
  

  constructor(private http: HttpClient) { }

  getTarjetas(): Observable<any> {
    return this.http.get(this.url)
  }

  getTarjeta(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  saveTarjeta( tarjeta: Tarjeta): Observable<any> {
    return this.http.post(this.url1, tarjeta)
  }

  editTarjeta(id: number, tarjeta: Tarjeta): Observable<any> {
    return this.http.put(this.url + '/' + id, tarjeta)
  }

  deleteTarjeta(id: number): Observable<any> {
    {
      return this.http.delete(this.url2 + '/' + id)
    }
  }

  public obtenertarjetasporCliente(id: number) {
    return this.http.get(this.url3 + '/' + id);
  }
}
