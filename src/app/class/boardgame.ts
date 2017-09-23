export class Boardgame {
  public name:string;
  public available: boolean;
  public price:string;
  public image:string;
  //TODO: ook url naar detail pagina invullen!

  constructor() {
  }


  withName(value: string) {
    this.name = value;
    return this;
  }

  withAvailable(value: boolean) {
    this.available = value;
    return this;
  }

  withPrice(value: string) {
    this.price = value;
    return this;
  }

  withImage(value: string) {
    this.image = value;
    return this;
  }
}
