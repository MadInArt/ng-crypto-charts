import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);

import { Subscription, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';


@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})
export class DynamicChartComponent implements OnInit {
  @Input() ws;
  cryptosHistoryDataArray = []
  rate: any;
  rate$: Subscription;
  Highcharts: typeof Highcharts = Highcharts;
  chartdata: any[] = [];
  chartOptions: any;
  constructor() { }

  ngOnInit(): void {

    this.rate = this.ws.pipe(
      concatMap(item => of (item).pipe(delay(1000)))
    ).subscribe(data => {
      this.rate = data;
      this.chartdata.push(Number(this.rate.bitcoin))

      this.chartOptions = {
        chart: {
          type: "line",
        },
        series: [{
          data: this.chartdata,
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
}
