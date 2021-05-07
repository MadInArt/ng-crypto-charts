import { Component, OnInit, ViewChild} from '@angular/core';


import { CryptosService } from 'src/app/services/cryptos.service';
import {  CryptoItem } from 'src/app/shared/models/cryptos';

import { HistoryLineComponent } from './../../components/history-line/history-line.component';

@Component({
  selector: 'app-cryptos-page',
  templateUrl: './cryptos-page.component.html',
  styleUrls: ['./cryptos-page.component.scss']
})
export class CryptosPageComponent implements OnInit {
  
  cryptos: CryptoItem[] = [];
  ws: any;
  isWsLoading:boolean;
 
 @ViewChild('historyLine') historyLine: HistoryLineComponent;

  top5CryptoPriceArray: string | number[];
  top5CryptoNameandPrice: string  [] [];
  cryptosHistoryDataArray: { key: string; data: import("c:/Users/mkozhemiakin/test-projects/angular-crypto-charts/src/app/shared/models/cryptos").CryptoHistoryItem[]; }[];

  constructor(private cryptosService: CryptosService) { }

  ngOnInit(): void {
    this.isWsLoading = true;
    this.ws = this.cryptosService.getWebSocket()
    this.cryptosService.getCryptos();
    this.cryptosService.getCryptosList().subscribe(cryptosList => {
 
      this.cryptos = cryptosList;

      this.top5CryptoNameandPrice = this.cryptos.slice(0, 5).map(item => {
        return [
           item.id,
           item.priceUsd
        ]
      })
    
    // console.log(this.top5CryptoNameandPrice)

       this.top5CryptoPriceArray = this.cryptos.slice(0, 5).map(item => {
       return item.priceUsd;
      }).map(i => Number(i))
      console.log(this.top5CryptoPriceArray)
    })

      
    // this.cryptosService.updateCryptosHistory();
    // this.cryptosService.getCryptosHistory().subscribe(data => {
    //   if(!data.length) {
    //     return;
    //   }
    //   this.cryptosHistoryDataArray = data;
    //   console.log(this.cryptosHistoryDataArray);
    //   this.historyLine.addDataSource(this.cryptosHistoryDataArray);
    // })

  setTimeout(()=>{
    this.isWsLoading = false;
  }, 3000)
  }
  }
 