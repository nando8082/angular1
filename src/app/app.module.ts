import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { FormsModule } from '@angular/forms';

import { ListarPedidoComponent } from './Pedido/Componentes/listar-pedido/listar-pedido.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ListarTarjetasComponent } from './Tarjeta/Component/listar-tarjetas/listar-tarjetas.component';
import { AgregarTarjetaComponent } from './Tarjeta/Component/agregar-tarjeta/agregar-tarjeta.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarritoComponent } from './Producto/carrito/carrito.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaProductosComponent } from './Producto/lista-productos/lista-productos.component';
import { FiltroSucursalComponent } from './Producto/filtro-sucursal/filtro-sucursal.component';
import { FiltroNombreComponent } from './Producto/filtro-nombre/filtro-nombre.component';
import { ActualizartarjetaComponent } from './Tarjeta/Component/actualizartarjeta/actualizartarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    ListarPedidoComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListarTarjetasComponent,
    AgregarTarjetaComponent,
    PrincipalComponent,
    CarritoComponent,
    ListaProductosComponent,
    FiltroSucursalComponent,
    FiltroNombreComponent,
    ActualizartarjetaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
