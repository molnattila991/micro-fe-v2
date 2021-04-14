import { Inject, Injectable } from '@angular/core';
import { busEvent, IBusConnector, INJECTION_TOKEN } from 'projects/core/src/public-api';
import { TodoModuleState } from '../models/todo-module-state.interface';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, editTodo } from '../store/todo.actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoCreateContainerComponent } from '../components/todo-dialog/todo-create-container/todo-create-container.component';
import { TodoEditContainerComponent } from '../components/todo-dialog/todo-edit-container/todo-edit-container.component';
import { TodoItem } from '../models/todo-item.interface';

@Injectable()
export class TodoBusHandlerService {

  constructor(
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector,
    private store: Store<{ todo: TodoModuleState }>,
    public dialog: MatDialog
  ) {

  }

  createTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.create, (data) => {
      this.store.dispatch(addTodo({ item: { ...data, isCompleted: false } }));
    });
  }

  createTodoUnSubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.create);
  }

  openCreateDialog() {
    if (this.busConnector.isConnected()) {
      this.busConnector.dispatchEvent(busEvent.todo.createDialogOpen, {});
    } else {
      let dialogConfig = new MatDialogConfig();
      dialogConfig.viewContainerRef
      let dialogRef = this.dialog.open(TodoCreateContainerComponent, {
        width: '300px',
      });
    }
  }

  editTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.edit, (data) => {
      this.store.dispatch(editTodo({ item: { ...data } }));
    });
  }

  editTodoUnSubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.edit);
  }

  toggleTodoCompleted(item: TodoItem): void {
    this.store.dispatch(editTodo({ item: { ...item, isCompleted: !item.isCompleted } }));
    this.busConnector.dispatchEvent(busEvent.todo.toggle, item);
  }

  toggleTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.edit, (data: TodoItem) => {
      this.store.dispatch(editTodo({ item: { ...data, isCompleted: !data.isCompleted } }));
    });
  }

  toggleTodoUnSubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.toggle);
  }

  openEditDialog(item: TodoItem) {
    if (this.busConnector.isConnected()) {
      this.busConnector.dispatchEvent(busEvent.todo.editDialogOpen, item);
    } else {
      let dialogConfig = new MatDialogConfig();
      dialogConfig.viewContainerRef
      let dialogRef = this.dialog.open(TodoEditContainerComponent, {
        width: '300px',
        data: item
      });
    }
  }

  deleteTodo(id: number): void {
    this.store.dispatch(deleteTodo({ id }));
    this.busConnector.dispatchEvent(busEvent.todo.delete, id);
  }

  deleteTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.delete, (data) => {
      this.store.dispatch(deleteTodo({ id: data }));
    });
  }

  deleteTodoUnSubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.edit);
  }
}
