import {Component, Input} from "@angular/core";
import {Boardgame} from "../../class/boardgame";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NavController} from "ionic-angular";
@Component({
  selector: 'lookup-results',
  templateUrl: './lookup-results.component.html'
})
export class LookupResultsComponent {
  @Input()
  private lookupService: any;
  private showUnavailableResults = true;
  private gameLookupForm: FormGroup;
  private retrievedBoardgames: Boardgame[];

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.gameLookupForm = this.formBuilder.group({
      gamename: new FormControl("")
    });
  }

  getIconName(foundGame) {
    return foundGame.available ? "checkmark" : "close";
  }

  getButtonColor(foundGame) {
    return foundGame.available ? "secondary" : "danger";
  }

  getAvailableText(foundGame) {
    return foundGame.available ? "Available" : "Unavailable";
  }

  getGameName(){
    return this.gameLookupForm.value.gamename ? this.gameLookupForm.value.gamename : "game";
  }

  lookupGame() {
    return this.lookupService.lookup(this.gameLookupForm.value.gamename)
      .then(boardgames => this.retrievedBoardgames = boardgames);
  }

}
