import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, AlertController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';

import { 
    HistorialPage,
    MenunivelunoPage,
    MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-clienteagregar',
  templateUrl: 'clienteagregar.html',
})
export class ClienteagregarPage {

  datosCliente: { 
    nombre?: string, 
    sexo?: string,
    edad?: string,
    direccion?: string,
    colonia?: string,
    telefono?: string,
    ciudad?: string,
    estado?: string,
    licencia?: string,
    fechaLicencia?: string,
    observacionesCliente?: string,
    observacionesVehiculo?: string,
    tipoCliente?: string,
    vehiculoRentado?: string,
    vehiculosRentados?: string,
    vehiculosMalEstado?: string,
    mes?: string,
    dia?: string,
    anticipo?: string,
    clienteactivo?: string,
    notashistorial?: string
  } = {};


  BDCliente;
  datosC;
  datosUsuario;
  perfil;
  userData;

  ClienteService;

  submitted = false;
  disableSubmit = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController,
              ClienteService: ClienteService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) 
  {

    this.ClienteService=ClienteService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.datosCliente.observacionesCliente = " ";
    this.datosCliente.notashistorial = " ";
    this.datosCliente.observacionesVehiculo = " ";
    this.datosCliente.telefono = " ";
    this.datosCliente.vehiculoRentado = "SIN VEHICULO";
    this.datosCliente.vehiculosRentados = "0";
    this.datosCliente.vehiculosMalEstado = "0";
    this.datosCliente.mes = "Sin mes";
    this.datosCliente.dia = "Sin dia";
    this.datosCliente.anticipo = "0"; 
    this.datosCliente.clienteactivo = "EN HISTORIAL";

  }

  regresar(){             
        this.navCtrl.push(HistorialPage);
  }
  
  menu(){
    if(this.perfil.nivelUsuario == "Administrador"){             
      this.navCtrl.setRoot(MenunivelunoPage);
    }else if(this.perfil.nivelUsuario == "Estandar"){             
      this.navCtrl.setRoot(MenuniveldosPage);
    }
    
  }

//GUARDAR CLIENTE

  guardar(form){

    this.submitted = true;
   
           if(form.valid) {
   
             console.log(this.datosCliente.nombre);
             console.log(this.datosCliente.sexo);
             console.log(this.datosCliente.edad);
             console.log(this.datosCliente.direccion);
             console.log(this.datosCliente.colonia);
             console.log(this.datosCliente.telefono);
             console.log(this.datosCliente.ciudad);
             console.log(this.datosCliente.estado);
             console.log(this.datosCliente.licencia);
             console.log(this.datosCliente.fechaLicencia);
             console.log(this.datosCliente.observacionesCliente);
             console.log(this.datosCliente.observacionesVehiculo);
             console.log(this.datosCliente.tipoCliente);
             console.log(this.datosCliente.vehiculoRentado);
             console.log(this.datosCliente.vehiculosRentados);
             console.log(this.datosCliente.vehiculosMalEstado);
             console.log(this.datosCliente.mes);
             console.log(this.datosCliente.dia);
             console.log(this.datosCliente.anticipo);
             console.log(this.datosCliente.clienteactivo);
             console.log(this.datosCliente.notashistorial);
             console.log(this.perfil.idUsuario);


            let loading =this.loadingCtrl.create({
            content: "Guardando cliente espere...",
             });
            loading.present();
   
            this.ClienteService.agregar_cliente(this.datosCliente.nombre,
                                                this.datosCliente.sexo, 
                                                this.datosCliente.edad,
                                                this.datosCliente.direccion,
                                                this.datosCliente.colonia, 
                                                this.datosCliente.telefono, 
                                                this.datosCliente.ciudad,                                              
                                                this.datosCliente.estado,
                                                this.datosCliente.licencia,
                                                this.datosCliente.fechaLicencia,
                                                this.datosCliente.observacionesCliente,
                                                this.datosCliente.observacionesVehiculo,
                                                this.datosCliente.tipoCliente,
                                                this.datosCliente.vehiculoRentado,
                                                this.datosCliente.vehiculosRentados,
                                                this.datosCliente.vehiculosMalEstado,
                                                this.datosCliente.mes,
                                                this.datosCliente.dia,
                                                this.datosCliente.anticipo,
                                                this.datosCliente.clienteactivo,
                                                this.datosCliente.notashistorial,
                                                this.perfil.idUsuario).subscribe(
   
             data => {
                 this.userData = data;
                 console.log(data);
                loading.dismiss();
                 if(this.userData.estatus === "OK"){
                 //console.log('Usuario registrado');
                 let alert = this.alertCtrl.create({
                  title: "¡EXCELENTE!",
                  subTitle:"Tu cliente fue registrado correctamente",
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
               subTitle:"No se pudo registrar tu cliente, intentalo nuevamente",
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
                   subTitle:"Ocurrio un problema para realizar la operación, intentalo más tarde..",
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
    console.log('ionViewDidLoad ClienteagregarPage');
  }

}
