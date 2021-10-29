import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
         VehiculosrentadosPage,
         VehiculosmantenimientoPage,
         VehiculosopcionesPage,
         MenunivelunoPage,
         MenuniveldosPage,
         HistorialPage
} from "../index.paginas";


@Component({
  selector: 'page-vehiculos',
  templateUrl: 'vehiculos.html',
})
export class VehiculosPage {

  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  regresar(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  historial(){
    this.navCtrl.push(HistorialPage);
  }


  vehiculosDisponibles(){

    this.navCtrl.push(VehiculosopcionesPage);

  }

  vehiculosRentados(){

    this.navCtrl.push(VehiculosrentadosPage);

  }

  vehiculosMantenimiento(){

    this.navCtrl.push(VehiculosmantenimientoPage);

  }






  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculosPage');
  }

}
