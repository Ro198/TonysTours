import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { ClienteService } from '../servicios/ClienteServices';

import { CbajaagendamesPage,
  ClientesmesPage,
  MenunivelunoPage,
  MenuniveldosPage
} from "../index.paginas";

@Component({
  selector: 'page-aclienteabril',
  templateUrl: 'aclienteabril.html',
})
export class AclienteabrilPage {

  clientes = []
  clientesLista = []
  datosUsuario
  perfil
  loading;
  BDCliente;
  ClienteService;
  datosC;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              ClienteService: ClienteService,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) 
  {

    this.ClienteService=ClienteService;
    this.listar_clientes();
 

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);
    
  }

    regresar(){      
      this.navCtrl.push(ClientesmesPage);
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

  listar_clientes()
  {
         this.loading =this.loadingCtrl.create({
           content: "Cargando clientes...",
            });
             this.loading.present();

           this.ClienteService.ClienteMesAbril().subscribe(
          data => {


             console.log(data);
             this.clientes=data
             this.clientesLista= this.clientes
              if(data.length!=0){
                this.loading.dismiss();
              console.log('Tienes clientes agregados');

              // this.navCtrl.push(SlidePage);
             }

              if(data.length===0){
                this.loading.dismiss();
               console.log('No hay clientes agregados');
               //this.navCtrl.push(BienvenidaPage);
             }

            }, 

          err => {
            this.loading.dismiss();
            console.log(err)

          //() =>  console.log('cargar equipos complete')
          });
  }

  detalles(event, item) 
  { 
        window.localStorage.setItem('datosCliente', JSON.stringify(item));                                 
        this.navCtrl.push(CbajaagendamesPage)
 
  }

// PARA ACTUALIZAR LOS DATOS

  Refrescar(refresher) 
  {
      console.log('Comienzo de la operación asincrónica', refresher);
      this.listar_clientes()
      setTimeout(() => {
        console.log('La operación asincrónica ha finalizado');
        refresher.complete();
      }, 2000);
  }


  // BARRA DE BUSCADOR 
 
  getItems(ev: any) {

    this.clientes = this.clientesLista
    
    let val = ev.target.value;

    if (val && val.trim() != '') {
   this.clientes =this.clientes.filter((item) => {
        return (item.dia.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AclienteabrilPage');
  }

}
