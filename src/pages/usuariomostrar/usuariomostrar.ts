import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

import { UsuarioeditarPage
} from "../index.paginas";

@Component({
  selector: 'page-usuariomostrar',
  templateUrl: 'usuariomostrar.html', 
})
export class UsuariomostrarPage {

  datosUsuario;
  perfil;
  BDUsuario;
  datosU;
  submitted = false;
  UsuarioService;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              UsuarioService: UsuarioService) 
  {

    this.UsuarioService=UsuarioService;

    this.BDUsuario  = window.localStorage.getItem('infoUsuario')
    this.datosU = JSON.parse(this.BDUsuario )
    console.log(this.datosU);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

//ELIMINAR USUARIO

  eliminar(form){

    this.submitted = true;
  
            if(form.valid) {
  
              console.log(this.datosU.idUsuario);
  
            let loading =this.loadingCtrl.create({
            content: "Eliminando usuario espere...",
              });
              loading.present();
  
            this.UsuarioService.eliminar_usuario(this.datosU.idUsuario).subscribe(
  
              data => {
                  this.userData = data;
                  console.log(data); 
                  loading.dismiss();
                    if(this.userData.estatus === "OK"){
                    
                      let alert = this.alertCtrl.create({
                      title: "¡ELIMINADO!",
                      subTitle:"Tu usuario fue eliminado correctamente",
                      buttons: [
                        {
                          text: 'Aceptar',
                          handler: () => {
                            //this.navCtrl.setRoot(ClientesPage)
                            this.dismiss()
                          }
                        }]
                    });
                alert.present();
         }
              if(this.userData.estatus === "ERROR"){
  
              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo eliminar tu usuario, intentalo nuevamente",
                buttons: ["Aceptar"]
            });
                alert.present();
              }
                    },
                 err =>{
                  //console.log(err);
                  loading.dismiss();
                  let alert = this.alertCtrl.create({
                    title: "¡ERROR DE CONEXION!",
                    subTitle:"Ocurrio un problema para realizar la operación, intentalo mas tarde",
                    buttons: ["Aceptar"]
                });
                alert.present();
              }
            );
          }
  }


  enlace_editar_usuario()
  {

        this.navCtrl.push(UsuarioeditarPage)
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariomostrarPage');
  }

}
