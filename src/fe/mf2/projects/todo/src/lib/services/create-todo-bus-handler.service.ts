import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { busEvent, IBusConnector, INJECTION_TOKEN, IStateCommand, ITodoDialogService, TodoItem } from 'projects/core/src/public-api';
import { TodoCreateContainerComponent } from '../components/todo-dialog/todo-create-container/todo-create-container.component';

@Injectable()
export class CreateTodoBusHandlerService implements ITodoDialogService {

  constructor(    
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>,
    public dialog: MatDialog
  ) { }

  subscribe(): void {
    this.busConnector.subscribe(busEvent.todo.create, (data) => {
      this.store.add({ ...data, isCompleted: false });
    });
  }

  unsubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.create);
  }
  
  open(item?: TodoItem): void {
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
}
