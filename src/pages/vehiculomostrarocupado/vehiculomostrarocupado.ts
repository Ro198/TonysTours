import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import { VehiculoeditarrentaPage,
  VehiculoeditartresPage,
  VehiculoeditarenviaraPage,
  VehiculoeditarfotoPage,
  VehiculosocupadosPage
} from "../index.paginas";
 
@Component({
  selector: 'page-vehiculomostrarocupado',
  templateUrl: 'vehiculomostrarocupado.html',
})
export class VehiculomostrarocupadoPage {

datosUsuario;
perfil;
BDVehiculo;
datosV;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController) 
  {

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }


  
  regresar(){    
      this.navCtrl.push(VehiculosocupadosPage);
  }

  enlace_editar_vehiculoFoto(){
    this.navCtrl.push(VehiculoeditarfotoPage)
  }

  enlace_rentar(){ 
    
    this.navCtrl.push(VehiculoeditarrentaPage)
 

  }

  enlace_editar_vehiculo(){ 
    this.navCtrl.push(VehiculoeditartresPage) 
  }


  enlace_enviarA(){
    let modal = this.modalCtrl.create(VehiculoeditarenviaraPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculomostrarocupadoPage');
  }


}
