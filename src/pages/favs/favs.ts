import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispPage } from '../disp/disp';
import { FavsProvider } from '../../providers/favs/favs';

/**
 * Generated class for the FavsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favs',
  templateUrl: 'favs.html',
})
export class FavsPage {
  dispP = DispPage;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavsProvider) {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavsPage');
  }

  verDisp(d){
    this.navCtrl.push(this.dispP, {d: d})
  }

}
