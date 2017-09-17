import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Boardgame} from "../../class/boardgame";
import {NavController} from "ionic-angular";
import {LotanaLookupService} from "../../service/lotana/lookup.lotana.service";
@Component({
  selector: 'lotana-lookup',
  templateUrl: './lotana-lookup.component.html'
})
export class LotanaLookupComponent {
  private gameLookupForm: FormGroup;
  private retrievedBoardgames: Boardgame[];
  private showUnavailableResults = true;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private lotanaLookupService: LotanaLookupService) {
    this.gameLookupForm = this.formBuilder.group({
      gamename: new FormControl("")
    });
    this.lotanaLookupService = lotanaLookupService;
  }

  lookupGame() {
    this.lotanaLookupService.lookup(this.gameLookupForm.value.gamename)
      .then(boardgames => this.retrievedBoardgames = boardgames);
  }

  getGameName(){
    return this.gameLookupForm.value.gamename ? this.gameLookupForm.value.gamename : "game";
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
}
