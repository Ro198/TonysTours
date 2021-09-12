import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class VehiculoFotoService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url2

    }

//AGREGAR VEHICULO

   agregarVehiculo(marcaVehiculo, tipoVehiculo, numeroPasajeros, placas, modelo, numeroMotor, transmicion, numeroSerie, color, kilometrajeV, cristalesV, llantasV, tapiceriaV, documentacionVehiculoV, refaccionV, gatoV, vehiculoMantenimiento, autoRentado, renta, notasV, foto, motivoTaller, fechaEntrada, fechaSalidaT, notasT, idasTaller, idUsuario){
        
        let body = {
        "action": "agregarVehiculo",
        "marcaVehiculo": marcaVehiculo,
        "tipoVehiculo": tipoVehiculo,
        "numeroPasajeros": numeroPasajeros,
        "placas": placas,
        "modelo": modelo,
        "numeroMotor": numeroMotor,
        "transmicion": transmicion,
        "numeroSerie": numeroSerie,
        "color": color,
        "kilometrajeV": kilometrajeV,
        "cristalesV": cristalesV,
        "llantasV": llantasV,
        "tapiceriaV": tapiceriaV,
        "documentacionVehiculoV": documentacionVehiculoV,
        "refaccionV": refaccionV,
        "gatoV": gatoV,
        "vehiculoMantenimiento": vehiculoMantenimiento,
        "autoRentado": autoRentado,
        "renta": renta,
        "notasV": notasV,
        "foto": foto,
        "motivoTaller": motivoTaller,
        "fechaEntrada": fechaEntrada,
        "fechaSalidaT": fechaSalidaT,
        "notasT": notasT,
        "idasTaller": idasTaller,
        "idUsuario": idUsuario
        };

        console.log(JSON.stringify(body));
        
              let bodyJ = JSON.stringify(body);
              let headers = new Headers({ 'Content-Type': 'application/json' });
              let options = new RequestOptions({ headers: headers });
        
              this.params= ''
              var url = this.serverUrl+ this.params;
        
              return this.http.post(url, bodyJ, options) .map(res => res.json());    
}

//EDITAR VEHICULO FOTO

editarVehiculoFoto(idVehiculo, foto, idUsuario){

    let body = { 
        "action": "editarVehiculoFoto",
        "idVehiculo": idVehiculo,
        "foto": foto,
        "idUsuario": idUsuario
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

//EDITAR VEHICULO DATOS

editarVehiculoDatos(idVehiculo, marcaVehiculo, tipoVehiculo, numeroPasajeros, placas, modelo, numeroMotor, transmicion, numeroSerie, color, kilometrajeV, cristalesV, llantasV, tapiceriaV, documentacionVehiculoV, refaccionV, gatoV, vehiculoMantenimiento, autoRentado, renta, notasV, motivoTaller, fechaEntrada, fechaSalidaT, notasT, idasTaller, idUsuario){

    let body = { 
        "action": "editarVehiculoDatos",
        "idVehiculo": idVehiculo,
        "marcaVehiculo": marcaVehiculo,
        "tipoVehiculo": tipoVehiculo,
        "numeroPasajeros": numeroPasajeros,
        "placas": placas,
        "modelo": modelo,
        "numeroMotor": numeroMotor,
        "transmicion": transmicion,
        "numeroSerie": numeroSerie,
        "color": color,
        "kilometrajeV": kilometrajeV,
        "cristalesV": cristalesV,
        "llantasV": llantasV,
        "tapiceriaV": tapiceriaV,
        "documentacionVehiculoV": documentacionVehiculoV,
        "refaccionV": refaccionV,
        "gatoV": gatoV,
        "vehiculoMantenimiento": vehiculoMantenimiento,
        "autoRentado": autoRentado,
        "renta": renta,
        "notasV": notasV,
        "motivoTaller": motivoTaller,
        "fechaEntrada": fechaEntrada,
        "fechaSalidaT": fechaSalidaT,
        "notasT": notasT,
        "idasTaller": idasTaller,
        "idUsuario": idUsuario
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

//EDITAR VEHICULO RENTA

editar_vehiculo_renta(idVehiculo, renta, idUsuario){

    let body = { 
        "action": "editar_vehiculo_renta",
        "idVehiculo": idVehiculo, 
        "renta": renta,
        "idUsuario": idUsuario
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

//EDITAR VEHICULO EN SERVICIO

editar_vehiculo_Servicios(idVehiculo, autoRentado, idUsuario){

    let body = { 
        "action": "editar_vehiculo_Servicios",
        "idVehiculo": idVehiculo,
        "autoRentado": autoRentado,
        "idUsuario": idUsuario
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

//ENVIAR VEHICULO AL TALLER

enviar_vehiculo_taller(idVehiculo, vehiculoMantenimiento, motivoTaller, fechaEntrada, fechaSalidaT, notasT, idasTaller, idUsuario){

    let body = { 
        "action": "enviar_vehiculo_taller",
        "idVehiculo": idVehiculo,
        "vehiculoMantenimiento": vehiculoMantenimiento,
        "motivoTaller": motivoTaller,
        "fechaEntrada": fechaEntrada,
        "fechaSalidaT": fechaSalidaT,
        "notasT": notasT,
        "idasTaller": idasTaller,
        "idUsuario": idUsuario
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

//ELIMINAR VEHICULO

eliminarVehiculo(idVehiculo){

    let body = { 
        "action": "eliminarVehiculo",
        "idVehiculo": idVehiculo
     };

     console.log(JSON.stringify(body));

    let bodyJ = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.params= ''
    var url = this.serverUrl+ this.params;

    return this.http.post(url, bodyJ, options) .map(res => res.json());      
}

}




