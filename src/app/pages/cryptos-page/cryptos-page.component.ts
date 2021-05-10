import {  Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subject } from 'rxjs';
import { DynamicChartComponent } from 'src/app/components/dynamic-chart/dynamic-chart.component';


import { CryptosService } from 'src/app/services/cryptos.service';
import {  CryptoItem } from 'src/app/shared/models/cryptos';

@Component({
  selector: 'app-cryptos-page',
  templateUrl: './cryptos-page.component.html',
  styleUrls: ['./cryptos-page.component.scss']
})
export class CryptosPageComponent implements OnInit, OnDestroy 
{
  
  cryptos: CryptoItem[] = [];
  ws: any;
  // isWsLoading:boolean;
 
 @ViewChild('dynamicChart') dynamicChart: DynamicChartComponent;

  wsFromDynamicChild: any;
  
  top5CryptoPriceSubj: Subject<any> = new Subject();
  top5CryptoNameSubj: Subject<any> = new Subject();

  public top5CryptoPriceArr: any = [];
  public top5CryptoNameArr: any = [];

  constructor(private cryptosService: CryptosService) { }

  async ngOnInit() {

    // this.isWsLoading = true;
    this.ws = this.cryptosService.getWebSocket()
    this.cryptosService.getCryptos();
    this.cryptosService.getCryptosList().subscribe(cryptosList => {
 
      this.cryptos = cryptosList;
    
       this.top5CryptoPriceArr = this.cryptos.slice(39, 44).map(item => {
        return item.priceUsd;
      }).map(i => Number(i))

      this.top5CryptoNameArr = this.cryptos.slice(39, 44).map(item => {
        return item.id;
      })
      this.setChartData()
  
    })

  }
  setChartData(){
    this.top5CryptoNameSubj.next(this.top5CryptoNameArr);
    this.top5CryptoPriceSubj.next(this.top5CryptoPriceArr)
   }
   ngOnDestroy(){
      // this.top5CryptoNameSubj.unsubscribe();
      // this.top5CryptoPriceSubj.unsubscribe();
      // this.cryptosService.getCryptosList().unsubscribe()
   }
  }
 