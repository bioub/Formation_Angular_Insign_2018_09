import { Todo } from './../models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
