import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjeta } from '../../Modelo/tarjeta';
import { TarjetaService } from '../../Service/tarjeta.service';

@Component({
  selector: 'app-agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {

  var1 = localStorage.getItem('usuario')
  var2 = Number(this.var1)

  
  tarjetaNueva : Tarjeta={
    id:0,
    nombreTitular:'',
    numTarjeta:'',
    fechaCducidad:'',
    codigoCvv:'',
    tipo:'',
    idUsuario: this.var2
  }

  constructor( private tarjetaService: TarjetaService, private router: Router) { }

  ngOnInit(): void {
    this.agregarTarjeta();
  }


  agregarTarjeta(){
    this.tarjetaService.saveTarjeta(this.tarjetaNueva).subscribe(
      res=>{
        console.log(res)
        console.log(this.tarjetaNueva.idUsuario)
        //this.router.navigate(['/listarTarjetas'])
      }
    )
  }
}
