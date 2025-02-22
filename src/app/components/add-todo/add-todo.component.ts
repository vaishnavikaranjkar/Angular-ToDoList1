import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title: string
  desc: string
  @Output() todoAdd: EventEmitter<Todo> =new EventEmitter()
  constructor(){
    this.desc=""
    this.title=""
  }
  onSubmit(){
    const todo={
      sno: 3,
      title: this.title,
      desc:this.desc,
      active: true
    }
    this.todoAdd.emit(todo)
  }
}
