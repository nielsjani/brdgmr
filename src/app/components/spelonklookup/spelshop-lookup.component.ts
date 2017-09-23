import {Component} from "@angular/core";
import {SpelonkLookupService} from "../../service/lookup/spelonk/lookup.spelonk.service";
@Component({
  selector: 'spelonk-lookup',
  templateUrl: './spelonk-lookup.component.html'
})
export class SpelonkLookupComponent {

  constructor(private spelonkLookupService: SpelonkLookupService) {
    this.spelonkLookupService = spelonkLookupService;
  }
}
