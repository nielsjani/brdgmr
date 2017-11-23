import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import PersonalWishlist from "../class/personalWishlist";
import WishlistItem from "../class/wishlistitem";
@Injectable()
export class WishlistService {
  private schemaName: string = "wishlistNIELSJANI";

  public baseUrl: string = "https://brdgmr-4e4ef.firebaseio.com";

  constructor(private http: Http) {
  }

  addWishlistItem(personalWishlist: PersonalWishlist): Observable<Response> {
    return this.http.post(`${this.baseUrl}/${this.schemaName}.json`, JSON.stringify(personalWishlist));
  }

  addWishlistItemToWishlist(wishlistId: string, wishlistItem: WishlistItem): Observable<Response> {
    return this.http.put(`${this.baseUrl}/${this.schemaName}/${wishlistId}/wishlistItems/${wishlistItem.technicalId}.json`, JSON.stringify(wishlistItem));
  }

  removeWishlistItem(wishlistId: string, wishlistItemId: string) {
    return this.http.delete(`${this.baseUrl}/${this.schemaName}/${wishlistId}/wishlistItems/${wishlistItemId}.json`);
  }

  getWishlist(): Observable<Response> {
    return this.http.get(`${this.baseUrl}/${this.schemaName}.json`);
  }

  update(personalWishlist: PersonalWishlist) {
    return this.http.put(`${this.baseUrl}/${this.schemaName}/${personalWishlist.id}/wishlistItems.json`, JSON.stringify(personalWishlist.wishlistItems)).subscribe();
  }

  getWishlistItem(wishlistId: string, itemId: string) {
    return this.http.get(`${this.baseUrl}/${this.schemaName}/${wishlistId}/wishlistItems/${itemId}.json`);
  }

  cleanUpOldWishlists(oldWishlists: string[]) {
    oldWishlists.forEach(oldWishlist => this.http.delete(`${this.baseUrl}/${this.schemaName}/${oldWishlist}.json`).subscribe());
  }
}
