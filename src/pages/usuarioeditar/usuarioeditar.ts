import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

import { 
  MenunivelunoPage,
  UsuariomostrarPage,
  UsuariosPage
} from "../index.paginas";

@Component({
  selector: 'page-usuarioeditar',
  templateUrl: 'usuarioeditar.html',
})
export class UsuarioeditarPage {

  datosBDUsuario: { 
    Username?: string,
    Correo?: string,
    Pass?: string,
    nombreUsuario?: string,
    nivelUsuario?: string
  } = {};
 
  submitted = false;
  disableSubmit = false;

  datosUsuario; 
  perfil;
  BDUsuario;
  datosU;
  UsuarioService;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              UsuarioService: UsuarioService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) 
  {

    this.UsuarioService=UsuarioService;

    this.BDUsuario  = window.localStorage.getItem('infoUsuario')
    this.datosU = JSON.parse(this.BDUsuario )
    console.log(this.datosU);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.datosBDUsuario.Username = this.datosU.Username;
    this.datosBDUsuario.Correo = this.datosU.Correo; 
    this.datosBDUsuario.Pass = this.datosU.Pass;
    this.datosBDUsuario.nombreUsuario = this.datosU.nombreUsuario; 
    this.datosBDUsuario.nivelUsuario = this.datosU.nivelUsuario; 

  }

  regresar(){
    if(this.perfil.nivelUsuario == "Administrador"){             
        this.navCtrl.push(UsuariomostrarPage);
    }
  }
  menu(){
    this.navCtrl.setRoot(MenunivelunoPage);
  }

  //EDITAR CLIENTE

  editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosU.idUsuario);
              console.log(this.datosBDUsuario.Username);
              console.log(this.datosBDUsuario.Correo);
              console.log(this.datosBDUsuario.Pass);
              console.log(this.datosBDUsuario.nombreUsuario);
              console.log(this.datosBDUsuario.nivelUsuario);


            let loading =this.loadingCtrl.create({
            content: "Modificando el usuario espere...",
              });
              loading.present();

            this.UsuarioService.editar_usuario(this.datosU.idUsuario, 
                                               this.datosBDUsuario.Username, 
                                               this.datosBDUsuario.Correo, 
                                               this.datosBDUsuario.Pass,
                                               this.datosBDUsuario.nombreUsuario, 
                                               this.datosBDUsuario.nivelUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"El usuario fue modificado correctamente",
                buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {
                        this.navCtrl.setRoot(UsuariosPage)
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo modificar el usuario, intentalo nuevamente",
                buttons: ["Aceptar"]
            });

                alert.present();
              }

                    },
              err =>{
                  //console.log(err);
                  loading.dismiss();
                  let alert = this.alertCtrl.create({
                    title: "Error de conexión",
                    subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde",
                    buttons: ["Aceptar"]
                });
                alert.present();
              }
            );
          }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioeditarPage');
  }

}
