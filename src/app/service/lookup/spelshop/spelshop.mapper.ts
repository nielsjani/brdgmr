import {Boardgame} from "../../../class/boardgame";
export class SpelshopMapper {

  mapToBoardGame(toMap: Element): Boardgame {
    return new Boardgame()
      .withName(toMap.getElementsByClassName("product-title")[0].getElementsByTagName("a")[0].textContent)
      .withPrice(this.addTax(this.stripPrice(this.getPrice(toMap))))
      //Currently no unavailable products
      .withAvailable(true)
      .withImage(toMap.getElementsByClassName("thumbnail-container")[0].getElementsByTagName("img")[0].src)
      .withUrl(toMap.getElementsByClassName("product-title")[0].getElementsByTagName("a")[0].href)
      ;
  }

  private getPrice(toMap: Element) {
    //Discounted price will also be under the classname 'price', if there is a discount
    let priceTags = toMap.getElementsByClassName("product-price-and-shipping")[0];
    return priceTags.getElementsByClassName("price")[0].textContent;
  }

  private stripPrice(priceText: string) {
    return priceText.replace("€", "").trim();
  }

  mapToBoardGameWithoutUrl(boardgameInfo: Element, url: string): Boardgame {
    return new Boardgame()
      .withName(boardgameInfo.getElementsByClassName("h1")[0].textContent)
      .withPrice(this.addTax(this.stripPrice(boardgameInfo.getElementsByClassName("current-price")[0].textContent)))
      .withAvailable(true)
      .withImage(boardgameInfo.getElementsByClassName("product-cover")[0].getElementsByTagName("img")[0].src)
      .withUrl(url)
  }

  private addTax(priceWithoutTax: string) {
    return (parseFloat(priceWithoutTax) * 1.21).toFixed(2)+"";
  }
}
