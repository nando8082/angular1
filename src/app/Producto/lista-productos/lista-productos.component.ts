import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Producto } from '../producto';
import { ProductoService } from '../Servicie/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any = [];

  constructor(private productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  private obtenerProductos(){
    this.productoServicio.obternerListaProductos().subscribe(dato =>{
      this.productos = dato;
      console.log(dato)
    });
  }

  

}
