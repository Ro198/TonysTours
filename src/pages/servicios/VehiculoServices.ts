
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class VehiculoService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url

    }

 //LISTAR VEHICULOS DE DOS TABLAS, VEHICULOS Y USUARIOS 

 listarTodosLosVehiculos(){
    this.params= 'action=listarTodosLosVehiculos'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//LISTAR VEHICULOS DE DOS TABLAS, VEHICULOS Y USUARIOS SIN MANTENIMIENTO 

listarVehiculosSinMantenimiento(){
    this.params= 'action=listarVehiculosSinMantenimiento'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//LISTAR VEHICULOS DE DOS TABLAS, VEHICULOS Y USUARIOS EN MANTENIMIENTO 

listarVehiculosEnMantenimiento(){
    this.params= 'action=listarVehiculosEnMantenimiento'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

 //LISTAR VEHICULOS DE CUATRO TABLAS, CARROS

 listarVehiculosCarros(){
    this.params= 'action=listarVehiculosCarros'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

 //LISTAR VEHICULOS DE CUATRO TABLAS, AVANZA

 listarVehiculosAvanza(){
    this.params= 'action=listarVehiculosAvanza'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

 //LISTAR VEHICULOS DE CUATRO TABLAS, HIACE

 listarVehiculosHiace(){
    this.params= 'action=listarVehiculosHiace'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

 //LISTAR VEHICULOS DE CUATRO TABLAS, ODYSSEY

 listarVehiculosOdyssey(){
    this.params= 'action=listarVehiculosOdyssey'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

 //LISTAR VEHICULOS DE CUATRO TABLAS, SIENNA

 listarVehiculosSienna(){
    this.params= 'action=listarVehiculosSienna'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

 //LISTAR VEHICULOS DE CUATRO TABLAS, VEHICULOS, RENTA, CLIENTES Y USUARIOS ------------------------SIN ASIGNAR

 listarTodosLosVehiculosRentados(){
    this.params= 'action=listarTodosLosVehiculosRentados'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}


//LISTAR VEHICULOS DE DOS TABLAS, VEHICULOS LIBRES

//listarVehiculosLibres(){
    //this.params= 'action=listarVehiculosLibres'
    //var url = this.serverUrl+ this.params;
    //return this.http.get(url).map(res => res.json());
//}

//LISTAR VEHICULOS DE DOS TABLAS - POR NUMERO DE PASAJEROS/////////////

listarVehiculosEnServicioCinco(){
    this.params= 'action=listarVehiculosEnServicioCinco'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

listarVehiculosEnServicioSiete(){
    this.params= 'action=listarVehiculosEnServicioSiete'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

listarVehiculosEnServicioOcho(){
    this.params= 'action=listarVehiculosEnServicioOcho'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

listarVehiculosEnServicioCatorce(){
    this.params= 'action=listarVehiculosEnServicioCatorce'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json()); 
}


//LISTAR VEHICULOS DE DOS TABLAS, VEHICULOS OCUPADOS

listarVehiculosOcupados(){
    this.params= 'action=listarVehiculosOcupados'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

////////////////////////////////////////////////AGREGAR VEHICULO RENTA

    agregar_renta(destino, fechaSalida, horaSalida, fechaLlegada, horaLlegada, kilometrajeR, cristalesR, llantasR, tapiceriaR, documentacionVehiculoR, refaccionR, gatoR, notasR, idVehiculo, idCliente, idUsuario) {
        this.params='action=agregar_renta&destino='+destino+'&fechaSalida='+fechaSalida+'&horaSalida='+horaSalida+'&fechaLlegada='+fechaLlegada+'&horaLlegada='+horaLlegada+'&kilometrajeR='+kilometrajeR+'&cristalesR='+cristalesR+'&llantasR='+llantasR+'&tapiceriaR='+tapiceriaR+'&documentacionVehiculoR='+documentacionVehiculoR+'&refaccionR='+refaccionR+'&gatoR='+gatoR+'&notasR='+notasR+'&idVehiculo='+idVehiculo+'&idCliente='+idCliente+'&idUsuario='+idUsuario
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

//EDITAR VEHICULO RENTA

    editar_renta(idRenta, destino, fechaSalida, horaSalida, fechaLlegada, horaLlegada, kilometrajeR, cristalesR, llantasR, tapiceriaR, documentacionVehiculoR, refaccionR, gatoR, notasR, idVehiculo, idCliente, idUsuario) {
        this.params='action=editar_renta&idRenta='+idRenta+'&destino='+destino+'&fechaSalida='+fechaSalida+'&horaSalida='+horaSalida+'&fechaLlegada='+fechaLlegada+'&horaLlegada='+horaLlegada+'&kilometrajeR='+kilometrajeR+'&cristalesR='+cristalesR+'&llantasR='+llantasR+'&tapiceriaR='+tapiceriaR+'&documentacionVehiculoR='+documentacionVehiculoR+'&refaccionR='+refaccionR+'&gatoR='+gatoR+'&notasR='+notasR+'&idVehiculo='+idVehiculo+'&idCliente='+idCliente+'&idUsuario='+idUsuario
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

//ELIMINAR VEHICULO RENTA

    eliminar_renta(idRenta){
        this.params='action=eliminar_renta&idRenta='+idRenta
            var url = this.serverUrl+ this.params;
            return this.http.get(url).map(res => res.json()); 
    }
}