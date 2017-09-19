import {Injectable} from "@angular/core";
import {SpelshopMapper} from "./spelshop.mapper";
import {LookupService} from "../lookup.service";

@Injectable()
export class SpelshopLookupService extends LookupService {

  getUrl(): string {
    return "http://www.spelshop.be/nl/catalogsearch/result/?q=";
  }

  map() {
    let mapped = [];

    let nodes = document.getElementById("jquerydump").getElementsByClassName("item");
    for (let i = 0; i < nodes.length; i++) {
      mapped.push(new SpelshopMapper().mapToBoardGame(nodes.item(i)));
    }
    return mapped
  }
}
