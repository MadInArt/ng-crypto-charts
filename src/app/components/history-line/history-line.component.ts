import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-history-line',
  templateUrl: './history-line.component.html',
  styleUrls: ['./history-line.component.scss']
})


export class HistoryLineComponent implements OnChanges {
  


  @Input() top5CryptoPriceArr: [];
  @Input() top5CryptoNameArr: [];
  
  constructor() { }

  ngOnChanges(){
    console.log(this.top5CryptoNameArr, 'line')
    console.log(this.top5CryptoPriceArr, 'line')
  }

}