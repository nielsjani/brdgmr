import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LotanaLookupService} from "./service/lotana/lookup.lotana.service";
import {LotanaLookupComponent} from "./components/lotanalookup/lotana-lookup.component";
import {UnavailablePipe} from "./filter/unavailable.pipe";
import {LookupResultsComponent} from "./components/lookupresults/lookup-results.component";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LookupResultsComponent,
    LotanaLookupComponent,
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
    LotanaLookupService
  ]
})
export class AppModule {}
