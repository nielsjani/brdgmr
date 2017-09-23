import {Boardgame} from "../../../class/boardgame";
export class LotanaMapper {

  mapToBoardGame(toMap: Element): Boardgame {
    return new Boardgame()
      .withName(toMap.getElementsByClassName("product-name")[0].textContent)
      .withPrice(this.stripPrice(toMap.getElementsByClassName("price")[0].textContent))
      .withAvailable(toMap.getElementsByClassName("out-of-stock").length === 0)
      .withImage(toMap.getElementsByTagName("img")[0].src)
      .withUrl(toMap.getElementsByTagName("a")[0].href)
      ;
  }

  private stripPrice(priceText: string) {
    return priceText.replace("€", "").trim();
  }
}
