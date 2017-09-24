import {Component, Input, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import Selection from "../../class/selection"
@Component({
  selector: 'add-to-wishlist-final',
  templateUrl: './add-to-wishlist-final.component.html'
})
export class AddToWishlisFinalLookupComponent implements OnInit{
  @Input()
  // tslint:disable-next-line
  private selection: Selection[];

  private addToWishlistForm: FormGroup;

  constructor(private navController: NavController, private formBuilder: FormBuilder) {
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

  }
}
