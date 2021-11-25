import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { VehiculoService } from '../servicios/VehiculoServices';

import { RentasmostrarPage,
  MenunivelunoPage,
  MenuniveldosPage, 
  VehiculosrentadosPage
} from "../index.paginas";

@Component({
  selector: 'page-vehiculosrentadosavanza',
  templateUrl: 'vehiculosrentadosavanza.html',
})
export class VehiculosrentadosavanzaPage {

  rentas = []
  rentasLista = []
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
    this.listar_rentas();
 

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

  regresar(){      
    this.navCtrl.push(VehiculosrentadosPage);
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

  listar_rentas() 
  {
         this.loading =this.loadingCtrl.create({
           content: "Cargando vehiculos...",
            });
             this.loading.present();

           this.VehiculoService.listarVehiculosAvanza().subscribe(
          data => {


             console.log(data);
             this.rentas=data
             this.rentasLista= this.rentas
              if(data.length!=0){
                this.loading.dismiss();
              console.log('Tienes vehiculos rentados');

              // this.navCtrl.push(SlidePage);
             }

              if(data.length===0){
                this.loading.dismiss();
               console.log('No hay vehiculos rentados');
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
      window.localStorage.setItem('datosRenta', JSON.stringify(item));
      this.navCtrl.push(RentasmostrarPage)
 
  }


// PARA ACTUALIZAR LOS DATOS

  Refrescar(refresher) 
  {
      console.log('Comienzo de la operación asincrónica', refresher);
      this.listar_rentas()
      setTimeout(() => {
        console.log('La operación asincrónica ha finalizado');
        refresher.complete();
      }, 2000);
  }


  // BARRA DE BUSCADOR
 
  getItems(ev: any) {

    this.rentas = this.rentasLista
    
    let val = ev.target.value;

    if (val && val.trim() != '') {
   this.rentas =this.rentas.filter((item) => {
        return (item.tipoVehiculo.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculosrentadosavanzaPage');
  }

}
