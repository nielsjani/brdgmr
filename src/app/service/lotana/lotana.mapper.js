import { Boardgame } from "../../class/boardgame";
var LotanaMapper = (function () {
    function LotanaMapper() {
    }
    LotanaMapper.prototype.mapToBoardGame = function (toMap) {
        return new Boardgame()
            .withName(toMap.getElementsByClassName("product-name")[0].textContent)
            .withPrice(this.stripPrice(toMap.getElementsByClassName("price")[0].textContent))
            .withAvailable(toMap.getElementsByClassName("out-of-stock").length === 0)
            .withImage(toMap.getElementsByTagName("img")[0].src);
    };
    LotanaMapper.prototype.stripPrice = function (priceText) {
        return priceText.replace(",", "").trim();
    };
    return LotanaMapper;
}());
export { LotanaMapper };
//# sourceMappingURL=lotana.mapper.js.map