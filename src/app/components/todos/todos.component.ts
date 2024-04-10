import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { NgIf } from '@angular/common';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor,TodoItemComponent,AddTodoComponent,NgIf,NgTemplateOutlet],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos:Todo[]
  localItem: string
 
  constructor(){
    this.localItem=localStorage.getItem("todos")!
    if(this.localItem==null){
      this.todos=[]
    }
    else{
      this.todos=JSON.parse(this.localItem)
    }
  }
  ngOnInit(): void {
      
  }
  deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo)
    this.todos.splice(index,1)
    console.log("deleteTodo() is triggered")
    localStorage.setItem("todos", JSON.stringify(this.todos))
  } 
  addTodo(todo: Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  toggleTodo(todo: Todo){
    const index=this.todos.indexOf(todo)
    this.todos[index].active=!this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}