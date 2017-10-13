import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import PersonalWishlist from "../class/personalWishlist";
@Injectable()
export class WishlistService {
  private schemaName: string = "wishlistNIELSJANI";

  public baseUrl: string = "https://brdgmr-4e4ef.firebaseio.com";

  constructor(private http: Http) {
  }

  addWishlistItem(personalWishlist: PersonalWishlist): Observable<Response> {
    return this.http.post(`${this.baseUrl}/${this.schemaName}.json`, JSON.stringify(personalWishlist));
  }

  getWishlist(): Observable<Response> {
    return this.http.get(`${this.baseUrl}/${this.schemaName}.json`);
  }

  update(personalWishlist: PersonalWishlist) {
    return this.http.put(`${this.baseUrl}/${this.schemaName}/${personalWishlist.id}/wishlistItems.json`, JSON.stringify(personalWishlist.wishlistItems)).subscribe();
  }

  getWishlistItem(id: string) {
    return this.http.get(`${this.baseUrl}/${this.schemaName}/${id}.json`);
  }

  cleanUpOldWishlists(oldWishlists: string[]) {
    oldWishlists.forEach(oldWishlist => this.http.delete(`${this.baseUrl}/${this.schemaName}/${oldWishlist}.json`).subscribe());
  }
}
