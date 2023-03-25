import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-game-contol',
  templateUrl: './game-contol.component.html',
  styleUrls: ['./game-contol.component.css']
})
export class GameContolComponent implements OnInit {
 @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame(){
    clearInterval(this.interval);
  }
}
