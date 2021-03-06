import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DispPage } from '../disp/disp';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disp = [];
  dispP = DispPage;
  buscar = SearchPage;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get("/v1/klfst?&category=5020&offset=1&lim=29&lang=es").subscribe(data=>{
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
