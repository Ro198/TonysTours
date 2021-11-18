import { Component } from '@angular/core';
import { NavController, 
         NavParams, 
         LoadingController, 
         AlertController, 
         ViewController, 
         ActionSheetController,
         Platform } from 'ionic-angular';
         
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { 
  VehiculossinservicioPage,
  MenunivelunoPage,
  MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-vehiculoagregar',
  templateUrl: 'vehiculoagregar.html',
})
export class VehiculoagregarPage {

  captureDataUrl: string;

  datosVehiculo: { 
    marcaVehiculo?: string, 
    tipoVehiculo?: string,
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
    foto?: string,
    motivoTaller?: string,
    fechaEntrada?: string,
    fechaSalidaT?: string,
    notasT?: string,
    idasTaller?: string      
  } = {};

  datosUsuario;
  perfil;
  submitted = false;
  imagen;
  VehiculoFotoService;
  userData;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              VehiculoFotoService: VehiculoFotoService,
              public alertCtrl: AlertController, 
              private viewCtrl: ViewController,
              public actionCtrl: ActionSheetController,
              public platform: Platform,
              private camera: Camera) 
              
  {

    this.VehiculoFotoService=VehiculoFotoService;

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    this.datosVehiculo.vehiculoMantenimiento = "SIN MANTENIMIENTO";
    this.datosVehiculo.autoRentado = "SIN SERVICIO";
    this.datosVehiculo.renta = "SIN RENTAR";
    this.datosVehiculo.motivoTaller = " ";
    this.datosVehiculo.fechaEntrada = " ";
    this.datosVehiculo.fechaSalidaT = " ";
    this.datosVehiculo.notasT = " ";
    this.datosVehiculo.idasTaller = "0"; 
    this.datosVehiculo.notasV = " ";
    this.datosVehiculo.cristalesV = " ";
    this.datosVehiculo.llantasV = " ";
    this.datosVehiculo.tapiceriaV = " ";
    this.datosVehiculo.numeroMotor = " ";
    this.datosVehiculo.numeroSerie = " ";
  }

  dismiss() {
    this.viewCtrl.dismiss();
}

regresar(){             
  this.navCtrl.push(VehiculossinservicioPage);
}

menu(){
  if(this.perfil.nivelUsuario == "Administrador"){             
  this.navCtrl.setRoot(MenunivelunoPage);
  }else if(this.perfil.nivelUsuario == "Estandar"){             
  this.navCtrl.setRoot(MenuniveldosPage);
  }
}

  // GUARDAR VEHICULO BTN

  guardar(form){
  
    this.submitted = true;

            if(form.valid) {

              console.log(this.datosVehiculo.marcaVehiculo);
              console.log(this.datosVehiculo.tipoVehiculo);
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
              console.log(this.datosVehiculo.foto);
              console.log(this.datosVehiculo.motivoTaller);
              console.log(this.datosVehiculo.fechaEntrada);
              console.log(this.datosVehiculo.fechaSalidaT);
              console.log(this.datosVehiculo.notasT);
              console.log(this.datosVehiculo.idasTaller);
              console.log(this.perfil.idUsuario);


            let loading =this.loadingCtrl.create({
            content: "Guardando vehiculo...",});
              loading.present();

            this.imagen  = window.localStorage.getItem('foto')

            this.VehiculoFotoService.agregarVehiculo(this.datosVehiculo.marcaVehiculo, 
                                                     this.datosVehiculo.tipoVehiculo,
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
                                                     this.imagen,
                                                     this.datosVehiculo.motivoTaller,
                                                     this.datosVehiculo.fechaEntrada,
                                                     this.datosVehiculo.fechaSalidaT,
                                                     this.datosVehiculo.notasT,
                                                     this.datosVehiculo.idasTaller,
                                                     this.perfil.idUsuario).subscribe(

  data => {
                this.userData = data;
                console.log(data);
                // window.localStorage.setItem('dataMascota', JSON.stringify(data));
                loading.dismiss();
                  if(this.userData.estatus === "OK"){
                  //console.log('Usuario registrado');
                  let alert = this.alertCtrl.create({
                  title: "¡Excelente!",
                  subTitle:"Tu vehiculo fue agregado correctamente",
                  buttons: [
                      {
                        text: 'Aceptar',
                        handler: () => {
                          //this.navCtrl.push(Milista);
                        this.dismiss()
                        }
                      }]
                                });
                             alert.present();
                      }

              if(this.userData.estatus === "ERROR"){

              let alert = this.alertCtrl.create({
                title: "¡ERROR!",
                subTitle:"No se pudo registrar tu vehiculo, intentalo nuevamente",
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

upload(){
    
          let actionsheet =this.actionCtrl.create({
          title:'Elige una foto',
          buttons:[{
          text:'Libreria',
          icon: !this.platform.is('md') ? 'images' : null,
          handler:()=>{
            // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            this.libreria('Libreria')
            console.log('archivos del dispositivo')
          }
          },{
            text:'Camara',
            icon: !this.platform.is('md') ? 'camera' : null,
            handler:()=>{
              this.camara('Camara')
              console.log('Camara del dispositivo')
            }
          },{
            text:'Cancelar',
            role: 'destructive',
            icon: !this.platform.is('md') ? 'close-circle' : null,
            handler:()=>{
              console.log('se cancelo la operacion')
          }
        }]
      });
    actionsheet.present()
}

libreria(info){
    
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }
  
  this.camera.getPicture(options).then((imageData) => {
  // imageData is either a base64 encoded string or a file URI
  // If it's base64:
  
  
  this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        window.localStorage.setItem('foto', this.captureDataUrl);
  }, (err) => {
  // Handle error
  });

}

camara(info){

    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      window.localStorage.setItem('foto', this.captureDataUrl);
    }, (err) => {
      // Handle error
    });
  }

    ionViewDidLoad() {
      console.log('ionViewDidLoad VehiculoagregarPage');
    }

}
