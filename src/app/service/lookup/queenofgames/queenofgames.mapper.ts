import {Boardgame} from "../../../class/boardgame";
export class QueenOfGamesMapper {

  mapToBoardGame(toMap: Element): Boardgame {
    return new Boardgame()
      .withName(toMap.getElementsByClassName("woocommerce-loop-product__title")[0].textContent)
      .withPrice(this.getPrice(toMap))
      //unavailable products are not returned
      .withAvailable(true)
      .withImage(toMap.getElementsByTagName("img")[0].src)
      .withUrl(toMap.getElementsByTagName("a")[0].href)
      ;
  }

  private getPrice(toMap: Element) {
    //If theres a discount, two prices are shown. The second one is always the discount price
    let priceTags = toMap.getElementsByClassName("woocommerce-Price-amount amount");
    return this.stripPrice(priceTags[priceTags.length-1].textContent);
  }

  private stripPrice(priceText: string) {
    return priceText.replace("€", "").trim();
  }

  mapToBoardGameWithoutUrl(boardgameInfo: Element, url: string) {
    return new Boardgame()
      .withName(boardgameInfo.getElementsByClassName("product_title")[0].textContent)
      .withPrice(this.getPrice(boardgameInfo.getElementsByClassName("price")[0]))
      .withAvailable(boardgameInfo.getElementsByClassName("single_add_to_cart_button button").length > 0)
      .withImage(boardgameInfo.getElementsByTagName("img")[0].src)
      .withUrl(url)
  }
}
