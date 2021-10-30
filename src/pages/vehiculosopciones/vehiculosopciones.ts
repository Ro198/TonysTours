import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
         VehiculoslibresPage,
         VehiculossinservicioPage,
         VehiculosocupadosPage,
         MenunivelunoPage,
         VehiculosPage,
         MenuniveldosPage
   } from "../index.paginas";


@Component({
  selector: 'page-vehiculosopciones',
  templateUrl: 'vehiculosopciones.html',
})
export class VehiculosopcionesPage {

  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams)
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

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

regresar(){      
  this.navCtrl.push(VehiculosPage);
}

menu(){
if(this.perfil.nivelUsuario == "Administrador"){             
  this.navCtrl.push(MenunivelunoPage);
}else if (this.perfil.nivelUsuario == "Estandar"){             
  this.navCtrl.push(MenuniveldosPage);
}
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculosopcionesPage');
  }

}
