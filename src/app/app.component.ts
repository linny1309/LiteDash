import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LiteDash';

  messages = this.http.get<any[]>('httpsL//localhost:8801');

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.post<any>('http://localhost:8801/users', {username:'Patrick', password: 'Patrick'})
    .subscribe(next => console.log(next));
  }

}
