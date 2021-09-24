import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';


import { ClienteeditarPage,
  HistorialPage,
  MenunivelunoPage,
  MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-clientemostrarhistorial',
  templateUrl: 'clientemostrarhistorial.html',
})
export class ClientemostrarhistorialPage {

BDCliente;
datosC;
datosUsuario;
perfil;
userData;

submitted = false;
ClienteService;

  constructor(public navCtrl: NavController, 
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
    this.navCtrl.push(HistorialPage);
}

menu(){
  if(this.perfil.nivelUsuario == "Administrador"){             
    this.navCtrl.push(MenunivelunoPage);
}else if (this.perfil.nivelUsuario == "Estandar"){             
  this.navCtrl.push(MenuniveldosPage);
}
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
  // console.log(item);

     // window.localStorage.setItem('datoscliente', JSON.stringify(item));
      this.navCtrl.push(ClienteeditarPage)

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientemostrarhistorialPage');
  }

}
