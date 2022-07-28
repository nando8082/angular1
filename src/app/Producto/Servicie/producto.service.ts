import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  //Esta URL obtiene los productos de backend
  private baseURL = "http://localhost:8080/productos";
  private urlCuenca = "http://localhost:8080/productos/sucursal/Heladeria1";
  private filtro = "http://localhost:8080/productos/sucursal/Giron";

  constructor(private httpClient : HttpClient) { }

  ListaProductos(url: string){
    return this.httpClient.get(url);
  }

  obternerListaProductos():Observable<any>{
    return this.httpClient.get(`${this.baseURL}`);

  }

  obternerProductosCuenca():Observable<any>{
    return this.httpClient.get(`${this.urlCuenca}`);

  }

  obternerProductosFiltro():Observable<any>{
    return this.httpClient.get(`${this.filtro}`);

  }
}
