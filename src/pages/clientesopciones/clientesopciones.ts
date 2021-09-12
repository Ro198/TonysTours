import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClientesactivosPage,
         ClientesnoactivosPage,
         ClientesmesPage
} from "../index.paginas";

@Component({
  selector: 'page-clientesopciones',
  templateUrl: 'clientesopciones.html',
})
export class ClientesopcionesPage {

  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {



  }


clientesActivos(){
    this.navCtrl.push(ClientesactivosPage);
}

clientesNoActivos(){
   this.navCtrl.push(ClientesnoactivosPage);
}

clientesMes(){
  this.navCtrl.push(ClientesmesPage);
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesopcionesPage');
  }

}
