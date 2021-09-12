import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { VehiculoeditardosPage,
  VehiculoeditarsinservicioPage,
  VehiculoeditarfotoPage,
  VehiculoeditarserviciorentaPage
} from "../index.paginas";


@Component({
  selector: 'page-vehiculomostrarlibre',
  templateUrl: 'vehiculomostrarlibre.html',
})
export class VehiculomostrarlibrePage {

datosUsuario;
perfil;
BDVehiculo;
datosV;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) 
  {

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  enlace_editar_vehiculoFoto(){
    this.navCtrl.push(VehiculoeditarfotoPage)
  }

  enlace_editar_vehiculo(){ 
    this.navCtrl.push(VehiculoeditardosPage)
  }

  enlace_Sinservicio(){
    let modal = this.modalCtrl.create(VehiculoeditarsinservicioPage);
    modal.present();
  }

  enlace_rentar(){
    let modal = this.modalCtrl.create(VehiculoeditarserviciorentaPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculomostrarlibrePage');
  }

}
