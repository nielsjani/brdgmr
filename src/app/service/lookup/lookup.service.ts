import $ from "jquery-ts";
import IPromise = jQuery.IPromise;
import {Boardgame} from "../../class/boardgame";

export abstract class LookupService {

  lookup(name: string): IPromise {
    return this.doLookup(`${this.getUrl()}${name.replace(" ", "+")}`, this.map);
  }

  lookupDetail(url: string): IPromise {
    return this.doLookup(url, this.mapForUrl(url));
  }

  private doLookup(url: string, fnToCall) {
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      }
    });

    let mapped = [];

    return $.get(url)
      .then(response => {
        const htmlDumpingGrounds = document.getElementById('jquerydump');
        htmlDumpingGrounds.insertAdjacentHTML('afterbegin', response);
        mapped = fnToCall();
        $("#jquerydump").empty();
        return mapped;
      });
  }

  abstract getUrl(): string;

  abstract map(): Boardgame[];

  abstract mapForUrl(url: string): () => Boardgame;
}
