
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url

    }


//LISTAR USUARIOS

listar_usuarios(){
    this.params= 'action=listar_usuarios'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//AGREGAR USUARIO

agregar_usuario(Username, Correo, Pass, nombreUsuario, nivelUsuario) {
    this.params='action=agregar_usuario&Username='+Username+'&Correo='+Correo+'&Pass='+Pass+'&nombreUsuario='+nombreUsuario+'&nivelUsuario='+nivelUsuario
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//EDITAR USUARIO

editar_usuario(idUsuario, Username, Correo, Pass, nombreUsuario, nivelUsuario){
    this.params='action=editar_usuario&idUsuario='+idUsuario+'&Username='+Username+'&Correo='+Correo+'&Pass='+Pass+'&nombreUsuario='+nombreUsuario+'&nivelUsuario='+nivelUsuario
            var url = this.serverUrl+ this.params;
            //console.log(url);
            return this.http.get(url).map(res => res.json());        
}

//ELIMINAR USUARIO

eliminar_usuario(idUsuario){
    this.params='action=eliminar_usuario&idUsuario='+idUsuario
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json()); 
}






}