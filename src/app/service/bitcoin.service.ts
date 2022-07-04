import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  public getRate() {
    return this.http.get<number>(
      "https://blockchain.info/tobtc?currency=USD&value=1"
    )
  }

  public getMarketPrice() {
    return this.http
      .get<any>(
        "https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true"
      )
      .pipe(map((res) => res.values))
  }

  public getConfirmedTransactions() {
    return this.http
      .get<any>(
        "https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true"
      )
      .pipe(map((res) => res.values))
  }
}
