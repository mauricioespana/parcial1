import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavsProvider {
  favoritos =[];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavsProvider Provider');
  }

  addFavoritos(d){
    this.favoritos.push(d);

    const toast = this.toastCtrl.create({
      message: 'Item agregado a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  remove(d){
    let index =  this.favoritos.findIndex(item =>{
      return item.ad.subject == d.ad.subject &&
      item.ad.user.account.name == d.ad.user.account.name;
    });

    if (index > -1){
      this.favoritos.splice(index,1);
      const toast = this.toastCtrl.create({
        message: 'Item agregado a favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  existe(d){
    return this.favoritos.some(item =>{
      return item.ad.subject == d.ad.subject &&
      item.ad.user.account.name == d.ad.user.account.name;
    });
  }

  getFavoritos(){
    return this.favoritos;
  }

}
