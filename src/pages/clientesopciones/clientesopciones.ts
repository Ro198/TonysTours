import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClientesactivosPage,
         ClientesnoactivosPage,
         MenunivelunoPage,
         MenuniveldosPage,
         HistorialPage
} from "../index.paginas";

@Component({
  selector: 'page-clientesopciones',
  templateUrl: 'clientesopciones.html',
})
export class ClientesopcionesPage {

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

  historial(){      
    this.navCtrl.push(HistorialPage);
  }

clientesActivos(){
    this.navCtrl.push(ClientesactivosPage);
}

clientesNoActivos(){
   this.navCtrl.push(ClientesnoactivosPage);
}






  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesopcionesPage');
  }

}
