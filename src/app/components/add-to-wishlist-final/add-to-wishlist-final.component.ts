import {Component, Input, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import Selection from "../../class/selection"
import {WishlistService} from "../../service/wishlist.service";
import WishlistItem from "../../class/wishlistitem";
@Component({
  selector: 'add-to-wishlist-final',
  templateUrl: './add-to-wishlist-final.component.html'
})
export class AddToWishlisFinalLookupComponent implements OnInit{
  @Input()
  private selection: Selection[];

  private addToWishlistForm: FormGroup;

  constructor(private navController: NavController, private formBuilder: FormBuilder, private wishlistService: WishlistService) {
    this.addToWishlistForm = this.formBuilder.group({
      gamename: new FormControl("")
    });
  }

  ngOnInit(): void {
    this.addToWishlistForm.setValue({gamename: this.getFirstGameName()});
  }

  private getFirstGameName() {
    return this.selection.filter(selected => selected.boardgame)[0].boardgame.name;
  }

  saveSelection() {
    this.wishlistService.addWishlistItem(new WishlistItem()
      .withDisplayName(this.addToWishlistForm.value.gamename)
      .withSelection(this.selection))
      .subscribe(response => this.navController.popToRoot())
    ;
  }

  getTitle(selection: Selection){
    if(selection.boardgame){
      return selection.boardgame.name;
    } else {
      return "No game selected";
    }
  }

  getPrice(selected: Selection) {
    if(selected.boardgame){
      return `(${selected.boardgame.price} euro)`;
    } else {
      return "";
    }
  }
}
