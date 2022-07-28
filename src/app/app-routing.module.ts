import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ListarPedidoComponent } from './Pedido/Componentes/listar-pedido/listar-pedido.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarritoComponent } from './Producto/carrito/carrito.component';
import { FiltroNombreComponent } from './Producto/filtro-nombre/filtro-nombre.component';
import { FiltroSucursalComponent } from './Producto/filtro-sucursal/filtro-sucursal.component';
import { ListaProductosComponent } from './Producto/lista-productos/lista-productos.component';
import { AgregarTarjetaComponent } from './Tarjeta/Component/agregar-tarjeta/agregar-tarjeta.component';
import { ListarTarjetasComponent } from './Tarjeta/Component/listar-tarjetas/listar-tarjetas.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'inicio', component: InicioComponent },
  { path: 'editar/:id', component: EditarComponent },

  { path: 'agregar', component: AgregarComponent },

  { path: 'listarPedidos', component: ListarPedidoComponent },

  { path: 'login', component: LoginComponent },

  { path: 'listarTarjetas', component: ListarTarjetasComponent },

  { path: 'agregarTarjetas', component: AgregarTarjetaComponent },

  {path: 'principal', component: PrincipalComponent},

  {path: 'carrito', component: CarritoComponent},

  {path: 'productos', component: FiltroSucursalComponent},

  {path: 'Cuenca', component: FiltroNombreComponent},

  {path: 'Giron', component: FiltroSucursalComponent},

  {path: 'crearUsuario', component: AgregarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
