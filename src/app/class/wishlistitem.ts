import Selection from "../class/selection";

export default class WishlistItem {
  public selection: Selection[];
  public displayName: String;
  public order: number;
  public technicalId: string;


  public withSelection(value: Selection[]) {
    this.selection = value;
    return this;
  }

  public withDisplayName(value: String) {
    this.displayName = value;
    return this;
  }

  public withOrder(value: number) {
    this.order = value;
    return this;
  }

  public withId(value: string) {
    this.technicalId = value;
    return this;
  }
}
