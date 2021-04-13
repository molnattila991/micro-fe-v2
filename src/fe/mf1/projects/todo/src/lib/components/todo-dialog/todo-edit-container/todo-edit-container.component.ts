import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TodoEdit } from '../../../models/todo-edit.interface';
import { TodoItem } from '../../../models/todo-item.interface';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { editTodo } from '../../../store/todo.actions';

@Component({
  selector: 'lib-todo-edit-container',
  templateUrl: './todo-edit-container.component.html',
  styleUrls: ['./todo-edit-container.component.css']
})
export class TodoEditContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<TodoEditContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public item: TodoItem,
    private store: Store<{ todo: TodoModuleState }>
  ) { }

  cancel(): void {
    this.dialogRef.close();

  }

  save(item: TodoItem): void {
    this.dialogRef.close();
    this.store.dispatch(editTodo({ item }));
  }

}
