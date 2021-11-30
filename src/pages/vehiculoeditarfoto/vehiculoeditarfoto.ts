import { Component } from '@angular/core';
import {  NavController, 
  NavParams, 
  LoadingController, 
  AlertController, 
  ViewController, 
  ActionSheetController,
  Platform } from 'ionic-angular';
import { VehiculoFotoService } from '../servicios/VehiculoFotoServices';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { 
  VehiculomostrarPage,
  MenunivelunoPage,
  MenuniveldosPage,
  VehiculomostrarlibrePage,
  VehiculomostrarocupadoPage,
  VehiculosopcionesPage
} from "../index.paginas";


@Component({
  selector: 'page-vehiculoeditarfoto',
  templateUrl: 'vehiculoeditarfoto.html',
})
export class VehiculoeditarfotoPage {

  uploadFile: any;
  options: Object = {
      url2: 'http://52.206.247.152/TonyToursBD/API/foto.php'
  };   

  captureDataUrl: string;

  datosVehiculoFoto: { 
    foto?: string      
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
              public loadingCtrl: LoadingController,
              private camera: Camera,
              public actionCtrl: ActionSheetController,
              public platform: Platform) 
  {

    this.VehiculoFotoService=VehiculoFotoService;
    
    this.BDVehiculo  = window.localStorage.getItem('datosVehiculo')
    this.datosV = JSON.parse(this.BDVehiculo )
    console.log(this.datosV);

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
 

  }

  regresar(){
    if(this.datosV.autoRentado == "SIN SERVICIO"){             
      this.navCtrl.push(VehiculomostrarPage);

    }else if (this.datosV.autoRentado == "EN SERVICIO"){             
      this.navCtrl.push(VehiculomostrarlibrePage);
    
    }else if (this.datosV.autoRentado == "PARA LA RENTA"){             
      this.navCtrl.push(VehiculomostrarocupadoPage);

    }           

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

   //EDITAR VEHICULO

   editar(form){

    this.submitted = true;

            if(form.valid) {

              console.log(this.datosV.idVehiculo);
              console.log(this.datosVehiculoFoto.foto);
              console.log(this.perfil.idUsuario);

            let loading =this.loadingCtrl.create({
            content: "Cambiando la imagen, espere...",
              });
              loading.present();

              this.imagen  = window.localStorage.getItem('foto')

        this.VehiculoFotoService.editarVehiculoFoto(this.datosV.idVehiculo, 
                                                    this.imagen,
                                                    this.perfil.idUsuario).subscribe(

            data => {
                this.userData = data;
                console.log(data);
              loading.dismiss();
                if(this.userData.estatus === "OK"){
                //console.log('Usuario registrado');
                let alert = this.alertCtrl.create({
                title: "¡OPERACION EXITOSA!",
                subTitle:"Tu imagen se cambio correctamente",
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
                subTitle:"No se pudo cambiar tu imagen, intentalo nuevamente",
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
    console.log('ionViewDidLoad VehiculoeditarfotoPage');
  }

}
