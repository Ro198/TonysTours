import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, ViewController  } from 'ionic-angular';
import { VehiculoService } from '../servicios/VehiculoServices';

@Component({
  selector: 'page-rentaeditar',
  templateUrl: 'rentaeditar.html',
})
export class RentaeditarPage {

  datosEditarRenta: { 
    chofer?: string, 
    destino?: string,
    fechaSalida?: string,
    fechaLlegada?: string,
    kilometrajeR?: string,  
    cristalesR?: string,
    llantasR?: string,
    tapiceriaR?: string,
    documentacionVehiculoR?: string,
    refaccionR?: string,
    gatoR?: string,
    notasR?: string
  } = {}; 

  VehiculoService;
  BDRenta;
  datosR;
  datosUsuario;
  perfil;

  submitted = false;
  disableSubmit = false;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              VehiculoService: VehiculoService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController) 
  {

    this.VehiculoService=VehiculoService;

    this.BDRenta  = window.localStorage.getItem('datosRenta')
    this.datosR = JSON.parse(this.BDRenta )
    console.log(this.datosR);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

 
    this.datosEditarRenta.chofer = this.datosR.chofer;
    this.datosEditarRenta.destino = this.datosR.destino;
    this.datosEditarRenta.fechaSalida = this.datosR.fechaSalida; 
    this.datosEditarRenta.fechaLlegada = this.datosR.fechaLlegada;
    this.datosEditarRenta.kilometrajeR = this.datosR.kilometrajeR;  
    this.datosEditarRenta.cristalesR = this.datosR.cristalesR; 
    this.datosEditarRenta.llantasR = this.datosR.llantasR; 
    this.datosEditarRenta.tapiceriaR = this.datosR.tapiceriaR;
    this.datosEditarRenta.documentacionVehiculoR = this.datosR.documentacionVehiculoR; 
    this.datosEditarRenta.refaccionR = this.datosR.refaccionR; 
    this.datosEditarRenta.gatoR = this.datosR.gatoR;
    this.datosEditarRenta.notasR = this.datosR.notasR;

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  //EDITAR DATOS RENTA

  editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosR.idRenta);
              console.log(this.datosEditarRenta.chofer);
              console.log(this.datosEditarRenta.destino);
              console.log(this.datosEditarRenta.fechaSalida);
              console.log(this.datosEditarRenta.fechaLlegada);
              console.log(this.datosEditarRenta.kilometrajeR);
              console.log(this.datosEditarRenta.cristalesR);
              console.log(this.datosEditarRenta.llantasR);
              console.log(this.datosEditarRenta.tapiceriaR);
              console.log(this.datosEditarRenta.documentacionVehiculoR);
              console.log(this.datosEditarRenta.refaccionR);
              console.log(this.datosEditarRenta.gatoR);
              console.log(this.datosEditarRenta.notasR);
              console.log(this.datosR.idVehiculo);
              console.log(this.datosR.idCliente);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Modificando tu renta espere...",
              });
              loading.present();

              this.VehiculoService.editar_renta(this.datosR.idRenta, 
                                                this.datosEditarRenta.chofer,
                                                this.datosEditarRenta.destino, 
                                                this.datosEditarRenta.fechaSalida,
                                                this.datosEditarRenta.fechaLlegada,
                                                this.datosEditarRenta.kilometrajeR, 
                                                this.datosEditarRenta.cristalesR, 
                                                this.datosEditarRenta.llantasR,                                              
                                                this.datosEditarRenta.tapiceriaR,
                                                this.datosEditarRenta.documentacionVehiculoR,
                                                this.datosEditarRenta.refaccionR,
                                                this.datosEditarRenta.gatoR,
                                                this.datosEditarRenta.notasR,
                                                this.datosR.idVehiculo,
                                                this.datosR.idCliente,
                                                this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Tu renta fue modificada correctamente",
                buttons: [
                    {
                      text: 'Aceptar',
                      handler: () => {
                        //this.navCtrl.setRoot(MenuPage)
                        this.dismiss()
                      }
                    }]
               });
              alert.present();
             }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo modificar tu renta, intentalo nuevamente",
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
    console.log('ionViewDidLoad RentaeditarPage');
  }

}
