import {Injectable} from "@angular/core";
import {SpelshopMapper} from "./spelshop.mapper";
import {LookupService} from "../lookup.service";

@Injectable()
export class SpelshopLookupService extends LookupService {

  getUrl(): string {
    return "http://www.spelshop.be/en/search?controller=search&order=product.position.desc&s=";
  }

  map() {
    let mapped = [];

    let nodes = document.getElementById("jquerydump").getElementsByTagName("article");
    for (let i = 0; i < nodes.length; i++) {
      mapped.push(new SpelshopMapper().mapToBoardGame(nodes.item(i)));
    }
    console.log(mapped);
    return mapped;
  }
}
