import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  usuarioNuevo: Usuario = { 
    id: 0, 
    cedula: '', 
    nombre: '', 
    apellido: '', 
    correo: '', 
    contrasenia: '', 
    telefono: '', 
    direccion: '' }

  ngOnInit(): void {
  }

  agregarUsuario() {
    this.usuarioService.saveUsuario(this.usuarioNuevo).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/login'])
      },
      err => console.log(err)
    );
  }

}
