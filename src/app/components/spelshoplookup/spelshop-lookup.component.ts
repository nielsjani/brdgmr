import {Component} from "@angular/core";
import {SpelshopLookupService} from "../../service/lookup/spelshop/lookup.spelshop.service";
@Component({
  selector: 'spelshop-lookup',
  templateUrl: './spelshop-lookup.component.html'
})
export class SpelshopLookupComponent {

  constructor(private spelshopLookupService: SpelshopLookupService) {
    this.spelshopLookupService = spelshopLookupService;
  }
}
