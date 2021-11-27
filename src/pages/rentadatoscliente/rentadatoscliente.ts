import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  RentasmostrarPage,
  HistorialPage
} from "../index.paginas";

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

  regresar(){      
    this.navCtrl.push(RentasmostrarPage);
  }

  historial(){      
    this.navCtrl.push(HistorialPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentadatosclientePage');
  }

}
