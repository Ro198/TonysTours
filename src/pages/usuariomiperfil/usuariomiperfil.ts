import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';


import { UsuariomiperfileditarPage,
  MenunivelunoPage,
  MenuniveldosPage,
  LoginPage
} from "../index.paginas";

@Component({
  selector: 'page-usuariomiperfil',
  templateUrl: 'usuariomiperfil.html',
})
export class UsuariomiperfilPage {

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

  regresar(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  enlace_editar_usuario(){
    this.navCtrl.push(UsuariomiperfileditarPage);
  }

   //CERRAR SESION

   logout(): void {
    let confirm = this.alertCtrl.create({
      title: "¡ATENCION!",
      message: "¿Estas seguro que quieres cerrar sesión?",
      buttons: [
        {
          text: "NO",
          handler: () => {}
        },
        {
          text: "SI",
          handler: () => {
            window.localStorage.removeItem("dataUser");
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present();
  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariomiperfilPage');
  }

}
