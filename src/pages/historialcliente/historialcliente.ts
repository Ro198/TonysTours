import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController, Platform, ActionSheetController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';

import { ClienteeditarPage,
         ClientemostrarhistorialPage,
         HistorialPage,
         AgendaeditarPage,
         RentaseditarPage
} from "../index.paginas";

@Component({
  selector: 'page-historialcliente',
  templateUrl: 'historialcliente.html',
})
export class HistorialclientePage {

BDCliente;
datosC;
datosUsuario;
perfil;
userData;

submitted = false;
ClienteService;

  constructor(public navCtrl: NavController,
              public platform: Platform, 
              public actionsheetCtrl: ActionSheetController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              ClienteService: ClienteService,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {

    this.ClienteService=ClienteService;

    this.BDCliente  = window.localStorage.getItem('datosCliente')
    this.datosC = JSON.parse(this.BDCliente )
    console.log(this.datosC);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    
  }

  regresar(){             
    this.navCtrl.push(ClientemostrarhistorialPage);
}

  dismiss() {
    this.viewCtrl.dismiss();
  }

  //ELIMINAR CLIENTE

eliminar(form){

  this.submitted = true;

          if(form.valid) {

            console.log(this.datosC.idCliente);

          let loading =this.loadingCtrl.create({
          content: "Eliminando cliente espere...",
            });
            loading.present();

          this.ClienteService.eliminar_cliente(this.datosC.idCliente).subscribe(

            data => {
                this.userData = data;
                console.log(data); 
                loading.dismiss();
                  if(this.userData.estatus === "OK"){
                  
                    let alert = this.alertCtrl.create({
                    title: "¡ELIMINADO!",
                    subTitle:"Tu cliente fue eliminado correctamente",
                    buttons: [
                      {
                        text: 'Aceptar',
                        handler: () => {
                          this.navCtrl.setRoot(HistorialPage)
                        }
                      }]
                  });
              alert.present();
       }
            if(this.userData.estatus === "ERROR"){

            let alert = this.alertCtrl.create({
              title: "¡ERROR!",
              subTitle:"No se pudo eliminar tu cliente, intentalo nuevamente",
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



enlace_editar_cliente()
{
  let actionSheet = this.actionsheetCtrl.create({
    title: 'Editar',
    cssClass: 'action-sheets-basic-page',
    buttons: [
      {
        text: 'Datos del cliente',
        role: 'destructive',
        icon: !this.platform.is('md') ? 'person' : null,
        handler: () => {
          this.navCtrl.push(ClienteeditarPage);
        }
      },
      {
        text: 'Agenda',
        icon: !this.platform.is('md') ? 'book' : null,
        handler: () => {
          this.navCtrl.push(AgendaeditarPage);
        }
      },
      {
        text: 'Rentas',
        icon: !this.platform.is('md') ? 'car' : null,
        handler: () => {
           this.navCtrl.push(RentaseditarPage);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel', // will always sort to be on the bottom
        icon: !this.platform.is('md') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}
      
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialclientePage');
  }

}
