import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { 
  AclienteeneroPage,
  AclientefebreroPage,
  AclientemarzoPage,
  AclienteabrilPage,
  AclientemayoPage,
  AclientejunioPage,
  AclientejulioPage,
  AclienteagostoPage,
  AclienteseptiembrePage,
  AclienteoctubrePage,
  AclientenoviembrePage,
  AclientediciembrePage,
  MenunivelunoPage,
  MenuniveldosPage,
  ClientesopcionesPage,
  HistorialPage
} from "../index.paginas";


@Component({
  selector: 'page-clientesmes',
  templateUrl: 'clientesmes.html',
})
export class ClientesmesPage {

  
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
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  clientes(){      
    this.navCtrl.push(ClientesopcionesPage);
  }

  historial(){      
    this.navCtrl.push(HistorialPage);
  }

  enero(){
    this.navCtrl.push(AclienteeneroPage);
  }
  febrero(){
    this.navCtrl.push(AclientefebreroPage);
  }

  marzo(){
    this.navCtrl.push(AclientemarzoPage);
  }
  abril(){
    this.navCtrl.push(AclienteabrilPage);
  }
  mayo(){
    this.navCtrl.push(AclientemayoPage);
  }
  junio(){
    this.navCtrl.push(AclientejunioPage);
  }
  julio(){
    this.navCtrl.push(AclientejulioPage);
  }
  agosto(){
    this.navCtrl.push(AclienteagostoPage);
  }
  septiembre(){
    this.navCtrl.push(AclienteseptiembrePage);
  }
  octubre(){
    this.navCtrl.push(AclienteoctubrePage);
  }
  noviembre(){
    this.navCtrl.push(AclientenoviembrePage);
  }
  diciembre(){
    this.navCtrl.push(AclientediciembrePage);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesmesPage');
  }

}
