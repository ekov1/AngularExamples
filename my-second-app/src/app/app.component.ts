import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h3{
  //   color:red;
  // }
  // `]
})
export class AppComponent {
  title = 'my-second-app';
  username: string = '';
  showSecret = false;
  numberLog = [];
  datesLog =[];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.numberLog.push(this.numberLog.length + 1);
    this.datesLog.push(new Date());
  }
}