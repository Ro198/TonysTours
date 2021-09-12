import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { UsuarioService } from '../servicios/UsuarioServices';

import { UsuarioagregarPage,
         UsuariomostrarPage,
         MenunivelunoPage
} from "../index.paginas";

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios = []
  usuariosLista = []
  datosUsuario;
  perfil;
  UsuarioService;
  loading;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              UsuarioService: UsuarioService,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController) 
  {

    this.UsuarioService=UsuarioService;
    this.listar_usuarios();

    this.datosUsuario  = window.localStorage.getItem('dataUser')
    this.perfil = JSON.parse(this.datosUsuario )
    console.log(this.perfil);

  }

  //LISTAR USUARIOS

listar_usuarios()
{
       this.loading =this.loadingCtrl.create({
         content: "Cargando usuarios...",
          });
           this.loading.present();

         this.UsuarioService.listar_usuarios().subscribe(
        data => {
           console.log(data);
           this.usuarios=data
           this.usuariosLista= this.usuarios
            if(data.length!=0){
              this.loading.dismiss();
            console.log('Tienes usuarios agregados');
           }

            if(data.length===0){
              this.loading.dismiss();
             console.log('No hay usuarios agregados');
           }
          },

        err => {
          this.loading.dismiss();
          console.log(err)
        });
}

// PARA ACTUALIZAR LOS DATOS

Refrescar(refresher) 
{
    console.log('Comienzo de la operación asincrónica', refresher);
    this.listar_usuarios()
    setTimeout(() => {
      console.log('La operación asincrónica ha finalizado');
      refresher.complete();
    }, 2000);
}

// BARRA DE BUSCADOR

getItems(ev: any) {

  this.usuarios = this.usuariosLista
  
  let val = ev.target.value;

  if (val && val.trim() != '') {
 this.usuarios =this.usuarios.filter((item) => {
      return (item.nombreUsuario.toString().toLowerCase().indexOf(val.toLowerCase()) =="");
    })
  }
}

  detalles(event,item) 
  {  

    window.localStorage.setItem('infoUsuario', JSON.stringify(item));
    this.navCtrl.push(UsuariomostrarPage)

  }

  enlace_agregar_usuario(){
    
    let modal = this.modalCtrl.create(UsuarioagregarPage);
    modal.present();

  }

  regresar(){
      if(this.perfil.nivelUsuario == "Administrador"){             
          this.navCtrl.push(MenunivelunoPage);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuariosPage');
  }

}
