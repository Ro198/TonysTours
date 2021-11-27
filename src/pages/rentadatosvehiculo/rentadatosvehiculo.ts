import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  RentasmostrarPage,
  MenunivelunoPage,
  MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-rentadatosvehiculo',
  templateUrl: 'rentadatosvehiculo.html',
})
export class RentadatosvehiculoPage {

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

  menu(){      
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentadatosvehiculoPage');
  }

}
