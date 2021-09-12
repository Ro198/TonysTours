import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class HistorialService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url

    }

    //LISTAR CLIENTES DE DOS TABLAS, CLIENTES Y USUARIOS CON PRIVILEGIOS DE CLIENTE ACTIVO Y NO ACTIVO 

    listarTodosLosClientes(){
        this.params= 'action=listarTodosLosClientes'
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

}