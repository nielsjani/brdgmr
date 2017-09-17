import {Pipe, PipeTransform} from '@angular/core';
import {Boardgame} from "../class/boardgame";

@Pipe({
  name: 'unavailable',
  pure: false
})
export class UnavailablePipe implements PipeTransform {
  transform(boardgames: Boardgame[], filter: boolean): any {
    if (!boardgames || filter === undefined || filter === true) {
      return boardgames;
    }
    return boardgames.filter(boardgame => boardgame.available === true);
  }
}
