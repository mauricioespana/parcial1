import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispPage } from '../disp/disp';
import { SearchPage } from '../search/search';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the PetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {

  disp = [];
  dispP = DispPage;
  buscar = SearchPage;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=4020&offset=1&lim=29&lang=es").subscribe(data=>{
     // console.log(JSON.stringify(data))
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