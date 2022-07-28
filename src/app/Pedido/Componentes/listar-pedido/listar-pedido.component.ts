import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../Service/pedido.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {

  lista: any = []

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.pedidoService.getProductos().subscribe(
      res => { this.lista=res },
      err => console.log(err)
    )
  }

}
