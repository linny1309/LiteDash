import { Component, OnInit } from '@angular/core';
import { fileURLToPath } from 'url';
import { config } from 'process';

@Component({
  selector: 'c-nav-menu',
  templateUrl: './c-nav-menu.component.html',
  styleUrls: ['./c-nav-menu.component.css']
})
export class CNavMenuComponent implements OnInit {

  constructor() { }

  config: any = require("../c-cjs-chart/config/f-fs-structure/fs-struc.json");
  options: Array<String> = [];
  icons: Array<String> = [];
  divID: Array<String> = [];
  iconID: Array<String> = [];
  titleID: Array<String> = [];
  iterate: number = 0;

  getUIElements() {
    this.config.map(option => {
      console.log("Option options: " + JSON.stringify(option.title));
      this.options.push(option.title);
      this.icons.push(option.icon);
      this.divID.push("navDivi"+this.iterate);
      this.iconID.push("navIcon"+this.iterate);
      this.titleID.push("navTitl"+this.iterate);
      this.iterate++;
    });
  }

  ngOnInit(): void {
    this.getUIElements();
    console.log("options: " + this.options);
    console.log("Icons " + this.icons)
  }

}
