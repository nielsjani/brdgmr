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
import { SpelonkMapper } from "./spelonk.mapper";
import { LookupService } from "../lookup.service";
var SpelonkLookupService = SpelonkLookupService_1 = (function (_super) {
    __extends(SpelonkLookupService, _super);
    function SpelonkLookupService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpelonkLookupService.prototype.getUrl = function () {
        return "http://www.spelonk.be/index.php?route=product/search&filter_name=";
    };
    SpelonkLookupService.prototype.map = function () {
        var mapped = [];
        var outOfStockItems = SpelonkLookupService_1.calculateOutOfStockItems();
        var nodes = document.getElementById("jquerydump").getElementsByClassName("product-list").item(0).getElementsByTagName("li");
        for (var i = 0; i < nodes.length; i++) {
            mapped.push(new SpelonkMapper().mapToBoardGame(nodes.item(i), outOfStockItems));
        }
        return mapped;
    };
    SpelonkLookupService.calculateOutOfStockItems = function () {
        var scripts = document.getElementsByTagName("script");
        var outOfStockArray;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts.item(i).outerHTML.indexOf("out_stock_list") !== -1) {
                var scriptText = scripts.item(i).outerHTML;
                outOfStockArray = scriptText.substring(scriptText.indexOf("out_stock_list:"), scriptText.indexOf("gray_style"))
                    .replace(" ", "")
                    .replace("out_stock_list:[", "")
                    .replace("]", "")
                    .split(",");
            }
        }
        return outOfStockArray;
    };
    SpelonkLookupService.prototype.mapForUrl = function (url) {
        return function () {
            var boardgameInfo = document.getElementById("jquerydump").getElementsByClassName("product-info")[0];
            return new SpelonkMapper().mapToBoardGameWithoutUrl(boardgameInfo, url);
        };
    };
    return SpelonkLookupService;
}(LookupService));
SpelonkLookupService = SpelonkLookupService_1 = __decorate([
    Injectable()
], SpelonkLookupService);
export { SpelonkLookupService };
var SpelonkLookupService_1;
//# sourceMappingURL=lookup.spelonk.service.js.map