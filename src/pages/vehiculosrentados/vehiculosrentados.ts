import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import { 
  MenunivelunoPage,
  MenuniveldosPage,
  VehiculosPage,
  VehiculosrentadoscarrosPage,
  VehiculosrentadosavanzaPage,
  VehiculosrentadoshiacePage,
  VehiculosrentadosodysseyPage,
  VehiculosrentadossiennaPage
} from "../index.paginas";

@Component({
  selector: 'page-vehiculosrentados',
  templateUrl: 'vehiculosrentados.html',
})
export class VehiculosrentadosPage {

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
    this.navCtrl.push(VehiculosPage);
  }
  
  menu(){
  if(this.perfil.nivelUsuario == "Administrador"){             
    this.navCtrl.push(MenunivelunoPage);
  }else if (this.perfil.nivelUsuario == "Estandar"){             
    this.navCtrl.push(MenuniveldosPage);
  }
  }

  carros(){
    this.navCtrl.push(VehiculosrentadoscarrosPage);
  }
  avanza(){
   this.navCtrl.push(VehiculosrentadosavanzaPage);
  }
  odyssey(){
    this.navCtrl.push(VehiculosrentadosodysseyPage);
  }
  sienna(){
    this.navCtrl.push(VehiculosrentadossiennaPage);
  }
  hiace(){
   this.navCtrl.push(VehiculosrentadoshiacePage);
  }



  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculosrentadosPage');
  }

} 
