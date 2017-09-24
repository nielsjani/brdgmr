import {Component, EventEmitter, Output} from "@angular/core";
import {LotanaLookupService} from "../../service/lookup/lotana/lookup.lotana.service";
@Component({
  selector: 'lotana-lookup',
  templateUrl: './lotana-lookup.component.html'
})
export class LotanaLookupComponent {

  @Output()
  private gameSelected = new EventEmitter();

  constructor(private lotanaLookupService: LotanaLookupService) {
    this.lotanaLookupService = lotanaLookupService;
  }

  handleSelection($event) {
    let event = $event;
    event.shop = "LOTANA";
    this.gameSelected.emit(event);
  }

}
