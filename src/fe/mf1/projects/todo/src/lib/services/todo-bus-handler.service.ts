import { Inject, Injectable } from '@angular/core';
import { busEvent, IBusConnector, INJECTION_TOKEN, IStateCommand, TodoModuleState } from 'projects/core/src/public-api';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TodoCreateContainerComponent } from '../components/todo-dialog/todo-create-container/todo-create-container.component';
import { TodoEditContainerComponent } from '../components/todo-dialog/todo-edit-container/todo-edit-container.component';
import { TodoItem } from "projects/core/src/public-api";

@Injectable()
export class TodoBusHandlerService {

  constructor(
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>,
    public dialog: MatDialog
  ) {

  }

  createTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.create, (data) => {
      this.store.add({ ...data, isCompleted: false });
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
        width: '350px',
      });
    }
  }

  editTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.edit, (data) => {
      this.store.edit(data);
    });
  }

  editTodoUnSubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.edit);
  }

  toggleTodoCompleted(item: TodoItem): void {
    this.store.edit({ ...item, isCompleted: !item.isCompleted });
    this.busConnector.dispatchEvent(busEvent.todo.toggle, item);
  }

  toggleTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.toggle, (item: TodoItem) => {
      this.store.edit({ ...item, isCompleted: !item.isCompleted });
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
        width: '350px',
        data: item
      });
    }
  }

  deleteTodo(id: number): void {
    this.store.delete(id);
    this.busConnector.dispatchEvent(busEvent.todo.delete, id);
  }

  deleteTodoSubscribe(): void {
    this.busConnector.subscribe(busEvent.todo.delete, (id) => {
      this.store.delete(id);
    });
  }

  deleteTodoUnSubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.edit);
  }
}
