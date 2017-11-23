var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from "@angular/core";
import { NavController } from "ionic-angular";
import { FormBuilder, FormControl } from "@angular/forms";
import { WishlistService } from "../../service/wishlist.service";
import PersonalWishlist from "../../class/personalWishlist";
import WishlistItem from "../../class/wishlistitem";
import PersonalWishlistMapper from "../../class/PersonalWishlistMapper";
var AddToWishlisFinalLookupComponent = (function () {
    function AddToWishlisFinalLookupComponent(navController, formBuilder, wishlistService) {
        this.navController = navController;
        this.formBuilder = formBuilder;
        this.wishlistService = wishlistService;
        this.addToWishlistForm = this.formBuilder.group({
            gamename: new FormControl("")
        });
    }
    AddToWishlisFinalLookupComponent.prototype.ngOnInit = function () {
        this.addToWishlistForm.setValue({ gamename: this.getFirstGameName() });
    };
    AddToWishlisFinalLookupComponent.prototype.getFirstGameName = function () {
        return this.selection.filter(function (selected) { return selected.boardgame; })[0].boardgame.name;
    };
    AddToWishlisFinalLookupComponent.prototype.saveSelection = function () {
        var _this = this;
        this.wishlistService.getWishlist()
            .subscribe(function (response) {
            _this.wishlistService.addWishlistItem(_this.addItemToWishlist(response))
                .subscribe(function (response) { return _this.navController.popToRoot(); });
        });
    };
    AddToWishlisFinalLookupComponent.prototype.addItemToWishlist = function (response) {
        var wishlist = this.getOrCreateWishlist(response);
        wishlist.withNewWishlistItem(new WishlistItem()
            .withDisplayName(this.addToWishlistForm.value.gamename)
            .withSelection(this.selection));
        return wishlist;
    };
    AddToWishlisFinalLookupComponent.prototype.getTitle = function (selection) {
        if (selection.boardgame) {
            return selection.boardgame.name;
        }
        else {
            return "No game selected";
        }
    };
    AddToWishlisFinalLookupComponent.prototype.getPrice = function (selected) {
        if (selected.boardgame) {
            return "(" + selected.boardgame.price + " euro)";
        }
        else {
            return "";
        }
    };
    AddToWishlisFinalLookupComponent.prototype.getOrCreateWishlist = function (response) {
        var wishlist = response.json();
        return wishlist === null ? new PersonalWishlist() : new PersonalWishlistMapper(this.wishlistService).mapPersonalWishlist(wishlist);
    };
    return AddToWishlisFinalLookupComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], AddToWishlisFinalLookupComponent.prototype, "selection", void 0);
AddToWishlisFinalLookupComponent = __decorate([
    Component({
        selector: 'add-to-wishlist-final',
        templateUrl: './add-to-wishlist-final.component.html'
    }),
    __metadata("design:paramtypes", [NavController, FormBuilder, WishlistService])
], AddToWishlisFinalLookupComponent);
export { AddToWishlisFinalLookupComponent };
//# sourceMappingURL=add-to-wishlist-final.component.js.map