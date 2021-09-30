import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-rentaseditar',
  templateUrl: 'rentaseditar.html',
})
export class RentaseditarPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) 
  {



    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RentaseditarPage');
  }

}
