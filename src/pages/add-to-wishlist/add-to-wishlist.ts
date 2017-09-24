import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import Selection from "../../app/class/selection";

@Component({
  selector: 'page-add-to-wishlist',
  templateUrl: 'add-to-wishlist.html'
})
export class AddToWishlistPage {

  private stage = 0;
  private selection: Selection[] = [];
  private gameNameInput: string;

  constructor(public navCtrl: NavController) {
  }

  handleSelection($event) {
    this.gameNameInput = $event.gameNameInput;
    this.selection.push(new Selection($event.selectedGame, $event.shop));
    this.stage++;
  }
}
