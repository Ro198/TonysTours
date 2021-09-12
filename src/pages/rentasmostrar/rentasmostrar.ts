import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  RentaeditarPage,
  RentabajaPage,
  RentadatosclientePage,
  RentadatosvehiculoPage
} from "../index.paginas";


@Component({
  selector: 'page-rentasmostrar',
  templateUrl: 'rentasmostrar.html',
})
export class RentasmostrarPage {

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

  enlace_editar_renta(){
    this.navCtrl.push(RentaeditarPage)
  }

  enlace_Datos_Cliente(){
    this.navCtrl.push(RentadatosclientePage)
  }

  enlace_Datos_Vehiculo(){
    this.navCtrl.push(RentadatosvehiculoPage)
  }

  enlace_Dar_Baja(){
    this.navCtrl.push(RentabajaPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RentasmostrarPage');
  }

}
