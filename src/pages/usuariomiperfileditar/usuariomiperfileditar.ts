import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

@Component({
  selector: 'page-usuariomiperfileditar',
  templateUrl: 'usuariomiperfileditar.html',
})
export class UsuariomiperfileditarPage {

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
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {

    this.UsuarioService=UsuarioService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
    this.datosBDUsuario.Username = this.perfil.Username;
    this.datosBDUsuario.Correo = this.perfil.Correo; 
    this.datosBDUsuario.Pass = this.perfil.Pass;
    this.datosBDUsuario.nombreUsuario = this.perfil.nombreUsuario; 
    this.datosBDUsuario.nivelUsuario = this.perfil.nivelUsuario; 
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  //EDITAR CLIENTE

  editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.perfil.idUsuario);
              console.log(this.datosBDUsuario.Username);
              console.log(this.datosBDUsuario.Correo);
              console.log(this.datosBDUsuario.Pass);
              console.log(this.datosBDUsuario.nombreUsuario);
              console.log(this.datosBDUsuario.nivelUsuario);


            let loading =this.loadingCtrl.create({
            content: "Modificando tu perfil...",
              });
              loading.present();

            this.UsuarioService.editar_usuario(this.perfil.idUsuario, 
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
                subTitle:"Para que los cambios surgan efecto, debes cerrar e iniciar sesion nuevamente",
                buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {
                        //this.navCtrl.setRoot(MenuPage)
                        this.dismiss()
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo modificar tu perfil, intentalo nuevamente",
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
    console.log('ionViewDidLoad UsuariomiperfileditarPage');
  }

}
