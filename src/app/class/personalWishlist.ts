import WishlistItem from "./wishlistitem";
export default class PersonalWishlist {
  public wishlistItems: WishlistItem[];
  public id: String;

  public withWishlistItems(value: WishlistItem[]) {
    this.wishlistItems = value;
    return this;
  }

  public withId(value: String) {
    this.id = value;
    return this;
  }

  public withNewWishlistItem(value: WishlistItem) {
    if(!this.wishlistItems){
      this. wishlistItems = [];
    }
    this.wishlistItems.push(value);
    return this;
  }
}
