import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../producto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarCarritoService {
  
  private _productos : Producto[] = [];
  private _productosSubjects : BehaviorSubject<Producto[]> = new BehaviorSubject(this._productos);
  public productos : Observable<Producto[]> = this._productosSubjects.asObservable();
  constructor() { }

  addToCart(producto:Producto){
    let index = this._productos.findIndex(b => b.nombre === producto.nombre);
    if(index === -1)
      this._productos.push(producto);
    else
      this._productos[index].quantity = producto.quantity;
    if (producto.quantity == 0){
      this._productos.splice(index,1);
    }
  }

}
