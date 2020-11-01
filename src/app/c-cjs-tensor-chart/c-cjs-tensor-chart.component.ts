import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fileURLToPath } from 'url';
import { config } from 'process';

import * as Chart from 'chart.js';
import * as ChartLabels from 'chartjs-plugin-Datalabels';

var tensorChart = require("./config/f-chart-data/tensor-chart-struc.json");

@Component({
  selector: 'c-cjs-tensor-chart',
  templateUrl: './c-cjs-tensor-chart.component.html',
  styleUrls: ['./c-cjs-tensor-chart.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CCjsTensorChartComponent implements OnInit {

  chart = new Chart("cjsTensorChart", tensorChart);

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.chart = new Chart("cjsTensorChart", tensorChart);
  }

}

