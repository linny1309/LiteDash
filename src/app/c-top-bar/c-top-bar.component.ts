import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-top-bar',
  templateUrl: './c-top-bar.component.html',
  styleUrls: ['./c-top-bar.component.css']
})
export class CTopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

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

}
