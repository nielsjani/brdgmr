import { Boardgame } from "../../../class/boardgame";
var QueenOfGamesMapper = (function () {
    function QueenOfGamesMapper() {
    }
    QueenOfGamesMapper.prototype.mapToBoardGame = function (toMap) {
        return new Boardgame()
            .withName(toMap.getElementsByClassName("woocommerce-loop-product__title")[0].textContent)
            .withPrice(this.getPrice(toMap))
            .withAvailable(true)
            .withImage(toMap.getElementsByTagName("img")[0].src)
            .withUrl(toMap.getElementsByTagName("a")[0].href);
    };
    QueenOfGamesMapper.prototype.getPrice = function (toMap) {
        //If theres a discount, two prices are shown. The second one is always the discount price
        var priceTags = toMap.getElementsByClassName("woocommerce-Price-amount amount");
        return this.stripPrice(priceTags[priceTags.length - 1].textContent);
    };
    QueenOfGamesMapper.prototype.stripPrice = function (priceText) {
        return priceText.replace("€", "").trim();
    };
    QueenOfGamesMapper.prototype.mapToBoardGameWithoutUrl = function (boardgameInfo, url) {
        return new Boardgame()
            .withName(boardgameInfo.getElementsByClassName("product_title")[0].textContent)
            .withPrice(this.getPrice(boardgameInfo.getElementsByClassName("price")[0]))
            .withAvailable(boardgameInfo.getElementsByClassName("single_add_to_cart_button button").length > 0)
            .withImage(boardgameInfo.getElementsByTagName("img")[0].src)
            .withUrl(url);
    };
    return QueenOfGamesMapper;
}());
export { QueenOfGamesMapper };
//# sourceMappingURL=queenofgames.mapper.js.map