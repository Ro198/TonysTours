import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';


@Component({
  selector: 'page-usuarioagregar',
  templateUrl: 'usuarioagregar.html',
})
export class UsuarioagregarPage {

  datosBDUsuario: { 
    Username?: string;
    Correo?: string;
    Pass?: string;
    nombreUsuario?: string;
    nivelUsuario?: string;
  } = {};

  datosUsuario;
  perfil;

  UsuarioService;
  userData;

  
  submitted = false;
  disableSubmit = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              UsuarioService: UsuarioService,
              public alertCtrl: AlertController) 
  {

    this.UsuarioService=UsuarioService;


    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);



  }

  //GUARDAR USUARIO

  guardar(form){

    this.submitted = true;
   
           if(form.valid) {
   
             console.log(this.datosBDUsuario.Username);
             console.log(this.datosBDUsuario.Correo);
             console.log(this.datosBDUsuario.Pass);
             console.log(this.datosBDUsuario.nombreUsuario);
             console.log(this.datosBDUsuario.nivelUsuario);

            let loading =this.loadingCtrl.create({
            content: "Guardando usuario espere...",
             });
            loading.present();
   
            this.UsuarioService.agregar_usuario(this.datosBDUsuario.Username,
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
                  title: "¡EXCELENTE!",
                  subTitle:"Tu usuario fue registrado correctamente",
                  buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {

                      this.dismiss()
                      }
                    }]
                    });
                      alert.present();
   
   }
   
             if(this.userData.estatus === "ERROR"){
   
              let alert = this.alertCtrl.create({
               title: "¡ERROR!",
               subTitle:"No se pudo registrar tu usuario, intentalo nuevamente",
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
                   subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde",
                   buttons: ["Aceptar"]
               });
                alert.present();
             }
   
            );
   
           }
   
   }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioagregarPage');
  }

}
