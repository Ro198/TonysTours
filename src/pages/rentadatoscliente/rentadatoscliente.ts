import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-rentadatoscliente',
  templateUrl: 'rentadatoscliente.html',
})
export class RentadatosclientePage {

  datosUsuario;
  perfil;
  BDRenta;
  datosR;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.BDRenta  = window.localStorage.getItem('datosRenta')
    this.datosR = JSON.parse(this.BDRenta )
    console.log(this.datosR);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentadatosclientePage');
  }

}
