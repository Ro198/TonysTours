import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { VehiculoService } from '../servicios/VehiculoServices';


import { VehiculomostrarlibrePage
} from "../index.paginas";

@Component({
  selector: 'page-pvehiculoocho',
  templateUrl: 'pvehiculoocho.html',
})
export class PvehiculoochoPage {

  vehiculos = []
  vehiculosLista = []
  datosUsuario
  perfil
  loading;
  BDCliente;
  VehiculoService;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              VehiculoService: VehiculoService,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) 
  {

    this.VehiculoService=VehiculoService;
    this.listar_vehiculos();
 

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

    

    
  }

  dismiss() {
    this.viewCtrl.dismiss();  
  }

  listar_vehiculos() 
  {
         this.loading =this.loadingCtrl.create({
           content: "Cargando vehiculos...",
            });
             this.loading.present();

           this.VehiculoService.listarVehiculosEnServicioOcho().subscribe(
          data => {


             console.log(data);
             this.vehiculos=data
             this.vehiculosLista= this.vehiculos
              if(data.length!=0){
                this.loading.dismiss();
              console.log('Tienes vehiculos agregados');

              // this.navCtrl.push(SlidePage);
             }

              if(data.length===0){
                this.loading.dismiss();
               console.log('No hay vehiculos agregados');
               //this.navCtrl.push(BienvenidaPage);
             }

            }, 

          err => {
            this.loading.dismiss();
            console.log(err)

          //() =>  console.log('cargar equipos complete')
          });
  } 

  detalles(event,item) 
  {                
          window.localStorage.setItem('datosVehiculo', JSON.stringify(item));
          this.navCtrl.push(VehiculomostrarlibrePage)
  }

// PARA ACTUALIZAR LOS DATOS

  Refrescar(refresher) 
  {
      console.log('Comienzo de la operación asincrónica', refresher);
      this.listar_vehiculos()
      setTimeout(() => {
        console.log('La operación asincrónica ha finalizado');
        refresher.complete();
      }, 2000);
  }


  // BARRA DE BUSCADOR
 
  getItems(ev: any) {

    this.vehiculos = this.vehiculosLista
    
    let val = ev.target.value;

    if (val && val.trim() != '') {
   this.vehiculos =this.vehiculos.filter((item) => {
        return (item.tipoVehiculo.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PvehiculoochoPage');
  }

}
