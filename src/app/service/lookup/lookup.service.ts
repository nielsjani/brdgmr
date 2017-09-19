import $ from "jquery-ts";
import IPromise = jQuery.IPromise;
import {Boardgame} from "../../class/boardgame";

export abstract class LookupService {

  lookup(name: string): IPromise {
    $.ajaxPrefilter(function (options) {
      if (options.crossDomain && $.support.cors) {
        let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      }
    });

    let mapped = [];

    return $.get(`${this.getUrl()}${name.replace(" ", "+")}`)
      .then(response => {
        const htmlDumpingGrounds = document.getElementById('jquerydump');
        htmlDumpingGrounds.insertAdjacentHTML('afterbegin', response);
        mapped = this.map();
        $("#jquerydump").empty();
        return mapped;
      });
  }

  abstract getUrl(): string;

  abstract map(): Boardgame[];
}
