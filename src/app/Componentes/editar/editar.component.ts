import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: string=""
  usuarioActual: Usuario = { id: 0, cedula: '', nombre: '', apellido: '', correo: '', contrasenia: '', telefono: '', direccion: '' }


  constructor(private usuarioService: UsuarioService,
    private activateRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //this.id = this.activateRouter.snapshot.params.id;
  }


}
