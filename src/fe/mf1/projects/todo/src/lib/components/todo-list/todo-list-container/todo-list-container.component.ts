import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem } from '../../../models/todo-item.interface';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { deleteTodo, editTodo, refresh } from '../../../store/todo.actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoEditContainerComponent } from '../../todo-dialog/todo-edit-container/todo-edit-container.component';
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
    public dialog: MatDialog,
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
  }

  ngOnInit(): void {
    this.store.dispatch(refresh());
    this.todoBus.editTodoSubscribe();
    this.todoBus.deleteTodoSubscribe();
  }

  openDialog(item: TodoItem): void {
    this.todoBus.openEditDialog(item);
  }
}
