import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CryptoItem } from '../shared/models/cryptos';
import { ApiService } from './api.service';


const __cryptosUrl = 'https://api.coincap.io/v2';

@Injectable({
  providedIn: 'root'
})

export class CryptosService {

  constructor(private apiService: ApiService) { }

  cryptosList: CryptoItem[] = [];
  private cryprosListSub: BehaviorSubject<CryptoItem[]> = new BehaviorSubject<CryptoItem[]>([]);
  currentData = this.cryprosListSub.asObservable();

  getCryptosList(): BehaviorSubject<CryptoItem[]>{
    return this.cryprosListSub;
  }
  getCryptos(): void{
    this.apiService.get(`${__cryptosUrl}/assets`).pipe(tap(data => {
      this.cryprosListSub.next(data.data)
    })).subscribe()
  }
}
