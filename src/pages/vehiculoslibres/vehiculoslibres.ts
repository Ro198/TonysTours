import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import { PvehiculocincoPage,
         PvehiculosietePage,
         PvehiculoochoPage,
         PvehiculocatorcePage
} from "../index.paginas"; 


@Component({
  selector: 'page-vehiculoslibres',
  templateUrl: 'vehiculoslibres.html',
}) 
export class VehiculoslibresPage {

  datosUsuario 
  perfil

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  cinco(){
    this.navCtrl.push(PvehiculocincoPage);
  }
  siete(){
    this.navCtrl.push(PvehiculosietePage);
  }

  ocho(){
    this.navCtrl.push(PvehiculoochoPage);
  }
  catorce(){
    this.navCtrl.push(PvehiculocatorcePage);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculoslibresPage');
  }

}