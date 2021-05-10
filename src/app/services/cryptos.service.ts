import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { CryptoHistoryItem, CryptoItem } from '../shared/models/cryptos';
import { ApiService } from './api.service';


const __cryptosUrl = 'https://api.coincap.io/v2';
const __cryptoSocket =  webSocket('wss://ws.coincap.io/prices?assets=bitcoin')

@Injectable({
  providedIn: 'root'
})

export class CryptosService {

 
  constructor(private apiService: ApiService) { }

  private cryptosListSub: BehaviorSubject<CryptoItem[]> = new BehaviorSubject<CryptoItem[]>([]);
  currentData = this.cryptosListSub.asObservable();

  // private  cryptosListHistorySub: BehaviorSubject<Array<{key: string, data :CryptoHistoryItem[]}>> = new BehaviorSubject<Array<{key: string, data :CryptoHistoryItem[]}>>([]);

  
  getCryptosList(): BehaviorSubject<CryptoItem[]>{
    return this.cryptosListSub;
  }
  getCryptos(): void{
    this.apiService.get(`${__cryptosUrl}/assets`).pipe(tap(data => {
      this.cryptosListSub.next(data.data)
    })).subscribe()
  }
  getWebSocket(){
    return __cryptoSocket;
  }

  // updateCryptosHistory(): void{
  //   this.cryptosHistoryArr.forEach((crypto)=>{
  //     this.apiService.get(`${__cryptosUrl}/assets/${crypto}/history?interval=h1`).pipe(
  //       tap(d =>{
  //         const cryptosListHistory = this.cryptosListHistorySub.getValue();
  //         this.cryptosListHistorySub.next([{key: crypto, data: d.data}, ...cryptosListHistory])
  //         })).subscribe();
  //   });
  // }

  // getCryptosHistory() {
  //   return this.cryptosListHistorySub;
  // }

 
  // getCryptosPrices(): void {
  //   this.cryptosPriceArr.forEach((crypto)=>{
  //     this.apiService.get()
  //   })
  // }
}
