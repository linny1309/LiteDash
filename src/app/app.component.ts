import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {'(document:click)': 'onChange($event)'}
})
export class AppComponent implements OnInit {
  totalAngularPackages;
  title = 'LiteDash';

  messages = this.http.get<any[]>('http//localhost:8801/users');

  constructor(private http: HttpClient) {

  }

  onChange() {
    this.http.get('http://localhost:8801/users').subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.http.post<any>('http://localhost:8801/users', {username:'Patrick', password: 'Patrick'})
    .subscribe(next => console.log(next));

    console.log(JSON.stringify(this.messages).toString());
  }

}
