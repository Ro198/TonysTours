import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { 
         MenunivelunoPage,
         MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-acuerdo',
  templateUrl: 'acuerdo.html',
})
export class AcuerdoPage {

  datosUsuario;
  perfil;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) 
  {

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);


  }



InicioSesionNivel(){

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )

    if(this.perfil.nivelUsuario == "Administrador"){

    //   let alert = this.alertCtrl.create({
    //    subTitle: 'Puedes interactuar con todas las funciones',
    //     buttons: ['CONTINUAR']
    //     });
    //    alert.present();
                                
          console.log(this.perfil);
          window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
          this.navCtrl.push(MenunivelunoPage);
    }
    else if(this.perfil.nivelUsuario == "Estandar"){

    //    let alert = this.alertCtrl.create({
    //      title: '¡Usuario nivel 2!',
    //      subTitle: 'Puedes interactuar con funciones limitadas',
    //      buttons: ['CONTINUAR']
    //      });
    //      alert.present();
                                            
          console.log(this.perfil);
          window.localStorage.setItem('datosCliente', JSON.stringify(this.perfil));
          this.navCtrl.push(MenuniveldosPage);
    }
    else{
          let alert = this.alertCtrl.create({
          title: '¡ERROR!',
          subTitle: 'Algo salio mal...',
          buttons: ['OK']
            });
          alert.present();
          }


}





  ionViewDidLoad() {
    console.log('ionViewDidLoad AcuerdoPage');
  }

}
