import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { HistorialService } from '../servicios/HistorialServices';


import { ClientemostrarhistorialPage,
         ClienteagregarPage
} from "../index.paginas";

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
}) 
export class HistorialPage {

  clientes = []
  clientesLista = []
  datosUsuario
  perfil
  loading;
  BDCliente;
  HistorialService;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private viewCtrl: ViewController,
              HistorialService: HistorialService,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) 
  {

    this.HistorialService=HistorialService;
    this.listar_clientes();
 

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);


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

           this.HistorialService.listarTodosLosClientes().subscribe(
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

  detalles(event,item) 
  {                
      window.localStorage.setItem('datosCliente', JSON.stringify(item));
      this.navCtrl.push(ClientemostrarhistorialPage)
 
  }


  enlace_agregar_cliente(){
    
    let modal = this.modalCtrl.create(ClienteagregarPage);
    modal.present();

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
        return (item.nombre.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
      })
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
  }

}
