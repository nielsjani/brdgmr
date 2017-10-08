import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import WishlistItem from "../class/wishlistitem";
@Injectable()
export class WishlistService {
  private schemaName: string = "selection";

  public baseUrl: string = "https://brdgmr-4e4ef.firebaseio.com";

  constructor(private http: Http) {
  }

  addWishlistItem(wishlistItem: WishlistItem): Observable<Response> {
    return this.http.post(`${this.baseUrl}/${this.schemaName}.json`, JSON.stringify(wishlistItem));
  }

  getWishlist(): Observable<Response> {
    return this.http.get(`${this.baseUrl}/${this.schemaName}.json`);
  }

  update(wishlist: WishlistItem[]) {
    wishlist.forEach(item => this.http.put(`${this.baseUrl}/${this.schemaName}/${item.technicalId}.json`, JSON.stringify(item)).subscribe());
  }

  getWishlistItem(id: string) {
    return this.http.get(`${this.baseUrl}/${this.schemaName}/${id}.json`);
  }
}
