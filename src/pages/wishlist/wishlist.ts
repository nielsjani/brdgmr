import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {AddToWishlistPage} from "../add-to-wishlist/add-to-wishlist";
import {WishlistService} from "../../app/service/wishlist.service";
import WishlistItem from "../../app/class/wishlistitem";
import {WishlistDetailPage} from "../wishlist-detail/wishlist-detail";

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  wishlist: WishlistItem[] = [];
  reorderModeEnabled = false;

  constructor(public navCtrl: NavController, private wishlistService: WishlistService) {
  }

  ionViewDidEnter(): void {
    this.wishlist = [];
    this.wishlistService.getWishlist()
      .subscribe(response => {
        let result = response.json();
        for (let key in result) {
          if (result.hasOwnProperty(key)) {
            result[key].technicalId = key;
            this.wishlist.push(result[key]);
          }
        }
        this.determineOrder();
      });
  }

  private determineOrder() {
    let maxOrder = Math.max.apply(Math, this.wishlist.map(item => item.order || 0)) || 0;
    let updateNeeded: WishlistItem[] = [];
    this.wishlist.forEach(item => {
      if (item.order === undefined) {
        item.order = maxOrder + 1;
        maxOrder++;
        updateNeeded.push(item);
      }
    });
    if (updateNeeded.length > 0) {
      this.wishlistService.update(updateNeeded);
    }
    this.wishlist.sort((w1, w2) => w1.order - w2.order);
  }

  reorderItems(indexes) {
    let element = this.wishlist[indexes.from];
    this.wishlist.splice(indexes.from, 1);
    this.wishlist.splice(indexes.to, 0, element);

    for(let i = 0; i < this.wishlist.length; i++){
      this.wishlist[i].order = i;
    }
    this.wishlistService.update(this.wishlist);
  }

  getFirstFilledInImageUrl(wishlistItem: WishlistItem) {
    return wishlistItem.selection.filter(item => item.boardgame && item.boardgame.image)[0].boardgame.image;
  }

  goToAddToWishListPage() {
    this.navCtrl.push(AddToWishlistPage);
  }

  goToDetail(id) {
    this.navCtrl.push(WishlistDetailPage, id);
  }
}
