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
var SpelonkLookupService = (function (_super) {
    __extends(SpelonkLookupService, _super);
    function SpelonkLookupService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpelonkLookupService.prototype.getUrl = function () {
        return "http://www.spelonk.be/index.php?route=product/search&filter_name=";
    };
    SpelonkLookupService.prototype.map = function () {
        var mapped = [];
        var nodes = document.getElementById("jquerydump").getElementsByClassName("item");
        for (var i = 0; i < nodes.length; i++) {
            mapped.push(new SpelonkMapper().mapToBoardGame(nodes.item(i)));
        }
        return mapped;
    };
    return SpelonkLookupService;
}(LookupService));
SpelonkLookupService = __decorate([
    Injectable()
], SpelonkLookupService);
export { SpelonkLookupService };
//# sourceMappingURL=lookup.spelonk.service.js.map