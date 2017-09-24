import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SpelonkLookupService} from "../../service/lookup/spelonk/lookup.spelonk.service";
@Component({
  selector: 'spelonk-lookup',
  templateUrl: './spelonk-lookup.component.html'
})
export class SpelonkLookupComponent {
  @Input()
  // tslint:disable-next-line
  private initWithLookup: string;
  @Output()
  private gameSelected = new EventEmitter();

  constructor(private spelonkLookupService: SpelonkLookupService) {
    this.spelonkLookupService = spelonkLookupService;
  }

  handleSelection($event) {
    let event = $event;
    event.shop = "SPELONK";
    this.gameSelected.emit(event);
  }
}
