import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-options-menu',
  templateUrl: './c-options-menu.component.html',
  styleUrls: ['./c-options-menu.component.css']
})
export class COptionsMenuComponent implements OnInit {

  constructor() { }

  files: any = require("../c-cjs-chart/config/f-fs-structure/options-struc.json");
  options: Array<String> = [];
  icons: Array<String> = [];
  divID: Array<String> = [];
  iconID: Array<String> = [];
  titleID: Array<String> = [];
  iterate: number = 0;

  getUIElements() {
    this.files.map(option => {
      console.log("Option options: " + JSON.stringify(option.title));
      this.options.push(option.title);
      this.icons.push(option.icon);
      this.divID.push("optDivi"+this.iterate);
      this.iconID.push("optIcon"+this.iterate);
      this.titleID.push("optTitl"+this.iterate);
      this.iterate++;
    });
  }

  ngOnInit(): void {
    this.getUIElements();
    console.log("options: " + this.options);
    console.log("Icons " + this.icons)
  }

}
