import {Injectable} from "@angular/core";
import $ from "jquery-ts";
import {LotanaMapper} from "./lotana.mapper";
import IPromise = jQuery.IPromise;

@Injectable()
export class LotanaLookupService {

  lookup(name: string): IPromise {
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
        //options.url = "http://cors.corsproxy.io/url=" + options.url;
      }
    });

    let mapped = [];

    return $.get(`https://www.lotana.be/catalogsearch/result/?q=${name.replace(" ", "+")}`)
      .then(response => {
        const htmlDumpingGrounds = document.getElementById('jquerydump');
        htmlDumpingGrounds.insertAdjacentHTML('afterbegin', response);
        let nodes = document.getElementById("jquerydump").getElementsByClassName("item");
        for (let i = 0; i < nodes.length; i++) {
          if (nodes.item(i).id.indexOf("narrow-by-list") === -1) {
            mapped.push(new LotanaMapper().mapToBoardGame(nodes.item(i)));
          }
        }
        $("#jquerydump").empty();
        return mapped;
      });
  }
}
