import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { TallereditarPage,
         TallervdPage,
         VehiculoeditarfotoPage
} from "../index.paginas";

@Component({
  selector: 'page-tallermostrar',
  templateUrl: 'tallermostrar.html',
})
export class TallermostrarPage {

  datosUsuario;
  perfil;
  BDVehiculo;
  datosV;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);
  }

  enlace_editar_taller(){
    this.navCtrl.push(TallereditarPage)
  }

  enlace_vd(){
    this.navCtrl.push(TallervdPage)
  }

  enlace_editar_vehiculoFoto(){
    this.navCtrl.push(VehiculoeditarfotoPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TallermostrarPage');
  }

}
