import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { VehiculoeditardosPage,
  VehiculoeditarsinservicioPage,
  VehiculoeditarfotoPage,
  VehiculoeditarserviciorentaPage,
  PvehiculocincoPage,
  PvehiculosietePage,
  PvehiculoochoPage,
  PvehiculocatorcePage
} from "../index.paginas";


@Component({
  selector: 'page-vehiculomostrarlibre',
  templateUrl: 'vehiculomostrarlibre.html',
})
export class VehiculomostrarlibrePage {

datosUsuario;
perfil;
BDVehiculo; 
datosV;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) 
  {

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  regresar(){
    if(this.datosV.numeroPasajeros == 5){             
      this.navCtrl.push(PvehiculocincoPage);

    }else if (this.datosV.numeroPasajeros == 7){             
      this.navCtrl.push(PvehiculosietePage);
    
    }else if (this.datosV.numeroPasajeros == 8){             
      this.navCtrl.push(PvehiculoochoPage);

    }else if (this.datosV.numeroPasajeros == 14){             
      this.navCtrl.push(PvehiculocatorcePage);

    }

  }

  enlace_editar_vehiculoFoto(){
    this.navCtrl.push(VehiculoeditarfotoPage)
  }

  enlace_editar_vehiculo(){ 
    this.navCtrl.push(VehiculoeditardosPage)
  }

  enlace_Sinservicio(){
    let modal = this.modalCtrl.create(VehiculoeditarsinservicioPage);
    modal.present();
  }

  enlace_rentar(){
    let modal = this.modalCtrl.create(VehiculoeditarserviciorentaPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculomostrarlibrePage');
  }

}
