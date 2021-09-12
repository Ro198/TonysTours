import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
         VehiculoslibresPage,
         VehiculossinservicioPage,
         VehiculosocupadosPage
   } from "../index.paginas";


@Component({
  selector: 'page-vehiculosopciones',
  templateUrl: 'vehiculosopciones.html',
})
export class VehiculosopcionesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams)
  {



  }

vehiculosSinServicio(){
    this.navCtrl.push(VehiculossinservicioPage);
}

vehiculosLibres(){
   this.navCtrl.push(VehiculoslibresPage);
}

vehiculosOcupados(){
 
  this.navCtrl.push(VehiculosocupadosPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculosopcionesPage');
  }

}
