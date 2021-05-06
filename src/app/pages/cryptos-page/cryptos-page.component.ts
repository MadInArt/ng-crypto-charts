import { Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);
import { Subscription, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { CryptosService } from 'src/app/services/cryptos.service';
import {  CryptoItem } from 'src/app/shared/models/cryptos';
import {
  webSocket
} from 'rxjs/webSocket';

@Component({
  selector: 'app-cryptos-page',
  templateUrl: './cryptos-page.component.html',
  styleUrls: ['../../../assets/styles/pages/cryptos-page.component.scss']
})
export class CryptosPageComponent implements OnInit {
 
  cryptos: CryptoItem[] = [];
  cryptosHistoryDataArray = []
  
  rate: any;
  rate$: Subscription;
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;
  ws = webSocket('wss://ws.coincap.io/prices?assets=bitcoin')
 
  cryptosDataArr = [
    this.cryptosService.bitcoinData ,
    this.cryptosService.ethereumData ,
    this.cryptosService.binanceCoinData ,
    this.cryptosService.dogeCoinData,
    this.cryptosService.stellarData ,
  ]

  constructor(private cryptosService: CryptosService) { }

  ngOnInit(): void {
    this.cryptosService.getCryptos();
    this.cryptosService.getCryptosList().subscribe(cryptosList => {
      this.cryptos = cryptosList})

    this.cryptosService.getCryptosHistory();
    this.cryptosDataArr.forEach(coinData => {
      coinData.subscribe(data => {
       this.checkLength(data)
       console.log(this.cryptosHistoryDataArray)
    
      })
    })

    this.rate = this.ws.pipe(
      concatMap(item => of (item).pipe(delay(1000)))
    ).subscribe(data => {
      this.rate = data;
      this.chardata.push(Number(this.rate.bitcoin))

      this.chartOptions = {
        chart: {
          type: "line",
        },
        series: [{
          data: this.chardata,
           showInLegend: false,         
        }],
        title: {
          text: "Bitcoin dynamic price",
        },
        xAxis: {
          labels: {
              enabled: false
          },
        },
        marker: {
          enabled: false
       } 
      };
    })
  }

  checkLength(data){
        if(data.length > 0 ){
          this.cryptosHistoryDataArray.push(data)
        } else {
          return null;
        }
      }
      
  }
 