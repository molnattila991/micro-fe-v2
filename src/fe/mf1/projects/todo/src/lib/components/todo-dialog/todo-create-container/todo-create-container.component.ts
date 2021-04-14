import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INJECTION_TOKEN, IStateCommand, TodoCreate, TodoItem } from 'projects/core/src/public-api';

@Component({
  selector: 'lib-todo-create-container',
  templateUrl: './todo-create-container.component.html',
  styleUrls: ['./todo-create-container.component.css']
})
export class TodoCreateContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<TodoCreateContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public item: TodoCreate,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>

  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  save(item: TodoCreate): void {
    this.dialogRef.close();
    this.store.add({ ...item, isCompleted: false });
  }

}
