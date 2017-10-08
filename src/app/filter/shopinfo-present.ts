import {Pipe, PipeTransform} from '@angular/core';
import Selection from "../class/selection";
@Pipe({
  name: 'shopinfoPresent',
  pure: false
})
export class ShopinfoPresentPipe implements PipeTransform {
  transform(selection: Selection[]): any {
    if (!selection) {
      return selection;
    }
    return selection.filter(selected => selected.boardgame !== undefined);
  }
}
