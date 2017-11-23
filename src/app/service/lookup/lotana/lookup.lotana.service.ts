import {Injectable} from "@angular/core";
import {LookupService} from "../lookup.service";
import {LotanaMapper} from "./lotana.mapper";
import {Boardgame} from "../../../class/boardgame";


@Injectable()
export class LotanaLookupService extends LookupService {

  getUrl(): string {
    return "https://www.lotana.be/catalogsearch/result/?q=";
  }

  map() {
    let mapped = [];
    let nodes = document.getElementById("jquerydump").getElementsByClassName("item");
    for (let i = 0; i < nodes.length; i++) {
      if (nodes.item(i).id.indexOf("narrow-by-list") === -1) {
        mapped.push(new LotanaMapper().mapToBoardGame(nodes.item(i)));
      }
    }
    return mapped;
  }

  mapForUrl(url): () => Boardgame {
    return () => {
      let boardgameInfo = document.getElementById("jquerydump").getElementsByClassName("product-essential")[0];
      return new LotanaMapper().mapToBoardGameWithoutUrl(boardgameInfo, url);
    }
  }

}
