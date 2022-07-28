import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { AgregarCarritoService } from '../Servicie/agregar-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos : any[] = [];
  constructor(private productoCartService: AgregarCarritoService) { }

  ngOnInit(): void {
    this.productoCartService.productos
    .subscribe(data => this.productos = data);
  }

  total(){
    let sum=0;
    this.productos.forEach(producto => {
      sum += producto.quantity * producto.precio
    });
    return sum;
  }

  confirmar(){
    alert("Pedido realizado")
  }

}
