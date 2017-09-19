import {Boardgame} from "../../../class/boardgame";
export class SpelshopMapper {

  mapToBoardGame(toMap: Element): Boardgame {
    return new Boardgame()
      .withName(toMap.getElementsByClassName("product-name")[0].textContent)
      .withPrice(this.stripPrice(this.getPrice(toMap)))
      .withAvailable(toMap.getElementsByClassName("out-of-stock").length === 0)
      .withImage(toMap.getElementsByTagName("img")[0].src)
      ;
  }

  private getPrice(toMap: Element) {
    //If theres a discount, two prices are shown. The second one is always the discount price
    let priceTags = toMap.getElementsByClassName("price");
    return priceTags[priceTags.length-1].textContent;
  }

  private stripPrice(priceText: string) {
    return priceText.replace("€", "").trim();
  }
}
