import { Todo } from './models/Todo';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  todos: Todo[] = [{
    id: 123,
    text: 'Acheter du pain',
    done: false,
  }, {
    id: 456,
    text: 'Acheter du lait',
    done: true,
  }];

  onTodoChange(todo) {
    const maxId = this.todos.reduce((acc, t) => (t.id > acc) ? t.id : acc, 0);
    this.todos = [{...todo, id: maxId + 1}, ...this.todos];
    // this.todos.unshift(todo);
  }
}
