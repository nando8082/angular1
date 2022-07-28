import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../Servicie/producto.service';
import { AgregarCarritoService } from '../Servicie/agregar-carrito.service';


@Component({
  selector: 'app-filtro-sucursal',
  templateUrl: './filtro-sucursal.component.html',
  styleUrls: ['./filtro-sucursal.component.css']
})
export class FiltroSucursalComponent implements OnInit {

  productosSucursal: any = [];

  producto: Producto[] = [];

  constructor(private productoServicio: ProductoService, private agregarCarrito: AgregarCarritoService) { }


  ngOnInit(): void {
    this.obtenerProductosFiltro();
    }

    upQuantity(producto : Producto): void{
      if(producto.stock > producto.quantity) {
        producto.quantity ++;
        this.agregarCarrito.addToCart(producto);
      }
    }
  
    downQuantity(producto : Producto): void{
      if(producto.quantity > 0) {
        producto.quantity --;
        this.agregarCarrito.addToCart(producto);
      }
    }
  
    verifyBeerQuantity(producto : Producto): void {
      if(producto.stock < producto.quantity) {
        alert("No se pueden pedir más de las helados de los que hay en stock");
        producto.quantity = producto.stock;
      }
  
      if(producto.quantity < 0) {
        alert("No se pueden pedir menos que 0 helados");
        producto.quantity = 0;
      }
    }
  
    private obtenerProductosFiltro(){
      this.productoServicio.obternerProductosFiltro().subscribe(dato =>{
        this.productosSucursal = dato;
        console.log(dato)
      });

}

}
