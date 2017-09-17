var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
import $ from "jquery-ts";
import { LotanaMapper } from "./lotana.mapper";
var LotanaLookupService = (function () {
    function LotanaLookupService() {
    }
    LotanaLookupService.prototype.lookup = function (name) {
        $.ajaxPrefilter(function (options) {
            if (options.crossDomain && $.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
                //options.url = "http://cors.corsproxy.io/url=" + options.url;
            }
        });
        $.get('https://www.lotana.be/catalogsearch/result/?q=boss+monster&SID=742de0ad52708117617d423e1f327999', function (response) {
            console.log(response);
            var htmlDumpingGrounds = document.getElementById('jquerydump');
            htmlDumpingGrounds.insertAdjacentHTML('afterbegin', response);
            //TODO: map to actual objects with name/price/isAvailable/img href/etc
            var nodes = document.getElementById("jquerydump").getElementsByClassName("item");
            console.log(nodes);
            var mapped = [];
            for (var i = 0; i < nodes.length; i++) {
                if (nodes.item(i).id.indexOf("narrow-by-list") === -1) {
                    mapped.push(new LotanaMapper().mapToBoardGame(nodes.item(i)));
                }
            }
            // $("#jquerydump").empty();
            console.log(mapped);
        });
    };
    return LotanaLookupService;
}());
LotanaLookupService = __decorate([
    Injectable()
], LotanaLookupService);
export { LotanaLookupService };
//# sourceMappingURL=lookup.lotana.service.js.map