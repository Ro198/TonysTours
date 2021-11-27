import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  RentaeditarPage,
  RentabajaPage,
  RentadatosclientePage,
  RentadatosvehiculoPage,
  VehiculosrentadoscarrosPage,
  VehiculosrentadosavanzaPage,
  VehiculosrentadosodysseyPage,
  VehiculosrentadossiennaPage,
  VehiculosrentadoshiacePage
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

  regresar(){
    if(this.datosR.categoria == "Carros"){             
      this.navCtrl.push(VehiculosrentadoscarrosPage);

    }else if (this.datosR.categoria == "Avanza"){             
      this.navCtrl.push(VehiculosrentadosavanzaPage);
    
    }else if (this.datosR.categoria == "Odyssey"){             
      this.navCtrl.push(VehiculosrentadosodysseyPage);

    }else if (this.datosR.categoria == "Sienna"){             
      this.navCtrl.push(VehiculosrentadossiennaPage);

    }else if (this.datosR.categoria == "Hiace"){             
      this.navCtrl.push(VehiculosrentadoshiacePage);

    }
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
