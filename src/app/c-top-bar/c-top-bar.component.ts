import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-top-bar',
  templateUrl: './c-top-bar.component.html',
  styleUrls: ['./c-top-bar.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CTopBarComponent implements OnInit {

  constructor() { }

  files: any = require("../c-cjs-chart/config/f-fs-structure/nav-struc.json");
  options: Array<String> = [];
  icons: Array<String> = [];
  divID: Array<String> = [];
  iconID: Array<String> = [];
  titleID: Array<String> = [];
  iterate: number = 0;
  buttonTypes: Array<String> = ['navIcon','navTitl','navDivi'];

  onChange(event) {
    var targetID: String = (event.target.id).toString();
    var targetSub: String = targetID.substring(0,7); 

    if((targetID.substring(0,7) == "navIcon" || targetID.substring(0,7) == "navTitl" || targetID.substring(0,7) == "navDivi"))
      this.mapUIElements(targetID, targetSub, event.target.id);
  }

  changeHeader(title, icon) {
    document.getElementById("pageTitle").innerHTML = title;
    document.getElementById("pageIcon").innerHTML = icon
  }

  getUIElements() {
    this.files.map(option => {
      console.log("Option options: " + JSON.stringify(option.title));
      this.options.push(option.title);
      this.icons.push(option.icon);
      this.divID.push("navDivi"+this.iterate);
      this.iconID.push("navIcon"+this.iterate);
      this.titleID.push("navTitl"+this.iterate);
      this.iterate++;
    });
  }

  mapUIElements(targetID, targetSub, eventTargetId) {
    var buttonType = 0;
    var option = 0;
    for(buttonType = 0; buttonType < this.buttonTypes.length; buttonType++)
        if((targetID.substring(0,7) == this.buttonTypes[buttonType])) {
          for(option = 0; option < this.options.length; option++) {
            if(eventTargetId === targetSub+option.toString()) {
              this.changeHeader(this.options[option], this.icons[option]);
            }
        }
    }
  }

  toggleMenu(menu) {
    if(document.getElementById(menu).style.opacity == "1") {
      document.getElementById(menu).style.opacity = "0";
      document.getElementById(menu).style.visibility = "hidden";
    }
    else {
      document.getElementById(menu).style.opacity = "1";
      document.getElementById(menu).style.visibility = "visible";
    }
  }

    ngOnInit(): void {
      this.getUIElements();
      this.mapUIElements("navDivi0","navDivi", "navDivi0");
  }

}
