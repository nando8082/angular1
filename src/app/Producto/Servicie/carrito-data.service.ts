import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../producto';
import { environment } from 'src/environments/environment';

const URL = 'http://localhost:8080/detalle1/create';
const url1 = 'http://localhost:8080/create

@Injectable({
  providedIn: 'root'
})
export class CarritoDataService {

  private _productos: Producto[] = [];
  private _productosSubjects: BehaviorSubject<Producto[]> = new BehaviorSubject(this._productos);
  public productos: Observable<Producto[]> = this._productosSubjects.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Producto[]>(URL).subscribe(data => {
      this._productos.push(...data);
    });
  }

  create(producto: Producto): void {
    this.http.post<Producto>(URL, producto).subscribe({
      error: error => {
        console.error('There was an error!', error);
      },
      next: data => {
        this._productos.push(data)
      }
    });
  }

  crearDetalleporId(id: number, cantidad: number) {
    this.http.post(url1, id)
  }

}
