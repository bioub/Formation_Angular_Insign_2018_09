import { Todo } from './../models/Todo';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input()
  todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

  getTodoId(i, todo) {
    return todo.id;
  }

  deleteTodo(todo) {
    const i = this.todos.indexOf(todo);
    this.todos.splice(i, 1);
  }
}
