import {Component} from "@angular/core";
import {LotanaLookupService} from "../../service/lookup/lotana/lookup.lotana.service";
@Component({
  selector: 'lotana-lookup',
  templateUrl: './lotana-lookup.component.html'
})
export class LotanaLookupComponent {

  constructor(private lotanaLookupService: LotanaLookupService) {
    this.lotanaLookupService = lotanaLookupService;
  }

}
