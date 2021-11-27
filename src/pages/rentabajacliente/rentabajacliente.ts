import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';

import {
  RentabajaeliminarPage
} from "../index.paginas";

@Component({
  selector: 'page-rentabajacliente',
  templateUrl: 'rentabajacliente.html',
})
export class RentabajaclientePage {

  rentaBajaCliente: { 
    vehiculoRentado?: string, 
  } = {};


  submitted = false;
  disableSubmit = false;
  userData;
  BDRenta;
  datosR;
  datosUsuario;
  perfil;
  ClienteService;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ClienteService: ClienteService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) 
  {
 
    this.ClienteService=ClienteService;

    this.BDRenta  = window.localStorage.getItem('datosRenta')
    this.datosR = JSON.parse(this.BDRenta )
    console.log(this.datosR);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }


  editar(form){ 

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosR.idCliente);
              console.log(this.rentaBajaCliente.vehiculoRentado);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Procesando peticion...",
              });
              loading.present();

this.ClienteService.editar_cliente_renta(this.datosR.idCliente, 
                                         this.rentaBajaCliente.vehiculoRentado,                                                                      
                                         this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Tu cliente ahora esta sin vehiculo y esta nuevamente dispobible para una proxima renta",
                buttons: [
                    {
                      text: 'Continuar',
                      handler: () => {
                        this.navCtrl.setRoot(RentabajaeliminarPage);
                        //this.dismiss()
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo procesar tu peticion, intentalo nuevamente",
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
conti(){
  this.navCtrl.push(RentabajaeliminarPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentabajaclientePage');
  }

}
