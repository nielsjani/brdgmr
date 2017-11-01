import {Component} from "@angular/core";
import {AlertController, NavController} from "ionic-angular";
import {AddToWishlistPage} from "../add-to-wishlist/add-to-wishlist";
import {WishlistService} from "../../app/service/wishlist.service";
import WishlistItem from "../../app/class/wishlistitem";
import {WishlistDetailPage} from "../wishlist-detail/wishlist-detail";
import Selection from "../../app/class/selection";
import PersonalWishlist from "../../app/class/personalWishlist";
import PersonalWishlistMapper from "../../app/class/PersonalWishlistMapper";

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {
  reorderModeEnabled = false;
  private personalWishlist: PersonalWishlist;

  constructor(public navCtrl: NavController, private wishlistService: WishlistService, private alertCtrl: AlertController) {
  }

  ionViewDidEnter(): void {
    this.wishlistService.getWishlist()
      .subscribe(response => {
        this.personalWishlist = new PersonalWishlistMapper(this.wishlistService).mapPersonalWishlist(response.json());
        if (this.hasWishlist()) {
          this.fixWishlistOrder();
        }
      });
  }

  hasWishlist() {
    return this.personalWishlist && this.personalWishlist.wishlistItems;
  }

  getFirstFilledInImageUrl(wishlistItem: WishlistItem) {
    return this.getFirstFilledInSelection(wishlistItem).boardgame.image;
  }

  private getFirstFilledInSelection(wishlistItem: WishlistItem): Selection {
    return wishlistItem.selection.filter(item => item.boardgame && item.boardgame.image)[0];
  }

  goToAddToWishListPage() {
    this.navCtrl.push(AddToWishlistPage);
  }

  goToDetail(id) {
    this.navCtrl.push(WishlistDetailPage, id);
  }

  showDeleteModal(wishlistItem: WishlistItem) {
    let alert = this.alertCtrl.create({
      title: "Delete item?",
      message: "Are you sure you want to delete " + this.getFirstFilledInSelection(wishlistItem).boardgame.name + " ?",
      buttons: [
        {
          text: "Oops, please don't"
        },
        {
          text: "Yes, delete it",
          handler: () => {
            let removedItemIndex = this.personalWishlist.wishlistItems.indexOf(wishlistItem);
            this.decrementOrderOfItemsAboveIndex(removedItemIndex);
            this.personalWishlist.wishlistItems.splice(removedItemIndex, 1);
            this.wishlistService.update(this.personalWishlist);
          }
        }
      ]
    });

    alert.present();
  }

  private fixWishlistOrder() {
    for (let key in this.personalWishlist.wishlistItems) {
      if (this.personalWishlist.wishlistItems.hasOwnProperty(key)) {
        this.personalWishlist.wishlistItems[key].technicalId = key;
      }
    }
    this.determineOrder();
  }

  private determineOrder() {
    let maxOrder = Math.max.apply(Math, this.personalWishlist.wishlistItems.map(item => item.order || 0)) || 0;
    let updateNeeded: boolean = false;
    this.personalWishlist.wishlistItems.forEach(item => {
      if (item.order === undefined) {
        item.order = maxOrder + 1;
        maxOrder++;
        updateNeeded = true;
      }
    });
    if (updateNeeded) {
      this.wishlistService.update(this.personalWishlist);
    }
    this.personalWishlist.wishlistItems.sort((w1, w2) => w1.order - w2.order);
  }

  reorderItems(indexes) {
    let element = this.personalWishlist.wishlistItems[indexes.from];
    this.personalWishlist.wishlistItems.splice(indexes.from, 1);
    this.personalWishlist.wishlistItems.splice(indexes.to, 0, element);

    for (let i = 0; i < this.personalWishlist.wishlistItems.length; i++) {
      this.personalWishlist.wishlistItems[i].order = i+1;
    }
    this.wishlistService.update(this.personalWishlist);
  }

  private decrementOrderOfItemsAboveIndex(removedItemIndex: number) {
    for (let i = removedItemIndex; i < this.personalWishlist.wishlistItems.length; i++) {
      this.personalWishlist.wishlistItems[i].order--;
    }
  }
}
