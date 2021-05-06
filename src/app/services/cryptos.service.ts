import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CryptoHistoryItem, CryptoItem } from '../shared/models/cryptos';
import { ApiService } from './api.service';


const __cryptosUrl = 'https://api.coincap.io/v2';
// const __cryptoSocket = webScz


@Injectable({
  providedIn: 'root'
})

export class CryptosService {

  constructor(private apiService: ApiService) { }

  private cryptosListSub: BehaviorSubject<CryptoItem[]> = new BehaviorSubject<CryptoItem[]>([]);
  currentData = this.cryptosListSub.asObservable();

  private bitcoinHistorySub: BehaviorSubject<CryptoHistoryItem[]> = new BehaviorSubject<CryptoHistoryItem[]>([]);
  bitcoinData = this.bitcoinHistorySub.asObservable();
  
  private ethereumHistorySub: BehaviorSubject<CryptoHistoryItem[]> = new BehaviorSubject<CryptoHistoryItem[]>([]);
  ethereumData = this.ethereumHistorySub.asObservable();
  
  private binanceCoinHistorySub: BehaviorSubject<CryptoHistoryItem[]> = new BehaviorSubject<CryptoHistoryItem[]>([]);
  binanceCoinData = this.binanceCoinHistorySub.asObservable();
  
  private dogeCoinHistorySub: BehaviorSubject<CryptoHistoryItem[]> = new BehaviorSubject<CryptoHistoryItem[]>([]);
  dogeCoinData = this.dogeCoinHistorySub.asObservable();
  
  private stellarHistorySub: BehaviorSubject<CryptoHistoryItem[]> = new BehaviorSubject<CryptoHistoryItem[]>([]);
  stellarData = this.stellarHistorySub.asObservable();

  cryptosHistoryArr =  [
        {key: 'bitcoin', sub: this.bitcoinHistorySub}, 
        {key: 'ethereum', sub: this.ethereumHistorySub},
        {key: 'dogecoin', sub: this.dogeCoinHistorySub}, 
        {key: 'stellar', sub: this.stellarHistorySub}
  ];
  cryptosPriceArr = [
    {key: 'bitcoin', value : []},
    {key: 'ethereum', value : []},
    {key: 'dogecoin', value : []},
    {key: 'stellar', value : []},
  ]
  
  getCryptosList(): BehaviorSubject<CryptoItem[]>{
    return this.cryptosListSub;
  }
  getCryptos(): void{
    this.apiService.get(`${__cryptosUrl}/assets`).pipe(tap(data => {
      this.cryptosListSub.next(data.data)
    })).subscribe()
  }
  getCryptosHistory(): void{
    this.cryptosHistoryArr.forEach((crypto)=>{
      this.apiService.get(`${__cryptosUrl}/assets/${crypto.key}/history?interval=d1`).pipe(
        tap(d => crypto.sub.next(d.data))).subscribe();
    });
  }
  // getCryptosPrices(): void {
  //   this.cryptosPriceArr.forEach((crypto)=>{
  //     this.apiService.get()
  //   })
  // }
}
