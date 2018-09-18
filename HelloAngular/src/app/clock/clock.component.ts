import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  public now: Date;

  constructor() { }

  ngOnInit() {
    this.update();
    setInterval(this.update.bind(this), 1000);
  }

  protected update() {
    this.now = new Date();
    // detectChange lancé par Zone.js
  }

}
