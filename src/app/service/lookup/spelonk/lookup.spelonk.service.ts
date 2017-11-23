import {Injectable} from "@angular/core";
import {SpelonkMapper} from "./spelonk.mapper";
import {LookupService} from "../lookup.service";
import {Boardgame} from "../../../class/boardgame";

@Injectable()
export class SpelonkLookupService extends LookupService {

  getUrl(): string {
    return "http://www.spelonk.be/index.php?route=product/search&filter_name=";
  }

  map() {
    let mapped = [];
    let outOfStockItems = SpelonkLookupService.calculateOutOfStockItems();
    let nodes = document.getElementById("jquerydump").getElementsByClassName("product-list").item(0).getElementsByTagName("li");
    for (let i = 0; i < nodes.length; i++) {
      mapped.push(new SpelonkMapper().mapToBoardGame(nodes.item(i), outOfStockItems));
    }
    return mapped
  }

  private static calculateOutOfStockItems(): string[] {
    let scripts = document.getElementsByTagName("script");
    let outOfStockArray;
    for (let i = 0; i < scripts.length; i++) {
      if (scripts.item(i).outerHTML.indexOf("out_stock_list") !== -1) {
        let scriptText = scripts.item(i).outerHTML;
        outOfStockArray = scriptText.substring(scriptText.indexOf("out_stock_list:"), scriptText.indexOf("gray_style"))
          .replace(" ", "")
          .replace("out_stock_list:[", "")
          .replace("]", "")
          .split(",");
      }
    }
    return outOfStockArray;
  }

  mapForUrl(url): () => Boardgame {
    return () => {
      let boardgameInfo = document.getElementById("jquerydump").getElementsByClassName("product-info")[0];
      return new SpelonkMapper().mapToBoardGameWithoutUrl(boardgameInfo, url);
    }
  }

}
