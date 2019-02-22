import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { DispPage } from '../disp/disp';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  disp = [];
  dispP = DispPage;
  buscar = SearchPage;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=5060&offset=1&lim=29&lang=es").subscribe(data=>{
      //console.log(JSON.stringify(data))
      if (data.hasOwnProperty('list_ads')){
        this.disp = data['list_ads'];
      }
    }, error=>{
      //console.log(JSON.stringify(error))
    });    
  }
  verDisp(d){
      this.navCtrl.push(this.dispP, {d:d})
  }
  clickSearch(){
    this.navCtrl.push(this.buscar, {disp:this.disp});

  }
}