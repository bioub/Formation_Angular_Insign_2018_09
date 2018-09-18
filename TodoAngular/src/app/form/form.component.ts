import { Todo } from './../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output()
  todoChange = new EventEmitter<Todo>();

  @Input()
  todo = new Todo({text: 'Default todo'});

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const copy = new Todo({...this.todo});
    this.todoChange.emit(copy);
  }
}
