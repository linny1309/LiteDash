import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-kpi-cards',
  templateUrl: './c-kpi-cards.component.html',
  styleUrls: ['./c-kpi-cards.component.css']
})
export class CKpiCardsComponent implements OnInit {


  kpiCards: any = require("../c-cjs-chart/config/f-kpi-card-data/kpi-cards-data.json");
  kpiID: Array<Number> =[];
  kpiTitle: Array<String> = [];
  kpiIcon: Array<String> = [];
  kpiSource: Array<String> = [];
  kpiDate: Array<any> = [];
  kpiPrev: Array<Number> = [];
  kpiPost: Array<Number> = [];
  kpiUnit: Array<String> = [];
  kpiMeasure: Array<Number> = []; 
  kpiMeasureUnit: Array<any> = [];
  iterate: number = 0;
  constructor() { }

  getKPIData() {
    this.kpiCards.map(option => {
      this.kpiID.push(option.kpi_id);
      this.kpiTitle.push(option.kpi_title);
      this.kpiIcon.push(option.kpi_icon);
      this.kpiSource.push(option.kpi_source);
      this.kpiDate.push(option.kpi_date.substring(0,10));
      this.kpiPrev.push(option.kpi_prev);
      this.kpiPost.push(option.kpi_post);
      this.kpiUnit.push(option.kpi_unit);
      this.kpiMeasureUnit.push(option.kpi_measure + " " + option.kpi_unit)
      this.kpiMeasure.push(option.kpi_measure);
      this.iterate++;
      });
  }

  ngOnInit(): void {
    this.getKPIData();
  }

}
