import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { 
  HistorialPage,
  ClientesactivosPage,
  ClientesnoactivosPage
} from "../index.paginas";

@Component({
  selector: 'page-clientemostrar',
  templateUrl: 'clientemostrar.html',
})
export class ClientemostrarPage {

BDCliente;
datosC;
datosUsuario;
perfil;
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.BDCliente  = window.localStorage.getItem('datosCliente')
    this.datosC = JSON.parse(this.BDCliente )
    console.log(this.datosC);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  regresar(){      
    if(this.datosC.clienteactivo == "ACTIVO"){             
      this.navCtrl.push(ClientesactivosPage);
    }else if (this.datosC.clienteactivo == "NO ACTIVO"){             
      this.navCtrl.push(ClientesnoactivosPage);
    }
  }

  historial(){      
    this.navCtrl.push(HistorialPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientemostrarPage');
  }

}
