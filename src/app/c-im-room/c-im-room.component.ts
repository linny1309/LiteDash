import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-im-room',
  templateUrl: './c-im-room.component.html',
  styleUrls: ['./c-im-room.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class CImRoomComponent implements OnInit {

  buttonTypes: Array<String> = ['optIcon','optTitl','optDivi'];
  buttonType = 0;

  constructor() { }

  onChange(event) {
    for(this.buttonType = 0; this.buttonType < this.buttonTypes.length; this.buttonType++) {
      if(event.target.id == this.buttonTypes[this.buttonType]+"1") {
        this.toggleIMRoom();
      }
    }
  }

  toggleIMRoom() {
      if(document.getElementById("cImRoom").style.opacity == "1") {
        document.getElementById("cImRoom").style.opacity = "0";
        document.getElementById("cImRoom").style.visibility = "hidden";
        document.getElementById("optIcon1").innerHTML = "chat"
      }
      else {
        document.getElementById("cImRoom").style.opacity = "1";
        document.getElementById("cImRoom").style.visibility = "visible";
        document.getElementById("optIcon1").innerHTML = "highlight_off"
      }
  }

  ngOnInit(): void {
  }

}
