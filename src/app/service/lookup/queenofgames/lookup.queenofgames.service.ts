import {Injectable} from "@angular/core";
import {LookupService} from "../lookup.service";
import {QueenOfGamesMapper} from "./queenofgames.mapper";
import {Boardgame} from "../../../class/boardgame";


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

  mapForUrl(url): () => Boardgame {
    return () => {
      let boardgameInfo = document.getElementById("jquerydump").getElementsByClassName("product")[0];
      return new QueenOfGamesMapper().mapToBoardGameWithoutUrl(boardgameInfo, url);
    }
  }

}
