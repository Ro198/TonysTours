import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, LoadingController  } from 'ionic-angular';
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';

@Component({
  selector: 'page-vehiculoeditarserviciorenta', 
  templateUrl: 'vehiculoeditarserviciorenta.html',
})
export class VehiculoeditarserviciorentaPage {

  editarVehiculoRenta: { 
    autoRentado?: string, 
  } = {};

  VehiculoFotoService;
  datosUsuario;
  perfil;
  BDVehiculo;
  datosV;
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

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

  }

  dismiss() {  
    this.viewCtrl.dismiss();
  }

  //EDITAR CLIENTE EN RENTA

  editar(form){ 

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosV.idVehiculo);
              console.log(this.editarVehiculoRenta.autoRentado);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Procesando peticion...",
              });
              loading.present();

this.VehiculoFotoService.editar_vehiculo_Servicios(this.datosV.idVehiculo, 
                                                    this.editarVehiculoRenta.autoRentado,                                                                      
                                                    this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Ahora tu vehiculo esta sin servicio",
                buttons: [
                    {
                      text: 'Continuar',
                      handler: () => {
                        this.dismiss()
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo procesar, intentalo nuevamente",
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
    console.log('ionViewDidLoad VehiculoeditarserviciorentaPage');
  }

}
