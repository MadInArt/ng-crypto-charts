import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";


const parallelCoordinates = require("highcharts/modules/parallel-coordinates.js");
parallelCoordinates(Highcharts)

@Component({
  selector: 'app-history-line',
  templateUrl: './history-line.component.html',
  styleUrls: ['../../../assets/styles/components/history-line.component.scss']
})


export class HistoryLineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const SECONDS = 1530403200000;
    const result = new Date(SECONDS).toLocaleString().split(',')[0].toString()
    console.log(result) // convert seconds to DD
  }

  Highcharts = Highcharts;
  chartOptions = {
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
    series: [{
        data: [2, 6, 3, 2, 4, 12, 123,31,14,54,12,65,323,4,2]
      }, {
        data: [[
          "22-12-2000",
          376.2
          ],
          [
            "23-12-2000",
          371.3
          ],
          [
            "24-12-2000",
          374.5
          ],
         ]
      }]

  };
  btn = document.getElementById("btn")


}
