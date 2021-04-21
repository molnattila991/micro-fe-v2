import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { busEvent, IBusConnector, INJECTION_TOKEN, IStateCommand, ITodoDialogService, TodoItem } from 'projects/core/src/public-api';
import { TodoEditContainerComponent } from '../components/todo-dialog/todo-edit-container/todo-edit-container.component';

@Injectable()
export class EditTodoBusHandlerService implements ITodoDialogService {

  constructor(    
    @Inject(INJECTION_TOKEN.BUS.CONNECTOR) private busConnector: IBusConnector,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>,
    public dialog: MatDialog
  ) { }

  subscribe(): void {
    this.busConnector.subscribe(busEvent.todo.edit, (data) => {
      this.store.edit(data);
    });
  }

  unsubscribe(): void {
    this.busConnector.unSubscribe(busEvent.todo.edit);
  }
  
  open(item?: TodoItem): void {
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
}
