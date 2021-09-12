import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {
  LoginPage,
  MenunivelunoPage,
  MenuniveldosPage
} from "../pages/index.paginas";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  userData;
  datosUser;
  rootPage;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController
    ) {

        this.initializeApp();
        this.datosUser = localStorage.getItem("dataUser");
        this.userData = JSON.parse(this.datosUser);

        
        platform.registerBackButtonAction(() => {
          let alert = alertCtrl.create({
            title: "Salir",
            message: "¿Deseas salir de la aplicación?",
            buttons: [
              {
                text: "Cancelar",
                role: "cancel",
                handler: () => {}
              },
              {
                text: "Salir",
                handler: () => {
                  navigator["app"].exitApp();
                }
              }
             
            ]
          });
          alert.present();
          // navigator['app'].exitApp();
        });

//CERRAR SESION

        if (this.userData == null) {
          this.rootPage = LoginPage;
        } 
        else if (this.userData.nivelUsuario == "Administrador"){
          this.rootPage = MenunivelunoPage;
        }
        else if (this.userData.nivelUsuario == "Estandar"){
          this.rootPage = MenuniveldosPage;
        }
  } 

    initializeApp() { 
      this.platform.ready().then(() => {

       
        this.statusBar.overlaysWebView(true);
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.statusBar.backgroundColorByHexString('#ffffff');
      });
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }

}

