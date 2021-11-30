import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { VehiculoService } from '../servicios/VehiculoServices';

import { 
  VehiculosPage
} from "../index.paginas";

@Component({
  selector: 'page-rentaagregar',
  templateUrl: 'rentaagregar.html',
})
export class RentaagregarPage {

  datosRenta: { 
    destino?: string,
    fechaSalida?: string,
    horaSalida?: string,
    fechaLlegada?: string,
    horaLlegada?: string,
    kilometrajeR?: string,  
    cristalesR?: string,
    llantasR?: string,
    tapiceriaR?: string,
    documentacionVehiculoR?: string,
    refaccionR?: string,
    gatoR?: string,
    notasR?: string
  } = {}; 

  BDVehiculo;
  datosV;
  datosUsuario;
  perfil;
  BDCliente;
  datosC;
  VehiculoService;

  submitted = false;
  disableSubmit = false;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              VehiculoService: VehiculoService,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) 
  {

    this.VehiculoService=VehiculoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario)
    console.log(this.perfil);

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo)
    console.log(this.datosV);

    this.BDCliente  = window.localStorage.getItem('datosRentaCliente')
    this.datosC = JSON.parse(this.BDCliente)
    console.log(this.datosC);

    this.datosRenta.cristalesR = " ";
    this.datosRenta.llantasR = " ";
    this.datosRenta.tapiceriaR = " ";
    this.datosRenta.notasR = " ";


  }

  //GUARDAR CLIENTE

  guardar(form){

    this.submitted = true;
   
           if(form.valid) {
   
             console.log(this.datosRenta.destino);
             console.log(this.datosRenta.fechaSalida);
             console.log(this.datosRenta.horaSalida);
             console.log(this.datosRenta.fechaLlegada);
             console.log(this.datosRenta.horaLlegada);
             console.log(this.datosRenta.kilometrajeR);
             console.log(this.datosRenta.cristalesR);
             console.log(this.datosRenta.llantasR);
             console.log(this.datosRenta.tapiceriaR);
             console.log(this.datosRenta.documentacionVehiculoR);
             console.log(this.datosRenta.refaccionR);
             console.log(this.datosRenta.gatoR);
             console.log(this.datosRenta.notasR);
             console.log(this.datosV.idVehiculo);
             console.log(this.datosC.idCliente);
             console.log(this.perfil.idUsuario);


            let loading =this.loadingCtrl.create({
            content: "Guardando renta, espere...", 
             });
            loading.present();
   
             this.VehiculoService.agregar_renta(
                                                this.datosRenta.destino, 
                                                this.datosRenta.fechaSalida,
                                                this.datosRenta.horaSalida,
                                                this.datosRenta.fechaLlegada,
                                                this.datosRenta.horaLlegada,
                                                this.datosRenta.kilometrajeR, 
                                                this.datosRenta.cristalesR, 
                                                this.datosRenta.llantasR,                                              
                                                this.datosRenta.tapiceriaR,
                                                this.datosRenta.documentacionVehiculoR,
                                                this.datosRenta.refaccionR,
                                                this.datosRenta.gatoR,
                                                this.datosRenta.notasR,
                                                this.datosV.idVehiculo,
                                                this.datosC.idCliente,
                                                this.perfil.idUsuario).subscribe(
    
             data => {
                 this.userData = data;
                 console.log(data);
                loading.dismiss();
                 if(this.userData.estatus === "OK"){
                 //console.log('Usuario registrado');
                 let alert = this.alertCtrl.create({
                  title: "¡EXCELENTE!",
                  subTitle:"Tu renta fue registrada correctamente",
                  buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {
                        this.navCtrl.setRoot(VehiculosPage);
                      //this.dismiss()
                      }
                    }]
                    });
                      alert.present();
   
   }
   
             if(this.userData.estatus === "ERROR"){
   
              let alert = this.alertCtrl.create({
               title: "¡ERROR!",
               subTitle:"No se pudo registrar tu renta, intentalo nuevamente",
               buttons: ["Aceptar"]
                  });
   
               alert.present();
             }
   
   
                   },
             err =>{
                 //console.log(err);
                 loading.dismiss();
                 let alert = this.alertCtrl.create({
                   title: "¡ERROR DE CONEXION!",
                   subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde..",
                   buttons: ["Aceptar"]
               });
                alert.present();
             }
   
            );
   
           }
   
   }



  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentaagregarPage');
  }

}
