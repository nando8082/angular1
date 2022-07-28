import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion: Usuario = { id: 0, cedula: '', nombre: '', apellido: '', correo: '', contrasenia: '', telefono: '', direccion: '' }

  obtenerUsuario() {
    this.usuarioService.postLogin(this.iniciarSesion).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/principal'])
        //this.router.navigate(['/listarProductos'])
        localStorage.setItem('usuario', JSON.stringify(res.id))
        console.log( localStorage.getItem('usuario'))
      },
      err => console.log(err)
      
    )
    //localStorage.setItem("iniciarSesion", JSON.stringify(this.iniciarSesion))

  }

}
