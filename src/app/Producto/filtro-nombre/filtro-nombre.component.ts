import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../Servicie/producto.service';
import { AgregarCarritoService } from '../Servicie/agregar-carrito.service';
import { Carrito } from '../carrito';
import { CarritoDataService } from '../Servicie/carrito-data.service';

@Component({
  selector: 'app-filtro-nombre',
  templateUrl: './filtro-nombre.component.html',
  styleUrls: ['./filtro-nombre.component.css']
})
export class FiltroNombreComponent implements OnInit {

  productosNombre: any = [];

  producto: Producto[] = [];

  productos: any[] = [];

  detalle: Carrito = {
    id: 0,
    cantidad: 0
  }

  constructor(private productoServicio: ProductoService, 
    private productoCartService: AgregarCarritoService, 
    private agregarCarrito: AgregarCarritoService,
    private carritoData: CarritoDataService) { }

  ngOnInit(): void {
    this.obtenerProductosNombre();
    this.productoCartService.productos
      .subscribe(data => this.productos = data);
  }

  upQuantity(producto: Producto): void {
    if (producto.stock > producto.quantity) {
      producto.quantity++;
      this.agregarCarrito.addToCart(producto);
    }
  }

  downQuantity(producto: Producto): void {
    if (producto.quantity > 0) {
      producto.quantity--;
      this.agregarCarrito.addToCart(producto);
    }
  }

  verifyBeerQuantity(producto: Producto): void {
    if (producto.stock < producto.quantity) {
      alert("No se pueden pedir más de las helados de los que hay en stock");
      producto.quantity = producto.stock;
    }

    if (producto.quantity < 0) {
      alert("No se pueden pedir menos que 0 helados");
      producto.quantity = 0;
    }
  }

  private obtenerProductosNombre() {
    this.productoServicio.obternerProductosCuenca().subscribe(dato => {
      this.productosNombre = dato;
      console.log(dato)
    });
  }

  total() {
    let sum = 0;
    this.productos.forEach(producto => {
      sum += producto.quantity * producto.precio
    });
    return sum;
  }

  // agregarProducto() {
  //   this.carritoData.crearDetalleporId(this.detalle).subscribe(
  //     res=>{
  //       console.log(res)
  //     }
  //   )
  // }

}
