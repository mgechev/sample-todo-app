import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  clear() {
    this.todos = this.todos.filter(t => !t.completed);
    this.store();
  }

  update(todo: Todo) {
    todo.completed = !todo.completed;
    this.store();
  }
  
  add(text: string) {
    this.todos.push({
      completed: false,
      text
    });
    this.store();
  }

  private store() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
