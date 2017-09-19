import {Component} from "@angular/core";
import {QueenOfGamesLookupService} from "../../service/lookup/queenofgames/lookup.queenofgames.service";
@Component({
  selector: 'queen-of-games-lookup',
  templateUrl: './queenofgames-lookup.component.html'
})
export class QueenOfGamesLookupComponent {

  constructor(private queenOfGamesLookupService: QueenOfGamesLookupService) {
    this.queenOfGamesLookupService = queenOfGamesLookupService;
  }
}
