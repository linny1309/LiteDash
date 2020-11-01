import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fileURLToPath } from 'url';
import { config } from 'process';

import * as Chart from 'chart.js';
import * as ChartLabels from 'chartjs-plugin-Datalabels';

@Component({
  selector: 'c-cjs-chart',
  templateUrl: './c-cjs-chart.component.html',
  styleUrls: ['./c-cjs-chart.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CCjsChartComponent implements OnInit {

  visuals: Array<Object> = [];
  chart: Chart;
  buttonTypes: Array<String> = ['navIcon','navTitl','navDivi'];
  files: any = require("./config/f-fs-structure/nav-struc.json");

  constructor(private http: HttpClient) { }

  onChange(event) {

    var targetID: String = (event.target.id).toString();
    var targetSub: String = targetID.substring(0,7); 

    if(targetID.substring(0,7) == "navIcon" || targetID.substring(0,7) == "navTitl" || targetID.substring(0,7) == "navDivi") {
      this.mapChart(targetID, targetSub, event.target.id);
    }
  }

  mapChart(targetID, targetSub, eventTargetId) {
      var buttonType = 0;
      var visual = 0;
      for(buttonType = 0; buttonType < this.buttonTypes.length; buttonType++)
          if((targetID.substring(0,7) == this.buttonTypes[buttonType])) {
            for(visual = 0; visual < this.visuals.length; visual++) {
              console.log(eventTargetId.toString());
              if(eventTargetId === targetSub+visual.toString()) {
                this.changeChart(visual);
              }
          }
      }
      this.initChart();
  }

  changeChart(visual) {

    if(this.chart != undefined) {
      this.chart.destroy();
      console.log("Current visual data: " + JSON.stringify(this.visuals[0]));
    }

    this.http.post<any>('http://localhost:8801/users', this.visuals[visual])
      .subscribe(next => console.log(next));

    this.chart = new Chart("cjsChart", this.visuals[visual]);
  }

  initChartStructures() {
    for(var file = 0; file < this.files.length; file++) {
      var curFile = require(''+this.files[file].path + this.files[file].file+'');
      this.visuals.push(curFile);
    }
  }

  initChart() {
    Chart.defaults.push([ChartLabels]);
  }

  destroyChart() {
    this.chart.destroy();
  }

  ngOnInit(): void {
    this.initChartStructures();
    console.log("Initial visual data: " + JSON.stringify(this.visuals[0]));

    this.http.post<any>('http://localhost:8801/users', this.visuals[0])
      .subscribe(next => console.log(next));

    this.chart = new Chart("cjsChart", this.visuals[0]);
    Chart.defaults.global.defaultFontColor = "white";
  }

}
