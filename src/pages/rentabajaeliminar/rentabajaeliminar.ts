import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { VehiculoService } from '../servicios/VehiculoServices';

import { VehiculosPage
} from "../index.paginas";

@Component({
  selector: 'page-rentabajaeliminar',
  templateUrl: 'rentabajaeliminar.html',
})
export class RentabajaeliminarPage {

  datosUsuario;
  perfil;
  VehiculoService;
  BDRenta;
  datosR;
  submitted = false;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              VehiculoService: VehiculoService,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {

    this.VehiculoService=VehiculoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.BDRenta  = window.localStorage.getItem('datosRenta')
    this.datosR = JSON.parse(this.BDRenta )
    console.log(this.datosR);
    
  }

  dismiss() {
    this.viewCtrl.dismiss(); 
  }

    //ELIMINAR RENTA

    eliminar(form){
    
      this.submitted = true;

              if(form.valid) {

                console.log(this.datosR.idRenta);


              let loading =this.loadingCtrl.create({
              content: "Eliminando renta...",
                });
                loading.present();


              this.VehiculoService.eliminar_renta(this.datosR.idRenta).subscribe(

                data => {
                    this.userData = data;
                    console.log(data);
                  loading.dismiss();



                    if(this.userData.estatus === "OK"){
                    //console.log('Usuario registrado');
                    let alert = this.alertCtrl.create({
                    title: "¡OPERACION EXITOSA!",
                    subTitle:"Tu renta ha sido eliminada",
                    buttons: [
          {
            text: 'Aceptar',
            handler: () => {
              this.navCtrl.setRoot(VehiculosPage)
          
            }
          }]
                }); 
                alert.present();
      }

                if(this.userData.estatus === "ERROR"){

                let alert = this.alertCtrl.create({
                  title: "¡ERROR!",
                  subTitle:"No se pudo eliminar esta renta, intentalo nuevamente",
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
    console.log('ionViewDidLoad RentabajaeliminarPage');
  }

}
