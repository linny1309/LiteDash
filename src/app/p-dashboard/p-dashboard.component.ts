import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class PDashboardComponent implements OnInit {

  constructor() { }

  buttonTypes: Array<String> = ['navIcon','navTitl','navDivi'];
  tensorChart: Boolean = false;

  onChange(event) {
    /*
    var targetID: String = (event.target.id).toString();
    if((targetID.substring(0,7) == "navIcon" || targetID.substring(0,7) == "navTitl" || targetID.substring(0,7) == "navDivi")  && targetID.substring(7,8) == "6" ) {
      console.log("p-dashboard: true");
      document.getElementById("cCjsChartComponent").style.display = "none";
      //document.getElementById("cCjsTensorChartComponent").style.display = "block";
    }
    else {
      console.log("p-dashboard: false");
      document.getElementById("cCjsChartComponent").style.display = "block";
      //document.getElementById("cCjsTensorChartComponent").style.display = "none";
    } */
  }


  ngOnInit(): void {
    document.getElementById("cCjsChartComponent").style.display = "block";
    //document.getElementById("cCjsTensorChartComponent").style.display = "none";
  }

}
