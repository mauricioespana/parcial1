import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispPage } from '../disp/disp';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  disp =[];
  items =[];
  dispPage = DispPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disp = this.navParams.get('disp');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getItems(ev){
    console.log(ev.target.value);
    this.items = this.disp.filter(d => {
      return d.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

  verDisp(d){
    this.navCtrl.push(this.dispPage, {d: d})    
  }

}
