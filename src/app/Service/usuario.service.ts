import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Usuario } from '../Modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:8080/usuario'
  url1 = 'http://localhost:8080/usuario/create'
  url2= 'http://localhost:8080/usuario/iniciarSesion'
  url3= 'http://localhost:8080/usuario/modificar'
  url4 = 'http://localhost:8080/usuario/myUser'


  var1 = localStorage.getItem('id')
  
  constructor(private http: HttpClient) {}


  getUsuarios(): Observable<any>
  {
    return this.http.get(this.url)
  }

  postLogin(usuario: Usuario):Observable<any> {
    return this.http.post(this.url2,usuario)
  }

  getUsuario(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(this.url4+"/"+id);
  }

  saveUsuario(usuario: Usuario):Observable<any>{
    return this.http.put(this.url1, usuario)
  }

  editUsuario(id: number, usuario: Usuario):Observable<any>{
    return this.http.put(this.url3+'/'+id, usuario)
  }

  deleteUsuario(id:number):Observable<any>{{
    return this.http.delete(this.url+'/'+id)
  }}



}


