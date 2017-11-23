var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LotanaLookupService } from "./service/lookup/lotana/lookup.lotana.service";
import { LotanaLookupComponent } from "./components/lotanalookup/lotana-lookup.component";
import { UnavailablePipe } from "./filter/unavailable.pipe";
import { LookupResultsComponent } from "./components/lookupresults/lookup-results.component";
import { SpelshopLookupComponent } from "./components/spelshoplookup/spelshop-lookup.component";
import { SpelshopLookupService } from "./service/lookup/spelshop/lookup.spelshop.service";
import { QueenOfGamesLookupComponent } from "./components/queenofgameslookup/queenofgames-lookup.component";
import { QueenOfGamesLookupService } from "./service/lookup/queenofgames/lookup.queenofgames.service";
import { SpelonkLookupComponent } from "./components/spelonklookup/spelonk-lookup.component";
import { SpelonkLookupService } from "./service/lookup/spelonk/lookup.spelonk.service";
import { AddToWishlistPage } from "../pages/add-to-wishlist/add-to-wishlist";
import { AddToWishlisFinalLookupComponent } from "./components/add-to-wishlist-final/add-to-wishlist-final.component";
import { WishlistService } from "./service/wishlist.service";
import { HttpModule } from '@angular/http';
import { WishlistDetailPage } from "../pages/wishlist-detail/wishlist-detail";
import { AvailableIconComponent } from "./components/available-icon/available-icon.component";
import { ShopinfoPresentPipe } from "./filter/shopinfo-present";
import LookupServiceFinder from "./service/lookup/lookup.service.finder";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            WishlistPage,
            AddToWishlistPage,
            WishlistDetailPage,
            ListPage,
            LookupResultsComponent,
            LotanaLookupComponent,
            SpelshopLookupComponent,
            SpelonkLookupComponent,
            QueenOfGamesLookupComponent,
            AddToWishlisFinalLookupComponent,
            AvailableIconComponent,
            UnavailablePipe,
            ShopinfoPresentPipe
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
            WishlistDetailPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            LookupServiceFinder,
            LotanaLookupService,
            SpelshopLookupService,
            QueenOfGamesLookupService,
            SpelonkLookupService,
            WishlistService
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map