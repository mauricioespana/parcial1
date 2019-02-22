import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavsProvider } from '../../providers/favs/favs';

/**
 * Generated class for the DispPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disp',
  templateUrl: 'disp.html',
})
export class DispPage {

  d = {};
  imgs =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavsProvider) {
    this.d = this.navParams.get('d');
    if(this.d.ad.hasOwnProperty('images')){
      this.imgs = this.d.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispPage');
  }

  favoritos(d){
    this.fav.addFavoritos(d);
  }

}
