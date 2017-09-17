import {Component, Input} from "@angular/core";
import {Boardgame} from "../../class/boardgame";
@Component({
  selector: 'lookup-results',
  templateUrl: './lookup-results.component.html'
})
export class LookupResultsComponent {
  @Input()
  private retrievedBoardgames: Boardgame[];
  private showUnavailableResults = true;

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
