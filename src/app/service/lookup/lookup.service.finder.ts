

import {LotanaLookupService} from "./lotana/lookup.lotana.service";
import {SpelshopLookupService} from "./spelshop/lookup.spelshop.service";
import {QueenOfGamesLookupService} from "./queenofgames/lookup.queenofgames.service";
import {SpelonkLookupService} from "./spelonk/lookup.spelonk.service";
import {LookupService} from "./lookup.service";
import {Injectable} from "@angular/core";

@Injectable()
export default class LookupServiceFinder {
  private lookupMap: Map<String, LookupService>;

  constructor(lotanaLookup: LotanaLookupService,
              spelShopLookup: SpelshopLookupService,
              queenOfGamesLookup: QueenOfGamesLookupService,
              spelonkLookup: SpelonkLookupService){
    this.lookupMap = new Map();
    this.lookupMap.set("LOTANA", lotanaLookup);
    this.lookupMap.set("SPELSHOP", spelShopLookup);
    this.lookupMap.set("QUEEN_OF_GAMES", queenOfGamesLookup);
    this.lookupMap.set("SPELONK", spelonkLookup);
  }

  getLookupService(shopName: String): LookupService {
    return this.lookupMap.get(shopName);
  }
}
