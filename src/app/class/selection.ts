import {Boardgame} from "./boardgame";
export default class Selection {
  public boardgame: Boardgame;
  public shop: string;


  constructor(boardgame: Boardgame, shop: string) {
    this.boardgame = boardgame;
    this.shop = shop;
  }
}
