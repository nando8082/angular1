import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../Service/tarjeta.service';

@Component({
  selector: 'app-listar-tarjetas',
  templateUrl: './listar-tarjetas.component.html',
  styleUrls: ['./listar-tarjetas.component.css']
})
export class ListarTarjetasComponent implements OnInit {


  var1 = localStorage.getItem('usuario')
  var2 = Number(this.var1)
  lista: any = []

  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.listarTarjetas();
  }

  listarTarjetas() {
    this.tarjetaService.obtenertarjetasporCliente(this.var2).subscribe(
      res => {
        this.lista = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  eliminar(id: number){
    this.tarjetaService.deleteTarjeta(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
    )
  }

}
