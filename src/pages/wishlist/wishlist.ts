import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AddToWishlistPage} from "../add-to-wishlist/add-to-wishlist";

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController) {
  }

  goToAddToWishListPage() {
    this.navCtrl.push(AddToWishlistPage);
  }
}
