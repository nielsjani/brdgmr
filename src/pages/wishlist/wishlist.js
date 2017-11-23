var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { AddToWishlistPage } from "../add-to-wishlist/add-to-wishlist";
import { WishlistService } from "../../app/service/wishlist.service";
import { WishlistDetailPage } from "../wishlist-detail/wishlist-detail";
import PersonalWishlistMapper from "../../app/class/PersonalWishlistMapper";
var WishlistPage = (function () {
    function WishlistPage(navCtrl, wishlistService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.wishlistService = wishlistService;
        this.alertCtrl = alertCtrl;
        this.reorderModeEnabled = false;
    }
    WishlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.wishlistService.getWishlist()
            .subscribe(function (response) {
            _this.personalWishlist = new PersonalWishlistMapper(_this.wishlistService).mapPersonalWishlist(response.json());
            if (_this.hasWishlist()) {
                _this.fixWishlistOrder();
            }
        });
    };
    WishlistPage.prototype.hasWishlist = function () {
        return this.personalWishlist && this.personalWishlist.wishlistItems;
    };
    WishlistPage.prototype.getFirstFilledInImageUrl = function (wishlistItem) {
        return this.getFirstFilledInSelection(wishlistItem).boardgame.image;
    };
    WishlistPage.prototype.getFirstFilledInSelection = function (wishlistItem) {
        return wishlistItem.selection.filter(function (item) { return item.boardgame && item.boardgame.image; })[0];
    };
    WishlistPage.prototype.goToAddToWishListPage = function () {
        this.navCtrl.push(AddToWishlistPage);
    };
    WishlistPage.prototype.goToDetail = function (id) {
        this.navCtrl.push(WishlistDetailPage, { wishlistId: this.personalWishlist.id, itemId: id });
    };
    WishlistPage.prototype.showDeleteModal = function (wishlistItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete item?",
            message: "Are you sure you want to delete " + this.getFirstFilledInSelection(wishlistItem).boardgame.name + " ?",
            buttons: [
                {
                    text: "Oops, please don't"
                },
                {
                    text: "Yes, delete it",
                    handler: function () {
                        var removedItemIndex = _this.personalWishlist.wishlistItems.indexOf(wishlistItem);
                        _this.decrementOrderOfItemsAboveIndex(removedItemIndex);
                        _this.personalWishlist.wishlistItems.splice(removedItemIndex, 1);
                        _this.wishlistService.update(_this.personalWishlist);
                    }
                }
            ]
        });
        alert.present();
    };
    WishlistPage.prototype.fixWishlistOrder = function () {
        for (var key in this.personalWishlist.wishlistItems) {
            if (this.personalWishlist.wishlistItems.hasOwnProperty(key)) {
                this.personalWishlist.wishlistItems[key].technicalId = key;
            }
        }
        this.determineOrder();
    };
    WishlistPage.prototype.determineOrder = function () {
        var maxOrder = Math.max.apply(Math, this.personalWishlist.wishlistItems.map(function (item) { return item.order || 0; })) || 0;
        var updateNeeded = false;
        this.personalWishlist.wishlistItems.forEach(function (item) {
            if (item.order === undefined) {
                item.order = maxOrder + 1;
                maxOrder++;
                updateNeeded = true;
            }
        });
        if (updateNeeded) {
            this.wishlistService.update(this.personalWishlist);
        }
        this.personalWishlist.wishlistItems.sort(function (w1, w2) { return w1.order - w2.order; });
    };
    WishlistPage.prototype.reorderItems = function (indexes) {
        var element = this.personalWishlist.wishlistItems[indexes.from];
        this.personalWishlist.wishlistItems.splice(indexes.from, 1);
        this.personalWishlist.wishlistItems.splice(indexes.to, 0, element);
        for (var i = 0; i < this.personalWishlist.wishlistItems.length; i++) {
            this.personalWishlist.wishlistItems[i].order = i + 1;
        }
        this.wishlistService.update(this.personalWishlist);
    };
    WishlistPage.prototype.decrementOrderOfItemsAboveIndex = function (removedItemIndex) {
        for (var i = removedItemIndex; i < this.personalWishlist.wishlistItems.length; i++) {
            this.personalWishlist.wishlistItems[i].order--;
        }
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    Component({
        selector: 'page-wishlist',
        templateUrl: 'wishlist.html'
    }),
    __metadata("design:paramtypes", [NavController, WishlistService, AlertController])
], WishlistPage);
export { WishlistPage };
//# sourceMappingURL=wishlist.js.map