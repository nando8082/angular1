import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  var1 = localStorage.getItem('usuario')
  var2 = Number(this.var1)
  lista: any = []

  myuser: any

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.unUsuario();
  }

  unUsuario() {
    this.usuarioService.getUsuario(this.var2).subscribe(
      res => {
        this.myuser = res,
        console.log(this.var2)
      },
      err => console.log(err)
    )
  }

}
