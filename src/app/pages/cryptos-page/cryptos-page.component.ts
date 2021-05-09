import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DynamicChartComponent } from 'src/app/components/dynamic-chart/dynamic-chart.component';


import { CryptosService } from 'src/app/services/cryptos.service';
import {  CryptoHistoryItem, CryptoItem } from 'src/app/shared/models/cryptos';

import { HistoryLineComponent } from './../../components/history-line/history-line.component';

@Component({
  selector: 'app-cryptos-page',
  templateUrl: './cryptos-page.component.html',
  styleUrls: ['./cryptos-page.component.scss']
})
export class CryptosPageComponent implements OnInit
// , AfterViewInit 
{
  
  cryptos: CryptoItem[] = [];
  ws: any;
  // isWsLoading:boolean;
 
 @ViewChild('historyLine') historyLine: HistoryLineComponent;
//  @ViewChild('dynamicChart') dynamicChart: DynamicChartComponent;

  wsFromDynamicChild: any;

  public top5CryptoPriceArr: any = [];
  public top5CryptoNameArr: any = [];

  constructor(private cryptosService: CryptosService) { }

  async ngOnInit() {

    // this.isWsLoading = true;
    this.ws = this.cryptosService.getWebSocket()
    this.cryptosService.getCryptos();
    this.cryptosService.getCryptosList().subscribe(cryptosList => {
 
      this.cryptos = cryptosList;
    
       this.top5CryptoPriceArr = this.cryptos.slice(0, 5).map(item => {
        return item.priceUsd;
      }).map(i => Number(i))

      this.top5CryptoNameArr = this.cryptos.slice(0, 5).map(item => {
        return item.id;
      })
      this.setChartData();
     
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

  // setTimeout(()=>{
  //   this.isWsLoading = false;
  // }, 3000)
    

  }
  setChartData(){
     console.log(this.top5CryptoNameArr, 'name')
     console.log(this.top5CryptoPriceArr, 'price')
  }

  }
 