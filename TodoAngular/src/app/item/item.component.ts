import { Todo } from './../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  deleteHandler() {
    this.delete.emit(this.todo);
  }
}
