import { Component } from '@angular/core';
import {
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  AlertController,
  MenuController
} from "ionic-angular";
import { LoginService } from "../servicios/LoginServices";

import { AcuerdoPage } from "../index.paginas";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: { username?: string; password?: string } = {};

  loginService;
  loading;
  retrievedString;
  currentMasc;
  submitted = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              loginService: LoginService,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private menuCtrl: MenuController) 
  {

     this.menuCtrl.enable(false, "myMenu");
     this.loginService = loginService;
  }

  //LOGIN USUARIO
  
loginUser(form) {
    this.submitted = true;
    console.log(this.login.username);
    console.log(this.login.password);
    if (form.valid) {
      this.loading = this.loadingCtrl.create({
        content: "Ingresando a TonysTours, espere..."
      });
      this.loading.present();

      this.loginService
        .loginUsuario(this.login.username, this.login.password)
        .subscribe(
          data => {
            console.log(data);
            this.loading.dismiss();

            if (data.length == 0) {
              console.log("No existen datos");
              let toast = this.toastCtrl.create({
                message: "Usuario y/o Contraseña invalidos",
                duration: 3000,
                position: "middle"
              });

              toast.onDidDismiss(() => {
                console.log("Dismissed toast");
              });

              toast.present();
            } else {
              //this.loading.dismiss();
              console.log(" El usuario existe");
              window.localStorage.setItem("dataUser", JSON.stringify(data[0]));

              this.navCtrl.push(AcuerdoPage);
              //this.listarMascotas();
              //this.navCtrl.push(BienvenidaPage);
            }
          },
          err => {
            console.log(err);
            this.loading.dismiss();
            let toast = this.toastCtrl.create({
              message:
                "Ocurrio un problema para realizar la operación, intentalo más tarde...",
              duration: 3000,
              position: "middle"
            });

            toast.onDidDismiss(() => {
              console.log("Dismissed toast");
            });

            toast.present();
          }
          //() => console.log('Verificacion completa')
        );
    } else {
     
        let toast = this.toastCtrl.create({
          message:
            "por favor, completa todos los campos",
          duration: 3000,
          position: "middle"
        });

        toast.onDidDismiss(() => {
          console.log("por favor, completa todos los campos");
        });

        toast.present(); 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
