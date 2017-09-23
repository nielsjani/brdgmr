import {Boardgame} from "../../../class/boardgame";
export class SpelonkMapper {

  mapToBoardGame(toMap: Element, outOfStockIds: string[]): Boardgame {
    return new Boardgame()
      .withName(toMap.getElementsByClassName("name")[0].textContent)
      .withPrice(this.stripPrice(this.getPrice(toMap)))
      .withAvailable(this.mapAvailable(toMap, outOfStockIds))
      .withImage(toMap.getElementsByTagName("img")[0].src)
      ;
  }

  private mapAvailable(toMap: Element, outOfStockIds: string[]) {
    //'out of stock' is rendered after the html is fetched. The page has a script with an array of ids of out-of-stock items. If the id of the toMap is in that list, it is out of stock
    let itemId = toMap.getElementsByTagName("img")[0].id.split("_")[1];
    return outOfStockIds.indexOf(itemId) === -1;
  }

  private getPrice(toMap: Element) {
    //If theres a discount, an HTML element with class price-new is shown
    let possibleDiscountedPrice = toMap.getElementsByClassName("price-new");
    if (possibleDiscountedPrice.length > 0) {
      return possibleDiscountedPrice.item(0).textContent;
    } else {
      let priceTags = toMap.getElementsByClassName("price");
      return priceTags[priceTags.length - 1].textContent;
    }
  }

  private stripPrice(priceText: string) {
    return priceText.replace("€", "").trim();
  }
}
