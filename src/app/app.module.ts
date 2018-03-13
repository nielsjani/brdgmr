import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { WishlistPage } from '../pages/wishlist/wishlist';
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
import {SpelonkLookupComponent} from "./components/spelonklookup/spelonk-lookup.component";
import {SpelonkLookupService} from "./service/lookup/spelonk/lookup.spelonk.service";
import {AddToWishlistPage} from "../pages/add-to-wishlist/add-to-wishlist";
import {AddToWishlisFinalLookupComponent} from "./components/add-to-wishlist-final/add-to-wishlist-final.component";
import {WishlistService} from "./service/wishlist.service";
import { HttpModule } from '@angular/http';
import {WishlistDetailPage} from "../pages/wishlist-detail/wishlist-detail";
import {AvailableIconComponent} from "./components/available-icon/available-icon.component";
import {ShopinfoPresentPipe} from "./filter/shopinfo-present";
import LookupServiceFinder from "./service/lookup/lookup.service.finder";
import {ShopinfoNotPresentPipe} from "./filter/shopinfo-not-present";
import {AddShopToWishlistPage} from "../pages/add-shop-to-wishlist/add-shop-to-wishlist";

@NgModule({
  declarations: [
    MyApp,
    WishlistPage,
    AddToWishlistPage,
    WishlistDetailPage,
    AddShopToWishlistPage,
    ListPage,
    LookupResultsComponent,
    LotanaLookupComponent,
    SpelshopLookupComponent,
    SpelonkLookupComponent,
    QueenOfGamesLookupComponent,
    AddToWishlisFinalLookupComponent,
    AvailableIconComponent,
    UnavailablePipe,
    ShopinfoPresentPipe,
    ShopinfoNotPresentPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WishlistPage,
    ListPage,
    AddToWishlistPage,
    WishlistDetailPage,
    AddShopToWishlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LookupServiceFinder,
    LotanaLookupService,
    SpelshopLookupService,
    QueenOfGamesLookupService,
    SpelonkLookupService,
    WishlistService
  ]
})
export class AppModule {}
