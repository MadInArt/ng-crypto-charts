import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";


const parallelCoordinates = require("highcharts/modules/parallel-coordinates.js");
parallelCoordinates(Highcharts)

@Component({
  selector: 'app-history-line',
  templateUrl: './history-line.component.html',
  styleUrls: ['../../../assets/styles/components/history-line.component.scss']
})


export class HistoryLineComponent implements OnInit {
  
  @Input() cryptosHistoryDataArray;
  constructor() { }

  Highcharts = Highcharts;
  chartOptions;

  ngOnInit(): void {
    const SECONDS = 1530403200000;
    const result = new Date(SECONDS).toLocaleString().split(',')[0].toString()
    // console.log(result) // convert seconds to DD
    console.log(this.cryptosHistoryDataArray, 'chart component')

    // console.log(bitcoinData)

   this.chartOptions = {
    chart: {
      events: {
        load(){
          let btn = document.getElementById("btn")

          btn.addEventListener("click", ()=>{
            this.series[0].setData([2,4,4,6,1])
            })
        }
      }
    },
    // series: [{
    //     data: [
    //       "22/12/2000",
    //       376.2
    //       ]},
    //     data: [[
    //       "22/12/2000",
    //       376.2
    //       ],
    //       [
    //         "22/12/2000",
    //       371.3
    //       ],
    //       [
    //         "22/12/2000",
    //       374.5
    //       ],
    //      ]
    //   }]

  };
  }

  
}
