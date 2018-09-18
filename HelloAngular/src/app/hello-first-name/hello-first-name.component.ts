import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'in-hello-first-name',
  templateUrl: './hello-first-name.component.html',
  styleUrls: ['./hello-first-name.component.scss']
})
export class HelloFirstNameComponent implements OnInit {

  firstName = 'Romain';

  constructor() { }

  ngOnInit() {
  }

}
