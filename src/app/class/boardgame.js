var Boardgame = (function () {
    function Boardgame() {
    }
    Boardgame.prototype.withName = function (value) {
        this.name = value;
        return this;
    };
    Boardgame.prototype.withAvailable = function (value) {
        this.available = value;
        return this;
    };
    Boardgame.prototype.withPrice = function (value) {
        this.price = value;
        return this;
    };
    Boardgame.prototype.withImage = function (value) {
        this.image = value;
        return this;
    };
    return Boardgame;
}());
export { Boardgame };
//# sourceMappingURL=boardgame.js.map