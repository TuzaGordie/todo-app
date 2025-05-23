import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, FormsModule]
})
export class HomeComponent {

  todos: any[] = [];
  todo: string = ''

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = [
      { item: 'Setup Project (Angular development)', completed: false },
      { item: 'Create and setup Netlify Account', completed: false },
      { item: 'Convert the UI/UX designs from Figma into HTML', completed: false },
      { item: 'Apply CSS styles to Web pages after design conversion', completed: false },
      { item: 'Host and deploy Converted designs or web pages on Netlify', completed: false },
    ]
  }

  addItem() {
    let todo = {
      item: this.todo,
      completed: false
    }

    this.todos.push(todo)
    this.todo = ''

  }
}
