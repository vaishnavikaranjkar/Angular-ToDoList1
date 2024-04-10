import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'                                                                                               
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo
  @Input() i:number
  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter()
  @Output() todoCheckbox: EventEmitter<Todo> =new EventEmitter()
  constructor(){
    this.todo={sno:0,title:"",desc:"",active:true}
   this.i=0
  }
  ngOnInit(): void {
      
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo)
    console.log("onClick() is triggered")
  }
  onCheckboxClick(todo:Todo){
    this.todoCheckbox.emit(todo)
  }
}