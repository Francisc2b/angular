import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'timer',
  template: '<countdown-timer></countdown-timer>'})
export class TimerComponent implements OnInit {
  
  minutes: number;
  seconds: number;
  @Input() isPaused: boolean = false;
  @Input() buttonLabel: string = ' ';

  constructor() {
    this.minutes = 24;
    this.seconds = 59;

    this.reset();
    setInterval(() => this.tick(), 1000);
  }

  reset() {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }

  private tick() {
    if(!this.isPaused) {
    this.buttonLabel = 'Pause';
    if(--this.seconds < 0) {
    this.seconds = 59;
    if(--this.minutes < 0) {
    this.reset();
    }
    }
    }
   }
   

  togglePause() {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  ngOnInit(): void {}
}
