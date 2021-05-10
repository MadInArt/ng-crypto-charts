import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions } from "ng-apexcharts";
import { Subject } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-price-charts',
  templateUrl: './price-charts.component.html',
  styleUrls: ['./price-charts.component.scss']
})

export class PriceChartsComponent implements  OnChanges{
 
  @ViewChild("chart") chart: ChartComponent;
  
  public chartOptions;
  @Input() top5CryptoNameSubj : Subject <any>;
  @Input() top5CryptoPriceSubj : Subject <any>;
  @Input() top5CryptoPriceArr: [];
  @Input() top5CryptoNameArr: [];
  
  name: any;
  price: any;

  constructor() {}

  ngOnChanges(){
    this.buildChart()
   }

   buildChart(){

    this.top5CryptoNameSubj.subscribe(name => {
      this.name = name;
    })
    this.top5CryptoPriceSubj.subscribe(price => {
      this.price = price;
    })
    
    this.chartOptions = {
      // colors: ['#fff'],
      // theme: {
      //   mode: 'light', 
      //   palette: 'palette1', 
      //   monochrome: {
      //       enabled: false,
      //       color: '#ff00ff',
      //       shadeTo: 'dark',
      //       shadeIntensity: 0.65
      //   }
      // },   for some reasons applying theme object doesnt change style at all
      series: [
        {
          name: "basic",
          data:   this.price
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: this.name
      },
      
  }
}


}
