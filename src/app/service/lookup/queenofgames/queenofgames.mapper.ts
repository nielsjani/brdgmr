import {Boardgame} from "../../../class/boardgame";
export class QueenOfGamesMapper {

  mapToBoardGame(toMap: Element): Boardgame {
    return new Boardgame()
      .withName(toMap.getElementsByClassName("woocommerce-loop-product__title")[0].textContent)
      .withPrice(this.stripPrice(this.getPrice(toMap)))
      //unavailable products are not returned
      .withAvailable(true)
      .withImage(toMap.getElementsByTagName("img")[0].src)
      ;
  }

  private getPrice(toMap: Element) {
    //If theres a discount, two prices are shown. The second one is always the discount price
    let priceTags = toMap.getElementsByClassName("woocommerce-Price-amount amount");
    return priceTags[priceTags.length-1].textContent;
  }

  private stripPrice(priceText: string) {
    return priceText.replace("€", "").trim();
  }
}
