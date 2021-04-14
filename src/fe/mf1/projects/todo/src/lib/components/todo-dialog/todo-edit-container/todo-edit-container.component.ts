import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INJECTION_TOKEN, IStateCommand, TodoItem } from "projects/core/src/public-api";

@Component({
  selector: 'lib-todo-edit-container',
  templateUrl: './todo-edit-container.component.html',
  styleUrls: ['./todo-edit-container.component.css']
})
export class TodoEditContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<TodoEditContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public item: TodoItem,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private store: IStateCommand<TodoItem>
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  save(item: TodoItem): void {
    this.dialogRef.close();
    this.store.edit(item);
  }

}
