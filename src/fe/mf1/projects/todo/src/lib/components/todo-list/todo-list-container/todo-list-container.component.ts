import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from "projects/core/src/public-api";
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { refresh } from '../../../store/todo.actions';
import { TodoBusHandlerService } from '../../../services/todo-bus-handler.service';

@Component({
  selector: 'lib-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  list$ = this.store.select(state => state.todo.todoItemsList);

  constructor(
    private store: Store<{ todo: TodoModuleState }>,
    private todoBus: TodoBusHandlerService
  ) { }

  delete(id: number) {
    this.todoBus.deleteTodo(id);
  }

  completedChanged(item: TodoItem): void {
    this.todoBus.toggleTodoCompleted(item);
  }

  ngOnDestroy(): void {
    this.todoBus.editTodoUnSubscribe();
    this.todoBus.deleteTodoUnSubscribe();
    this.todoBus.toggleTodoUnSubscribe();
  }

  ngOnInit(): void {
    this.store.dispatch(refresh());
    this.todoBus.editTodoSubscribe();
    this.todoBus.deleteTodoSubscribe();
    this.todoBus.toggleTodoSubscribe();
  }

  openDialog(item: TodoItem): void {
    this.todoBus.openEditDialog(item);
  }
}
