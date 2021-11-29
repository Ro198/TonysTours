import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';


import { 
         HistorialPage,
         HistorialagendaPage,
         HistorialactivarPage,
         HistorialclientePage
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


  enlace_agenda()
{
  
  this.BDCliente  = window.localStorage.getItem('datosCliente')
  this.datosC = JSON.parse(this.BDCliente )
  

  if(this.datosC.mes !== "Sin mes"){

    let alert = this.alertCtrl.create({
      title: '¡Atencion!',
      subTitle: 'Este cliente ya se ha agendado, para reagendar los datos, valla a, los Datos del cliente, en la opción de editar.',
      buttons: ['DE ACUERDO']
    });
    alert.present();
  }
  
  else if(this.datosC.vehiculoRentado == "RENTANDO"){
    let alert = this.alertCtrl.create({
      title: '¡Agenda inactiva!',
      subTitle: 'No se puede agendar mientras que el cliente este rentando un vehiculo.',
      buttons: ['DE ACUERDO']
    });
    alert.present();
  }

  else if(this.datosC.clienteactivo == "ACTIVO"){
    let alert = this.alertCtrl.create({
      title: '¡Atencion!',
      subTitle: 'Mientras que el cliente este activo, no se puede agendar.',
      buttons: ['DE ACUERDO']
    });
    alert.present();
  }

  else if(this.datosC.mes == this.datosC.mes){
                                          
    this.navCtrl.push(HistorialagendaPage)

  }  
  else{
        let alert = this.alertCtrl.create({
        title: '¡ERROR!',
        subTitle: 'Algo salio mal...',
        buttons: ['REGRESAR']
          });
        alert.present();
        }

}


enlace_activar()
{
  this.BDCliente  = window.localStorage.getItem('datosCliente')
  this.datosC = JSON.parse(this.BDCliente )
  

  if(this.datosC.vehiculoRentado == "RENTANDO"){

    let alert = this.alertCtrl.create({
      title: '¡Opción bloqueada!',
      subTitle: 'No se puede acceder mientras que el cliente este rentando un vehiculo.',
      buttons: ['DE ACUERDO']
    });
    alert.present();
  }
  else if(this.datosC.vehiculoRentado == "SIN VEHICULO"){
                                          
    this.navCtrl.push(HistorialactivarPage)
  }
  else{
        let alert = this.alertCtrl.create({
        title: '¡ERROR!',
        subTitle: 'Algo salio mal...',
        buttons: ['REGRESAR']
          });
        alert.present();
        }

}

enlace_cliente() 
{
      this.navCtrl.push(HistorialclientePage)

}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientemostrarhistorialPage');
  }

}
