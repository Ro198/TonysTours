import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { ClienteeditarPage
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


  enlace_editar_cliente()
{
  // console.log(item);

     // window.localStorage.setItem('datoscliente', JSON.stringify(item));
      this.navCtrl.push(ClienteeditarPage)

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientemostrarPage');
  }

}
