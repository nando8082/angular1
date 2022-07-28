import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  var1 = localStorage.getItem('usuario')
  var2 = Number(this.var1)
  lista: any = []

  myuser: any

  //myuser: Usuario = { id: 0, cedula: '', nombre: '', apellido: '', correo: '', contrasenia: '', telefono: '', direccion: '' }

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
   
    this.unUsuario();
  }

 /* obtenerUsuario() {
    this.usuarioService.getUsuarios().subscribe(
      res => { this.lista = res },
      err => console.log(err)
    )
  }*/

  unUsuario(){
    this.usuarioService.getUsuario(this.var2).subscribe(
      res=>{this.myuser = res,
      console.log(this.var2)},
      err=>console.log(err)
    )
  }



}
