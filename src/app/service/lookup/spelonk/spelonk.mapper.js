import { Boardgame } from "../../../class/boardgame";
var SpelonkMapper = (function () {
    function SpelonkMapper() {
    }
    SpelonkMapper.prototype.mapToBoardGame = function (toMap, outOfStockIds) {
        return new Boardgame()
            .withName(toMap.getElementsByClassName("name")[0].textContent)
            .withPrice(this.stripPrice(this.getPrice(toMap)))
            .withAvailable(this.mapAvailable(toMap, outOfStockIds))
            .withImage(toMap.getElementsByTagName("img")[0].src)
            .withUrl(toMap.getElementsByClassName("image")[0].getElementsByTagName("a")[0].href);
    };
    SpelonkMapper.prototype.mapAvailable = function (toMap, outOfStockIds) {
        //'out of stock' is rendered after the html is fetched. The page has a script with an array of ids of out-of-stock items. If the id of the toMap is in that list, it is out of stock
        var itemId = toMap.getElementsByTagName("img")[0].id.split("_")[1];
        return outOfStockIds.indexOf(itemId) === -1;
    };
    SpelonkMapper.prototype.getPrice = function (toMap) {
        //If theres a discount, an HTML element with class price-new is shown
        var possibleDiscountedPrice = toMap.getElementsByClassName("price-new");
        if (possibleDiscountedPrice.length > 0) {
            return possibleDiscountedPrice.item(0).textContent;
        }
        else {
            var priceTags = toMap.getElementsByClassName("price");
            return priceTags[priceTags.length - 1].textContent;
        }
    };
    SpelonkMapper.prototype.stripPrice = function (priceText) {
        return priceText.replace("€", "").trim();
    };
    return SpelonkMapper;
}());
export { SpelonkMapper };
//# sourceMappingURL=spelonk.mapper.js.map
