
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url

    }

//LOGEARSE

    loginUsuario(username, password) {
        this.params= 'action=login&Username='+username+'&Pass='+password
        var url = this.serverUrl+ this.params;
        //console.log(url);
        //contacto/login?username='+username+'&password='+password
        return this.http.get(url).map(res => res.json());
    }



}