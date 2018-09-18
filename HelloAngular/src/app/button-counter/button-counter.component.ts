import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-button-counter',
  templateUrl: './button-counter.component.html',
  styleUrls: ['./button-counter.component.scss']
})
export class ButtonCounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.count++;
  }

}
