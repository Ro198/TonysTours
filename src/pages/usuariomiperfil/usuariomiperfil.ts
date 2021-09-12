import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


import { UsuariomiperfileditarPage
} from "../index.paginas";

@Component({
  selector: 'page-usuariomiperfil',
  templateUrl: 'usuariomiperfil.html',
})
export class UsuariomiperfilPage {

  datosUsuario; 
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  enlace_editar_usuario(){
    this.navCtrl.push(UsuariomiperfileditarPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariomiperfilPage');
  }

}
