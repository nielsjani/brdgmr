import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {WishlistService} from "../../app/service/wishlist.service";
import WishlistItem from "../../app/class/wishlistitem";
import Selection from "../../app/class/selection";
import LookupServiceFinder from "../../app/service/lookup/lookup.service.finder";
import {Boardgame} from "../../app/class/boardgame";
@Component({
  selector: 'page-wishlist-detail',
  templateUrl: 'wishlist-detail.html',
})
export class WishlistDetailPage {
  private wishlistItem: WishlistItem;
  private wishlistId: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private wishlistService: WishlistService,
              private lookupServiceFinder: LookupServiceFinder) {

  }

  ionViewDidEnter(): void {
    this.wishlistId = this.navParams.data.wishlistId;
    this.wishlistService.getWishlistItem(this.wishlistId, this.navParams.data.itemId)
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

  isCheapest(selected: Selection) {
    return !this.wishlistItem.selection.some(item => item.boardgame && parseInt(item.boardgame.price) < parseInt(selected.boardgame.price));
  }

  refresh(selected: Selection) {
    let lookupService = this.lookupServiceFinder.getLookupService(selected.shop);
    lookupService.lookupDetail(selected.boardgame.url)
      .then(bg => {
        this.replaceBoardgameForShop(selected.shop, bg);
        this.wishlistService.removeWishlistItem(this.wishlistId, this.wishlistItem.technicalId)
          .subscribe(()=> this.wishlistService.addWishlistItemToWishlist(this.wishlistId, this.wishlistItem)
            .subscribe(response => response));
      });
  }

  private replaceBoardgameForShop(shop: string, bg: Boardgame) {
    this.wishlistItem.selection.filter(selectionItem => selectionItem.shop === shop)[0].boardgame = bg;
  }
}
