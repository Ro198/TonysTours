import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';


import { VehiculoeditarPage,
         VehiculoeditarenservicioPage,
         VehiculoenviartallerPage,
         VehiculoeditarfotoPage,
         VehiculossinservicioPage
} from "../index.paginas";


@Component({
  selector: 'page-vehiculomostrar',
  templateUrl: 'vehiculomostrar.html',
})
export class VehiculomostrarPage {

datosUsuario;
perfil;
BDVehiculo;
datosV;
submitted = false;
VehiculoFotoService;
userData; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              VehiculoFotoService: VehiculoFotoService,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {

    this.VehiculoFotoService=VehiculoFotoService;

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    
  }

  historial(){

  }
  
  regresar(){
    this.navCtrl.push(VehiculossinservicioPage)
  }

  enlace_editar_vehiculoFoto(){
    this.navCtrl.push(VehiculoeditarfotoPage)
  }

  enlace_editar_vehiculo(){
    this.navCtrl.push(VehiculoeditarPage)
  }

  enlace_Enservicio(){
    let modal = this.modalCtrl.create(VehiculoeditarenservicioPage);
    modal.present();
  }

  enviar_taller(){
    let modal = this.modalCtrl.create(VehiculoenviartallerPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

    //ELIMINAR VEHICULO

    eliminar(form){
    
      this.submitted = true;

              if(form.valid) {

                console.log(this.datosV.idVehiculo);
                console.log(this.datosV.nombreFoto);


              let loading =this.loadingCtrl.create({
              content: "Eliminando vehiculo...",
                });
                loading.present();


              this.VehiculoFotoService.eliminarVehiculo(this.datosV.idVehiculo,
                                                        this.datosV.nombreFoto).subscribe(

                data => {
                    this.userData = data;
                    console.log(data);
                  loading.dismiss();



                    if(this.userData.estatus === "OK"){
                    //console.log('Usuario registrado');
                    let alert = this.alertCtrl.create({
                    title: "¡OPERACION EXITOSA!",
                    subTitle:"Tu vehiculo ha sido eliminado",
                    buttons: [
          {
            text: 'Aceptar',
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
                  subTitle:"No se pudo eliminar este vehiculo, intentalo nuevamente",
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
    console.log('ionViewDidLoad VehiculomostrarPage');
  }

}
