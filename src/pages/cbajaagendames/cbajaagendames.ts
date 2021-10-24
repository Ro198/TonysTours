import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';

import { 
  ClienteactivomesPage,
  MenunivelunoPage,
  MenuniveldosPage,
  AclienteeneroPage,
  AclientefebreroPage,
  AclientemarzoPage,
  AclienteabrilPage,
  AclientemayoPage,
  AclientejunioPage,
  AclientejulioPage,
  AclienteagostoPage,
  AclienteseptiembrePage,
  AclienteoctubrePage,
  AclientenoviembrePage,
  AclientediciembrePage
} from "../index.paginas";

@Component({
  selector: 'page-cbajaagendames',
  templateUrl: 'cbajaagendames.html',
})
export class CbajaagendamesPage {

  editarCliente: { 
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
    hora?: string,
    anticipo?: string,
    clienteactivo?: string,
    notashistorial?: string
  } = {};

  submitted = false;
  disableSubmit = false;

  BDCliente;
  datosC;
  datosUsuario;
  perfil;
  userData;
 
  ClienteService;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ClienteService: ClienteService,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) 
  {

    this.ClienteService=ClienteService;
 
    this.BDCliente  = window.localStorage.getItem('datosCliente')
    this.datosC = JSON.parse(this.BDCliente )
    console.log(this.datosC);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.editarCliente.nombre = this.datosC.nombre;
    this.editarCliente.sexo = this.datosC.sexo;
    this.editarCliente.edad = this.datosC.edad; 
    this.editarCliente.direccion = this.datosC.direccion;
    this.editarCliente.colonia = this.datosC.colonia;  
    this.editarCliente.telefono = this.datosC.telefono; 
    this.editarCliente.ciudad = this.datosC.ciudad; 
    this.editarCliente.estado = this.datosC.estado;
    this.editarCliente.licencia = this.datosC.licencia; 
    this.editarCliente.fechaLicencia = this.datosC.fechaLicencia; 
    this.editarCliente.observacionesCliente = this.datosC.observacionesCliente;
    this.editarCliente.observacionesVehiculo = " ";
    this.editarCliente.tipoCliente = this.datosC.tipoCliente;
    this.editarCliente.vehiculoRentado = this.datosC.vehiculoRentado;
    this.editarCliente.vehiculosRentados = this.datosC.vehiculosRentados;
    this.editarCliente.vehiculosMalEstado = this.datosC.vehiculosMalEstado;
    this.editarCliente.mes = "Sin mes";
    this.editarCliente.dia = "Sin dia";
    this.editarCliente.hora = "00:00:00";
    this.editarCliente.anticipo = "0"; 
    this.editarCliente.clienteactivo = "EN HISTORIAL";
    this.editarCliente.notashistorial = this.datosC.notashistorial;

    
  }

  //Dar de baja al cliente de la agenda

 quitar(form){

  this.submitted = true;

          if(form.valid) {

            console.log(this.datosC.idCliente);
            console.log(this.editarCliente.nombre);
            console.log(this.editarCliente.sexo);
            console.log(this.editarCliente.edad);
            console.log(this.editarCliente.direccion);
            console.log(this.editarCliente.colonia);
            console.log(this.editarCliente.telefono);
            console.log(this.editarCliente.ciudad);
            console.log(this.editarCliente.estado);
            console.log(this.editarCliente.licencia);
            console.log(this.editarCliente.fechaLicencia);
            console.log(this.editarCliente.observacionesCliente);
            console.log(this.editarCliente.observacionesVehiculo);
            console.log(this.editarCliente.tipoCliente);
            console.log(this.editarCliente.vehiculoRentado);
            console.log(this.editarCliente.vehiculosRentados);
            console.log(this.editarCliente.vehiculosMalEstado);
            console.log(this.editarCliente.mes);
            console.log(this.editarCliente.dia);
            console.log(this.editarCliente.hora);
            console.log(this.editarCliente.anticipo);
            console.log(this.editarCliente.clienteactivo);
            console.log(this.editarCliente.notashistorial);
            console.log(this.perfil.idUsuario);

          let loading =this.loadingCtrl.create({
          content: "Quitando cliente de la agenda espere...",
            });
            loading.present();

          this.ClienteService.editar_cliente(this.datosC.idCliente, 
                                             this.editarCliente.nombre,                                       
                                             this.editarCliente.sexo,
                                             this.editarCliente.edad, 
                                             this.editarCliente.direccion,
                                             this.editarCliente.colonia,  
                                             this.editarCliente.telefono, 
                                             this.editarCliente.ciudad, 
                                             this.editarCliente.estado,
                                             this.editarCliente.licencia, 
                                             this.editarCliente.fechaLicencia, 
                                             this.editarCliente.observacionesCliente,
                                             this.editarCliente.observacionesVehiculo,
                                             this.editarCliente.tipoCliente,
                                             this.editarCliente.vehiculoRentado,
                                             this.editarCliente.vehiculosRentados,
                                             this.editarCliente.vehiculosMalEstado,
                                             this.editarCliente.mes,
                                             this.editarCliente.dia,
                                             this.editarCliente.hora,
                                             this.editarCliente.anticipo,
                                             this.editarCliente.clienteactivo,
                                             this.editarCliente.notashistorial,
                                             this.perfil.idUsuario).subscribe(

          data => {
              this.userData = data;
              console.log(data);
            loading.dismiss();
              if(this.userData.estatus === "OK"){
              //console.log('Usuario registrado');
              let alert = this.alertCtrl.create({
              title: "¡EXITO!",
              subTitle:"El cliente se ha quitado de la lista de agendados",
              buttons: [
                  {
                    text: 'Continuar',
                    handler: () => {
                      this.navCtrl.setRoot(ClienteactivomesPage)
                      //this.dismiss()
                    }
                  }]
             });
            alert.present();
           }

            if(this.userData.estatus === "ERROR"){

            let alert = this.alertCtrl.create({
              title: "¡ERROR!",
              subTitle:"No se pudo dar de baja, intentalo nuevamente",
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

regresar(){ 

  this.BDCliente  = window.localStorage.getItem('datosCliente')
  this.datosC = JSON.parse(this.BDCliente )


  if(this.datosC.mes == "Enero"){             
    this.navCtrl.push(AclienteeneroPage)
  }else if (this.datosC.mes == "Febrero"){             
    this.navCtrl.push(AclientefebreroPage);
  }else if (this.datosC.mes == "Marzo"){             
    this.navCtrl.push(AclientemarzoPage);
  }else if (this.datosC.mes == "Abril"){             
    this.navCtrl.push(AclienteabrilPage);
  }else if (this.datosC.mes == "Mayo"){             
    this.navCtrl.push(AclientemayoPage);
  }else if (this.datosC.mes == "Junio"){             
    this.navCtrl.push(AclientejunioPage);
  }else if (this.datosC.mes == "Julio"){             
    this.navCtrl.push(AclientejulioPage);
  }else if (this.datosC.mes == "Agosto"){             
    this.navCtrl.push(AclienteagostoPage);
  }else if (this.datosC.mes == "Septiembre"){             
    this.navCtrl.push(AclienteseptiembrePage);
  }else if (this.datosC.mes == "Octubre"){             
    this.navCtrl.push(AclienteoctubrePage);
  }else if (this.datosC.mes == "Noviembre"){             
    this.navCtrl.push(AclientenoviembrePage);
  }else if (this.datosC.mes == "Diciembre"){             
    this.navCtrl.push(AclientediciembrePage);
  }else{
    
  }

}


menu(){
  if(this.perfil.nivelUsuario == "Administrador"){             
    this.navCtrl.push(MenunivelunoPage);
  }else if (this.perfil.nivelUsuario == "Estandar"){             
    this.navCtrl.push(MenuniveldosPage);
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CbajaagendamesPage');
  }

}
