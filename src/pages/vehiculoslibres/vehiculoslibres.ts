import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import { PvehiculocincoPage,
         PvehiculosietePage,
         PvehiculoochoPage,
         PvehiculocatorcePage,
         VehiculosopcionesPage,
         MenunivelunoPage,
         MenuniveldosPage
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

  regresar(){             
    this.navCtrl.push(VehiculosopcionesPage);
  }

  menu(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
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