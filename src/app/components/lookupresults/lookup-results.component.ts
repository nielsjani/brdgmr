import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Boardgame} from "../../class/boardgame";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {NavController} from "ionic-angular";
@Component({
  selector: 'lookup-results',
  templateUrl: './lookup-results.component.html'
})
export class LookupResultsComponent implements OnInit{

  @Input()
  private lookupService: any;
  @Input()
  private initWithLookup: any;
  @Output()
  private gameSelected = new EventEmitter();

  // tslint:disable-next-line
  private showUnavailableResults = true;
  private gameLookupForm: FormGroup;
  private retrievedBoardgames: Boardgame[];
  private selectedGame: Boardgame;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.gameLookupForm = this.formBuilder.group({
      gamename: new FormControl("")
    });
  }

  ngOnInit(): void {
    if(this.initWithLookup){
      this.gameLookupForm.setValue({gamename: this.initWithLookup});
      this.lookupGame();
    }
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

  selectGame(game: Boardgame){
    this.selectedGame = game;
  }

  getSelectedColor(foundGame) {
    if(this.selectedGame === foundGame) {
      return "primary";
    }
    return "";
  }

  confirmSelection() {
    this.gameSelected.emit({selectedGame: this.selectedGame, gameNameInput: this.gameLookupForm.value.gamename});
  }

}
