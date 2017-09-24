import {Component, EventEmitter, Input, Output} from "@angular/core";
import {QueenOfGamesLookupService} from "../../service/lookup/queenofgames/lookup.queenofgames.service";
@Component({
  selector: 'queen-of-games-lookup',
  templateUrl: './queenofgames-lookup.component.html'
})
export class QueenOfGamesLookupComponent {
  @Input()
  // tslint:disable-next-line
  private initWithLookup: string;
  @Output()
  private gameSelected = new EventEmitter();

  constructor(private queenOfGamesLookupService: QueenOfGamesLookupService) {
    this.queenOfGamesLookupService = queenOfGamesLookupService;
  }

  handleSelection($event) {
    let event = $event;
    event.shop = "QUEEN_OF_GAMES";
    this.gameSelected.emit(event);  }
}
