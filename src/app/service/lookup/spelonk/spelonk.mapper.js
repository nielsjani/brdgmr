import { Boardgame } from "../../../class/boardgame";
var SpelonkMapper = (function () {
    function SpelonkMapper() {
    }
    SpelonkMapper.prototype.mapToBoardGame = function (toMap) {
        return new Boardgame()
            .withName(toMap.getElementsByClassName("product-name")[0].textContent)
            .withPrice(this.stripPrice(this.getPrice(toMap)))
            .withAvailable(toMap.getElementsByClassName("out-of-stock").length === 0)
            .withImage(toMap.getElementsByTagName("img")[0].src);
    };
    SpelonkMapper.prototype.getPrice = function (toMap) {
        //If theres a discount, two prices are shown. The second one is always the discount price
        var priceTags = toMap.getElementsByClassName("price");
        return priceTags[priceTags.length - 1].textContent;
    };
    SpelonkMapper.prototype.stripPrice = function (priceText) {
        return priceText.replace("€", "").trim();
    };
    return SpelonkMapper;
}());
export { SpelonkMapper };
//# sourceMappingURL=spelonk.mapper.js.map