import {Component, EventEmitter, Input, Output} from "@angular/core";
import {SpelshopLookupService} from "../../service/lookup/spelshop/lookup.spelshop.service";
@Component({
  selector: 'spelshop-lookup',
  templateUrl: './spelshop-lookup.component.html'
})
export class SpelshopLookupComponent {

  @Input()
  // tslint:disable-next-line
  private initWithLookup: string;
  @Output()
  private gameSelected = new EventEmitter();

  constructor(private spelshopLookupService: SpelshopLookupService) {
    this.spelshopLookupService = spelshopLookupService;
  }

  handleSelection($event) {
    let event = $event;
    event.shop = "SPELSHOP";
    this.gameSelected.emit(event);
  }
}
