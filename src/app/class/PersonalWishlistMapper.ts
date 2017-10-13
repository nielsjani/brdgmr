import PersonalWishlist from "./personalWishlist";
import {WishlistService} from "../service/wishlist.service";
export default class PersonalWishlistMapper {

  constructor(private wishlistService: WishlistService){

  }

  public mapPersonalWishlist(json: any) {
    if(!json){
      return undefined;
    }
    let id = this.getId(json);
    return new PersonalWishlist()
      .withId(id)
      .withWishlistItems(json[id].wishlistItems);
  }


  private getId(jsonWishlist: any) {
    let wishlistsToCleanUp = [];
    if(!jsonWishlist.id){
      for (let key in jsonWishlist) {
        if (jsonWishlist.hasOwnProperty(key)) {
          jsonWishlist.id = key;
          wishlistsToCleanUp.push(key);
        }
      }
    }
    this.cleanUpOldWishlists(wishlistsToCleanUp, jsonWishlist);
    return jsonWishlist.id;
  }

  private cleanUpOldWishlists(wishlistsToCleanUp: string[], jsonWishlist: any) {
    wishlistsToCleanUp.pop();
    if (wishlistsToCleanUp.length > 0) {
      this.wishlistService.cleanUpOldWishlists(wishlistsToCleanUp.filter(key => key !== jsonWishlist.id));
    }
  }

}
