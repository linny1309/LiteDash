import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'c-filter-menu',
  templateUrl: './c-filter-menu.component.html',
  styleUrls: ['./c-filter-menu.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CFilterMenuComponent implements OnInit {

  constructor(private http: HttpClient) { }

  filterGroups: Array<string> = ['qFilter','yearFilter','granFilter','noFilter'];
  filterSequence: Array<string> = ['qFilter','yearFilter','granFilter','noFilter','noFilter','noFilter','noFilter','yearFilter','qFilter','yearFilter'];

  ngOnInit(): void {
    this.changeFilter(2);
  }

  onChange(event): void {
    var targetID = (event.target.id).toString();
    var targetSub = targetID.substring(0,7);
    
    if((targetID.substring(0,7) == "navIcon" || targetID.substring(0,7) == "navTitl" || targetID.substring(0,7) == "navDivi"))
      this.mapFilter(targetID, targetSub, event.target.id);

    else if((targetID.substring(0,5) == "check"))
      this.sendFilterChange(event.target.id)
  }

  mapFilter(targetID, targetSub, eventTargetId) {
    var x = 0;
    if((targetID.substring(0,7) == "navIcon" || targetID.substring(0,7) == "navTitl" || targetID.substring(0,7) == "navDivi")) {
      for(x = 0; x < this.filterSequence.length; x++) {
        if(eventTargetId == targetSub+x.toString()) {
          this.changeFilter(x);
          console.log("c-filter-menu: This is the entry: " + x )
        }
    }
  }
}

  changeFilter(entry) {
    var n;
    for(n = 0; n < this.filterSequence.length; n++) {
        document.getElementById(this.filterSequence[n]).style.display = "none";
    }
    for(n = 0; n < this.filterSequence.length; n++) {
      if(entry == n) {
        console.log("c-filter-menu: Filter showing: " + this.filterGroups[n]);
        document.getElementById(this.filterSequence[n]).style.display = "block";
      }
    }
  }

  sendFilterChange(id) {
    var inputElement = <HTMLInputElement>document.getElementById(id);
    var inputValue = <string>inputElement.value;
    console.log(inputValue);

    var jsonData = {
      "value": inputValue
    }

    this.http.post<any>('http://localhost:8801/users', jsonData)
      .subscribe(next => console.log(next));
  }
}
