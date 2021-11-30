import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';

import {
  RentaagregarPage
} from "../index.paginas";

@Component({
  selector: 'page-rentalistausuariorentado',
  templateUrl: 'rentalistausuariorentado.html',
})
export class RentalistausuariorentadoPage {

  editarCliente: { 
    nombre?: string, 
    sexo?: string,
    edad?: string,
    direccion?: string,
    colonia?: string,
    telefono?: string,
    ciudad?: string,
    estado?: string,
    licencia?: string,
    fechaLicencia?: string,
    observacionesCliente?: string,
    observacionesVehiculo?: string,
    tipoCliente?: string,
    vehiculoRentado?: string,
    vehiculosRentados?: string,
    vehiculosMalEstado?: string,
    mes?: string,
    dia?: string,
    hora?: string,
    anticipo?: string,
    clienteactivo?: string,
    notashistorial?: string
  } = {};

  submitted = false;
  disableSubmit = false;

  datosUsuario;
  perfil;
  BDVehiculo;
  datosV;
  BDCliente;
  datosC;
  userData;
  ClienteService;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ClienteService: ClienteService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) 
  {

    this.ClienteService=ClienteService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario)
    console.log(this.perfil);

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo)
    console.log(this.datosV);

    this.BDCliente  = window.localStorage.getItem('datosRentaCliente')
    this.datosC = JSON.parse(this.BDCliente)
    console.log(this.datosC);

    this.editarCliente.nombre = this.datosC.nombre;
    this.editarCliente.sexo = this.datosC.sexo;
    this.editarCliente.edad = this.datosC.edad; 
    this.editarCliente.direccion = this.datosC.direccion;
    this.editarCliente.colonia = this.datosC.colonia;  
    this.editarCliente.telefono = this.datosC.telefono; 
    this.editarCliente.ciudad = this.datosC.ciudad; 
    this.editarCliente.estado = this.datosC.estado;
    this.editarCliente.licencia = this.datosC.licencia; 
    this.editarCliente.fechaLicencia = this.datosC.fechaLicencia; 
    this.editarCliente.observacionesCliente = this.datosC.observacionesCliente;
    this.editarCliente.observacionesVehiculo = this.datosC.observacionesVehiculo;
    this.editarCliente.tipoCliente = this.datosC.tipoCliente;
    this.editarCliente.vehiculoRentado = this.datosC.vehiculoRentado;
    this.editarCliente.vehiculosRentados = this.datosC.vehiculosRentados;
    this.editarCliente.vehiculosMalEstado = this.datosC.vehiculosMalEstado;
    this.editarCliente.mes = this.datosC.mes;
    this.editarCliente.dia = this.datosC.dia;
    this.editarCliente.hora = this.datosC.hora;
    this.editarCliente.anticipo = this.datosC.anticipo;
    this.editarCliente.clienteactivo = this.datosC.clienteactivo;
    this.editarCliente.notashistorial = this.datosC.notashistorial;
    
  }

//  renta(){              
//    this.navCtrl.push(RentaagregarPage);
// }

  //RENTA CLIENTE

  editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosC.idCliente);
              console.log(this.editarCliente.nombre);
              console.log(this.editarCliente.sexo);
              console.log(this.editarCliente.edad);
              console.log(this.editarCliente.direccion);
              console.log(this.editarCliente.colonia);
              console.log(this.editarCliente.telefono);
              console.log(this.editarCliente.ciudad);
              console.log(this.editarCliente.estado);
              console.log(this.editarCliente.licencia);
              console.log(this.editarCliente.fechaLicencia);
              console.log(this.editarCliente.observacionesCliente);
              console.log(this.editarCliente.observacionesVehiculo);
              console.log(this.editarCliente.tipoCliente);
              console.log(this.editarCliente.vehiculoRentado);
              console.log(this.editarCliente.vehiculosRentados);
              console.log(this.editarCliente.vehiculosMalEstado);
              console.log(this.editarCliente.mes);
              console.log(this.editarCliente.dia);
              console.log(this.editarCliente.hora);
              console.log(this.editarCliente.anticipo);
              console.log(this.editarCliente.clienteactivo);
              console.log(this.editarCliente.notashistorial);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Cambiando dato, espere...",
              });
              loading.present();

            this.ClienteService.editar_cliente(this.datosC.idCliente, 
                                               this.editarCliente.nombre,                                       
                                               this.editarCliente.sexo,
                                               this.editarCliente.edad, 
                                               this.editarCliente.direccion,
                                               this.editarCliente.colonia,  
                                               this.editarCliente.telefono, 
                                               this.editarCliente.ciudad, 
                                               this.editarCliente.estado,
                                               this.editarCliente.licencia, 
                                               this.editarCliente.fechaLicencia, 
                                               this.editarCliente.observacionesCliente,
                                               this.editarCliente.observacionesVehiculo,
                                               this.editarCliente.tipoCliente,
                                               this.editarCliente.vehiculoRentado,
                                               this.editarCliente.vehiculosRentados,
                                               this.editarCliente.vehiculosMalEstado,
                                               this.editarCliente.mes,
                                               this.editarCliente.dia,
                                               this.editarCliente.hora,
                                               this.editarCliente.anticipo,
                                               this.editarCliente.clienteactivo,
                                               this.editarCliente.notashistorial,
                                               this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡EXITO!",
                subTitle:"Tu dato ha sido cambiado",
                buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {
                        this.navCtrl.setRoot(RentaagregarPage)
                        //this.dismiss()
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo realizar la solicitud, intentalo nuevamente",
                buttons: ["Aceptar"]
            });

                alert.present();
              }

                    },
              err =>{
                  //console.log(err);
                  loading.dismiss();
                  let alert = this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["Aceptar"]
                });
                alert.present();
              }
            );
          }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentalistausuariorentadoPage');
  }

}
