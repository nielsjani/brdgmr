import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {WishlistService} from "../../app/service/wishlist.service";
import WishlistItem from "../../app/class/wishlistitem";
import Selection from "../../app/class/selection";
@Component({
  selector: 'page-wishlist-detail',
  templateUrl: 'wishlist-detail.html',
})
export class WishlistDetailPage {
  private wishlistItem: WishlistItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private wishlistService: WishlistService) {

  }

  ionViewDidEnter(): void {
    this.wishlistService.getWishlistItem(this.navParams.data)
      .subscribe(item => this.wishlistItem = item.json());
  }

  getFirstNonEmptyDetail(item: WishlistItem) {
    return item.selection.filter(selected => selected.boardgame && selected.boardgame.name)[0];
  }

  getPrice(selected: Selection) {
    return this.isShopInfoPresent(selected) ? selected.boardgame.price : "No information present";
  }

  isShopInfoPresent(selected: Selection) {
    return selected.boardgame !== undefined;
  }

  goToStore(url) {
    window.open(url);
  }

  isCheapest(selected) {
    return !this.wishlistItem.selection.some(item => item.boardgame && parseInt(item.boardgame.price) < parseInt(selected.boardgame.price));
  }

}
