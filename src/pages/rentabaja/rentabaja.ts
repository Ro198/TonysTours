import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';

import { RentabajaclientePage,
  MenunivelunoPage,
  MenuniveldosPage,
  RentasmostrarPage
} from "../index.paginas";

@Component({
  selector: 'page-rentabaja',
  templateUrl: 'rentabaja.html',
})
export class RentabajaPage {

  rentaBaja: { 
    renta?: string, 
  } = {};

  VehiculoFotoService;
  datosUsuario;
  perfil;
  BDRenta;
  datosR;
  submitted = false;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              VehiculoFotoService: VehiculoFotoService,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              public loadingCtrl: LoadingController) 
  {

    this.VehiculoFotoService=VehiculoFotoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.BDRenta  = window.localStorage.getItem('datosRenta')
    this.datosR = JSON.parse(this.BDRenta )
    console.log(this.datosR);

  } 

  //cliente(){              
  //  this.navCtrl.push(RentabajaclientePage);
  //}

  regresar(){              
    this.navCtrl.push(RentasmostrarPage);
  }

  menu(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  dismiss() {  
    this.viewCtrl.dismiss();
  }

  //DAR DE BAJA RENTA: VEHICULO

  editar(form){ 

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosR.idVehiculo);
              console.log(this.rentaBaja.renta);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Procesando peticion...",
              });
              loading.present();

this.VehiculoFotoService.editar_vehiculo_renta(this.datosR.idVehiculo, 
                                               this.rentaBaja.renta,                                                                      
                                               this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Tu vehiculo ha sido dado de baja, ya esta nuevamente dispobible para la renta",
                buttons: [
                    {
                      text: 'Continuar',
                      handler: () => {
                        this.navCtrl.setRoot(RentabajaclientePage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentabajaPage');
  }

}
