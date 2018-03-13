import {Pipe, PipeTransform} from '@angular/core';
import Selection from "../class/selection";
@Pipe({
  name: 'shopinfoNotPresent',
  pure: false
})
export class ShopinfoNotPresentPipe implements PipeTransform {
  transform(selection: Selection[]): any {
    if (!selection) {
      return selection;
    }
    return selection.filter(selected => selected.boardgame === undefined);
  }
}
