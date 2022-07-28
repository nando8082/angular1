import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../Modelo/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = 'http://localhost:8080/pedidos'
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.url)
  }

  getProducto(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }

  saveProducto(pedido: Pedido): Observable<any> {
    return this.http.post(this.url, pedido)
  }

  editProducto(id: number, pedido: Pedido): Observable<any> {
    return this.http.put(this.url + '/' + id, pedido)
  }

  deleteProducto(id: number): Observable<any> {
    {
      return this.http.delete(this.url + '/' + id)
    }
  }

}
