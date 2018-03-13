import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component({
  selector: 'add-shop-to-wishlist',
  templateUrl: 'add-shop-to-wishlist.html'
})
export class AddShopToWishlistPage {
  private wishlistId: string;
  private shopName: string;

  constructor(private navParams: NavParams){
  }

  ionViewDidEnter(): void {
    this.wishlistId = this.navParams.data.wishlistId;
    this.shopName = this.navParams.data.shopName;
    console.log(this.wishlistId);
    console.log(this.shopName);
  }
}
