import { Component, OnInit } from '@angular/core';

@Component({
  selector : 'countdown-timer',
 template : '<h1>Time left: {{seconds}}</h1>'
})
export class CountdownTimerComponent implements OnInit {
  seconds: number = 25;
  intervalId: any;

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);

  }

  private tick(): void {
    if(--this.seconds < 1) {
    clearInterval(this.intervalId);
    }
    }
   

  ngOnInit(): void {}
}
