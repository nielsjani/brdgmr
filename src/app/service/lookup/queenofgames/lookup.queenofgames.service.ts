import {Injectable} from "@angular/core";
import {LookupService} from "../lookup.service";
import {QueenOfGamesMapper} from "./queenofgames.mapper";


@Injectable()
export class QueenOfGamesLookupService extends LookupService {

  getUrl(): string {
    return "http://www.queenofgames.be/?post_type=product&s=";
  }

  map() {
    let mapped = [];
    let nodes = document.getElementById("jquerydump").getElementsByClassName("products").item(0).getElementsByTagName("li");
    for (let i = 0; i < nodes.length; i++) {
      if (nodes.item(i).id.indexOf("narrow-by-list") === -1) {
        mapped.push(new QueenOfGamesMapper().mapToBoardGame(nodes.item(i)));
      }
    }
    return mapped;
  }
}
