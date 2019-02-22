import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { DispPage } from '../pages/disp/disp';
import { DispPageModule } from '../pages/disp/disp.module';
import { FavsPage } from '../pages/favs/favs';
import { FavsProvider } from '../providers/favs/favs';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { GamesPage } from '../pages/games/games';
import { PetsPage } from '../pages/pets/pets';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DispPage,
    FavsPage,
    SearchPage,
    TabsPage,
    GamesPage,
    PetsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DispPage,
    FavsPage,
    SearchPage,
    TabsPage,
    GamesPage,
    PetsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavsProvider
  ]
})
export class AppModule {}
