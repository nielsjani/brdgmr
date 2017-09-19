import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LotanaLookupService} from "./service/lookup/lotana/lookup.lotana.service";
import {LotanaLookupComponent} from "./components/lotanalookup/lotana-lookup.component";
import {UnavailablePipe} from "./filter/unavailable.pipe";
import {LookupResultsComponent} from "./components/lookupresults/lookup-results.component";
import {SpelshopLookupComponent} from "./components/spelshoplookup/spelshop-lookup.component";
import {SpelshopLookupService} from "./service/lookup/spelshop/lookup.spelshop.service";
import {QueenOfGamesLookupComponent} from "./components/queenofgameslookup/queenofgames-lookup.component";
import {QueenOfGamesLookupService} from "./service/lookup/queenofgames/lookup.queenofgames.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LookupResultsComponent,
    LotanaLookupComponent,
    SpelshopLookupComponent,
    QueenOfGamesLookupComponent,
    UnavailablePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LotanaLookupService,
    SpelshopLookupService,
    QueenOfGamesLookupService
  ]
})
export class AppModule {}
