var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import { LookupService } from "../lookup.service";
import { QueenOfGamesMapper } from "./queenofgames.mapper";
var QueenOfGamesLookupService = (function (_super) {
    __extends(QueenOfGamesLookupService, _super);
    function QueenOfGamesLookupService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueenOfGamesLookupService.prototype.getUrl = function () {
        return "http://www.queenofgames.be/?post_type=product&s=";
    };
    QueenOfGamesLookupService.prototype.map = function () {
        var mapped = [];
        var nodes = document.getElementById("jquerydump").getElementsByClassName("products").item(0).getElementsByTagName("li");
        for (var i = 0; i < nodes.length; i++) {
            if (nodes.item(i).id.indexOf("narrow-by-list") === -1) {
                mapped.push(new QueenOfGamesMapper().mapToBoardGame(nodes.item(i)));
            }
        }
        return mapped;
    };
    QueenOfGamesLookupService.prototype.mapForUrl = function (url) {
        return function () {
            var boardgameInfo = document.getElementById("jquerydump").getElementsByClassName("product")[0];
            return new QueenOfGamesMapper().mapToBoardGameWithoutUrl(boardgameInfo, url);
        };
    };
    return QueenOfGamesLookupService;
}(LookupService));
QueenOfGamesLookupService = __decorate([
    Injectable()
], QueenOfGamesLookupService);
export { QueenOfGamesLookupService };
//# sourceMappingURL=lookup.queenofgames.service.js.map