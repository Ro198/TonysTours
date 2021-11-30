import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';

import { 
  MenunivelunoPage,
  MenuniveldosPage,
  TallermostrarPage,
  VehiculosopcionesPage
} from "../index.paginas";

@Component({
  selector: 'page-tallervd',
  templateUrl: 'tallervd.html',
})
export class TallervdPage {

  enviarVehiculoTaller: { 
    vehiculoMantenimiento?: string,
    motivoTaller?: string,
    fechaEntrada?: string,
    fechaSalidaT?: string,
    notasT?: string,
    idasTaller?: string  
  } = {};

  VehiculoFotoService;
  datosUsuario;
  perfil;
  BDVehiculo;
  datosV;
  submitted = false;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              VehiculoFotoService: VehiculoFotoService,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              public loadingCtrl: LoadingController) 
  {

    this.VehiculoFotoService=VehiculoFotoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.enviarVehiculoTaller.vehiculoMantenimiento = "SIN MANTENIMIENTO";
    this.enviarVehiculoTaller.motivoTaller = this.datosV.motivoTaller;
    this.enviarVehiculoTaller.fechaEntrada = this.datosV.fechaEntrada;
    this.enviarVehiculoTaller.notasT = this.datosV.notasT;
  }

  dismiss() {  
    this.viewCtrl.dismiss();
  }

  regresar(){              
    this.navCtrl.push(TallermostrarPage);
  }

  menu(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.push(MenunivelunoPage);
    }else if (this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.push(MenuniveldosPage);
    }
  }

  //ENVIAR VEHICULO A DISPONIBLES

  editar(form){ 

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosV.idVehiculo);
              console.log(this.enviarVehiculoTaller.vehiculoMantenimiento);
              console.log(this.enviarVehiculoTaller.motivoTaller);
              console.log(this.enviarVehiculoTaller.fechaEntrada);
              console.log(this.enviarVehiculoTaller.fechaSalidaT);
              console.log(this.enviarVehiculoTaller.notasT);
              console.log(this.enviarVehiculoTaller.idasTaller);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Procesando peticion...",
              });
              loading.present();

this.VehiculoFotoService.enviar_vehiculo_taller(this.datosV.idVehiculo, 
                                                this.enviarVehiculoTaller.vehiculoMantenimiento,
                                                this.enviarVehiculoTaller.motivoTaller,
                                                this.enviarVehiculoTaller.fechaEntrada,
                                                this.enviarVehiculoTaller.fechaSalidaT,
                                                this.enviarVehiculoTaller.notasT,
                                                this.enviarVehiculoTaller.idasTaller,                                                                        
                                                this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Ahora tu vehiculo puede ser utilizado una vez más",
                buttons: [
                    {
                      text: 'Continuar',
                      handler: () => { 
                        this.navCtrl.setRoot(VehiculosopcionesPage);
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo procesar tu peticion, intentalo nuevamente",
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
    console.log('ionViewDidLoad TallervdPage');
  }

}
