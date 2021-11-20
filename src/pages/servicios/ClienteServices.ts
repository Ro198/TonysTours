import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as url from "../servicios/URL";
import 'rxjs/add/operator/map';


@Injectable()
export class ClienteService {

        serverUrl;
        params;


        constructor(public http: Http) {
            this.http = http
            this.serverUrl = url.url

    }

//LISTAR CLIENTES

    listar_clientes(){
        this.params= 'action=listar_clientes'
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

//AGREGAR CLIENTE

    agregar_cliente(nombre, sexo, edad, direccion, colonia, telefono, ciudad, estado, licencia, fechaLicencia, observacionesCliente, observacionesVehiculo, tipoCliente, vehiculoRentado, vehiculosRentados, vehiculosMalEstado, mes, dia, hora, anticipo, clienteactivo, notashistorial, idUsuario) {
        this.params='action=agregar_cliente&nombre='+nombre+'&sexo='+sexo+'&edad='+edad+'&direccion='+direccion+'&colonia='+colonia+'&telefono='+telefono+'&ciudad='+ciudad+'&estado='+estado+'&licencia='+licencia+'&fechaLicencia='+fechaLicencia+'&observacionesCliente='+observacionesCliente+'&observacionesVehiculo='+observacionesVehiculo+'&tipoCliente='+tipoCliente+'&vehiculoRentado='+vehiculoRentado+'&vehiculosRentados='+vehiculosRentados+'&vehiculosMalEstado='+vehiculosMalEstado+'&mes='+mes+'&dia='+dia+'&hora='+hora+'&anticipo='+anticipo+'&clienteactivo='+clienteactivo+'&notashistorial='+notashistorial+'&idUsuario='+idUsuario
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

//EDITAR CLIENTE

    editar_cliente(idCliente, nombre, sexo, edad, direccion, colonia, telefono, ciudad, estado, licencia, fechaLicencia, observacionesCliente, observacionesVehiculo, tipoCliente, vehiculoRentado, vehiculosRentados, vehiculosMalEstado, mes, dia, hora, anticipo, clienteactivo, notashistorial, idUsuario) {
        this.params='action=editar_cliente&idCliente='+idCliente+'&nombre='+nombre+'&sexo='+sexo+'&edad='+edad+'&direccion='+direccion+'&colonia='+colonia+'&telefono='+telefono+'&ciudad='+ciudad+'&estado='+estado+'&licencia='+licencia+'&fechaLicencia='+fechaLicencia+'&observacionesCliente='+observacionesCliente+'&observacionesVehiculo='+observacionesVehiculo+'&tipoCliente='+tipoCliente+'&vehiculoRentado='+vehiculoRentado+'&vehiculosRentados='+vehiculosRentados+'&vehiculosMalEstado='+vehiculosMalEstado+'&mes='+mes+'&dia='+dia+'&hora='+hora+'&anticipo='+anticipo+'&clienteactivo='+clienteactivo+'&notashistorial='+notashistorial+'&idUsuario='+idUsuario
        var url = this.serverUrl+ this.params;
        return this.http.get(url).map(res => res.json());
    }

//ELIMINAR CLIENTE

    eliminar_cliente(idCliente){
        this.params='action=eliminar_cliente&idCliente='+idCliente
            var url = this.serverUrl+ this.params;
            return this.http.get(url).map(res => res.json()); 
    }

//LISTAR UN CLIENTE DE DOS TABLAS

    listarUnCliente(idCliente){
        this.params='action=listarUnCliente='+idCliente
        var url = this.serverUrl+ this.params;      
        return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES ACTIVOS PARA RENTA****************************/

listarClienteActivoRenta(){
    this.params= 'action=listarClienteActivoRenta'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES ACTIVOS****************************/

listarClienteActivo(){
    this.params= 'action=listarClienteActivo'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES NO ACTIVOS****************************/

listarClienteNoActivo(){
    this.params= 'action=listarClienteNoActivo'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES ENERO****************************/

ClienteMesEnero(){
    this.params= 'action=ClienteMesEnero'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES FEBRERO****************************/

ClienteMesFebrero(){
    this.params= 'action=ClienteMesFebrero'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES MARZO****************************/

ClienteMesMarzo(){
    this.params= 'action=ClienteMesMarzo'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES ABRIL****************************/

ClienteMesAbril(){
    this.params= 'action=ClienteMesAbril'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES MAYO****************************/

ClienteMesMayo(){
    this.params= 'action=ClienteMesMayo'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES JUNIO****************************/

ClienteMesJunio(){
    this.params= 'action=ClienteMesJunio'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES JULIO****************************/

ClienteMesJulio(){
    this.params= 'action=ClienteMesJulio'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES AGOSTO****************************/

ClienteMesAgosto(){
    this.params= 'action=ClienteMesAgosto'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES SEPTIEMBRE****************************/

ClienteMesSeptiembre(){
    this.params= 'action=ClienteMesSeptiembre'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES OCTUBRE****************************/

ClienteMesOctubre(){
    this.params= 'action=ClienteMesOctubre'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES NOVIEMBRE****************************/

ClienteMesNoviembre(){
    this.params= 'action=ClienteMesNoviembre'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}

//*****************CLIENTES MES DICIEMBRE****************************/

ClienteMesDiciembre(){
    this.params= 'action=ClienteMesDiciembre'
    var url = this.serverUrl+ this.params;
    return this.http.get(url).map(res => res.json());
}


}