import { Component } from '@angular/core';
import {  NavController, 
  NavParams, 
  LoadingController, 
  AlertController, 
  ViewController} from 'ionic-angular';
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';

import { 
  VehiculomostrarocupadoPage,
  MenunivelunoPage,
  MenuniveldosPage,
  VehiculosopcionesPage
} from "../index.paginas";


@Component({
  selector: 'page-vehiculoeditartres',
  templateUrl: 'vehiculoeditartres.html',
})
export class VehiculoeditartresPage {

  datosVehiculo: { 
    marcaVehiculo?: string, 
    tipoVehiculo?: string,
    categoria?: string,
    numeroPasajeros?: string,
    placas?: string,
    modelo?: string,
    numeroMotor?: string,
    transmicion?: string,
    numeroSerie?: string,
    color?: string,
    kilometrajeV?: string,
    cristalesV?: string,
    llantasV?: string,
    tapiceriaV?: string,
    documentacionVehiculoV?: string,
    refaccionV?: string,
    gatoV?: string,
    vehiculoMantenimiento?: string,
    autoRentado?: string,
    renta?: string,
    notasV?: string,
    motivoTaller?: string,
    fechaEntrada?: string,
    fechaSalidaT?: string,
    notasT?: string,
    idasTaller?: string     
  } = {};

  VehiculoFotoService;
  datosUsuario;
  perfil;
  BDVehiculo ;
  datosV;
  submitted = false;
  imagen;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              VehiculoFotoService: VehiculoFotoService,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              public loadingCtrl: LoadingController) 
  {

    this.VehiculoFotoService=VehiculoFotoService;

    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.datosVehiculo.marcaVehiculo = this.datosV.marcaVehiculo;
    this.datosVehiculo.tipoVehiculo = this.datosV.tipoVehiculo;
    this.datosVehiculo.categoria = this.datosV.categoria;
    this.datosVehiculo.numeroPasajeros = this.datosV.numeroPasajeros;
    this.datosVehiculo.placas = this.datosV.placas; 
    this.datosVehiculo.modelo = this.datosV.modelo;
    this.datosVehiculo.numeroMotor = this.datosV.numeroMotor;  
    this.datosVehiculo.transmicion = this.datosV.transmicion; 
    this.datosVehiculo.numeroSerie = this.datosV.numeroSerie; 
    this.datosVehiculo.color = this.datosV.color;
    this.datosVehiculo.kilometrajeV = this.datosV.kilometrajeV; 
    this.datosVehiculo.cristalesV = this.datosV.cristalesV; 
    this.datosVehiculo.llantasV = this.datosV.llantasV;
    this.datosVehiculo.tapiceriaV = this.datosV.tapiceriaV;
    this.datosVehiculo.documentacionVehiculoV = this.datosV.documentacionVehiculoV;
    this.datosVehiculo.refaccionV = this.datosV.refaccionV;
    this.datosVehiculo.gatoV = this.datosV.gatoV;
    this.datosVehiculo.vehiculoMantenimiento = "SIN MANTENIMIENTO";
    this.datosVehiculo.autoRentado = "PARA LA RENTA";
    this.datosVehiculo.renta = "SIN RENTAR";
    this.datosVehiculo.notasV = this.datosV.notasV;
    this.datosVehiculo.motivoTaller = "Sin motivo";
    this.datosVehiculo.fechaEntrada = "0000-00-00";
    this.datosVehiculo.fechaSalidaT = "0000-00-00";
    this.datosVehiculo.notasT = "Ninguna";
    this.datosVehiculo.idasTaller = "0";


  }

  regresar(){             
    this.navCtrl.push(VehiculomostrarocupadoPage);
  }
  
  menu(){
    if(this.perfil.nivelUsuario == "Administrador"){             
    this.navCtrl.setRoot(MenunivelunoPage);
    }else if(this.perfil.nivelUsuario == "Estandar"){             
    this.navCtrl.setRoot(MenuniveldosPage);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

   //EDITAR VEHICULO

   editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosV.idVehiculo);
              console.log(this.datosVehiculo.marcaVehiculo);
              console.log(this.datosVehiculo.tipoVehiculo);
              console.log(this.datosVehiculo.categoria);
              console.log(this.datosVehiculo.numeroPasajeros);
              console.log(this.datosVehiculo.placas);
              console.log(this.datosVehiculo.modelo);
              console.log(this.datosVehiculo.numeroMotor);
              console.log(this.datosVehiculo.transmicion);
              console.log(this.datosVehiculo.numeroSerie);
              console.log(this.datosVehiculo.color);
              console.log(this.datosVehiculo.kilometrajeV);
              console.log(this.datosVehiculo.cristalesV);
              console.log(this.datosVehiculo.llantasV);
              console.log(this.datosVehiculo.tapiceriaV);
              console.log(this.datosVehiculo.documentacionVehiculoV);
              console.log(this.datosVehiculo.refaccionV);
              console.log(this.datosVehiculo.gatoV);
              console.log(this.datosVehiculo.vehiculoMantenimiento);
              console.log(this.datosVehiculo.autoRentado);
              console.log(this.datosVehiculo.renta);
              console.log(this.datosVehiculo.notasV);
              console.log(this.datosVehiculo.motivoTaller);
              console.log(this.datosVehiculo.fechaEntrada);
              console.log(this.datosVehiculo.fechaSalidaT);
              console.log(this.datosVehiculo.notasT);
              console.log(this.datosVehiculo.idasTaller);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Modificando datos del vehiculo, espere...",
              });
              loading.present();

        this.VehiculoFotoService.editarVehiculoDatos(this.datosV.idVehiculo, 
                                                this.datosVehiculo.marcaVehiculo, 
                                                this.datosVehiculo.tipoVehiculo,
                                                this.datosVehiculo.categoria,
                                                this.datosVehiculo.numeroPasajeros, 
                                                this.datosVehiculo.placas,
                                                this.datosVehiculo.modelo, 
                                                this.datosVehiculo.numeroMotor,
                                                this.datosVehiculo.transmicion, 
                                                this.datosVehiculo.numeroSerie,                                                    
                                                this.datosVehiculo.color,
                                                this.datosVehiculo.kilometrajeV,
                                                this.datosVehiculo.cristalesV,
                                                this.datosVehiculo.llantasV,
                                                this.datosVehiculo.tapiceriaV,
                                                this.datosVehiculo.documentacionVehiculoV,
                                                this.datosVehiculo.refaccionV,
                                                this.datosVehiculo.gatoV,
                                                this.datosVehiculo.vehiculoMantenimiento,
                                                this.datosVehiculo.autoRentado,
                                                this.datosVehiculo.renta,
                                                this.datosVehiculo.notasV,
                                                this.datosVehiculo.motivoTaller,
                                                this.datosVehiculo.fechaEntrada,
                                                this.datosVehiculo.fechaSalidaT,
                                                this.datosVehiculo.notasT,
                                                this.datosVehiculo.idasTaller,
                                                this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Los datos fueron modificados",
                buttons: [
                    {
                      text: 'Aceptar',
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
                subTitle:"No se pudo modificar tu vehiculo, intentalo nuevamente",
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
    console.log('ionViewDidLoad VehiculoeditartresPage');
  }

}
