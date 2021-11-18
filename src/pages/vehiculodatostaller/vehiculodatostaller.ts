import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  VehiculomostrarPage,
  MenunivelunoPage,
  MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-vehiculodatostaller',
  templateUrl: 'vehiculodatostaller.html',
})
export class VehiculodatostallerPage {

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

  regresar(){             
    this.navCtrl.push(VehiculomostrarPage);
  }

  menu(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculodatostallerPage');
  }

}
