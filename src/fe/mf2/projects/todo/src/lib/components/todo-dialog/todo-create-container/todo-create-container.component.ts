import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TodoCreate } from '../../../models/todo-create.interface';
import { TodoModuleState } from '../../../models/todo-module-state.interface';
import { addTodo } from '../../../store/todo.actions';

@Component({
  selector: 'lib-todo-create-container',
  templateUrl: './todo-create-container.component.html',
  styleUrls: ['./todo-create-container.component.css']
})
export class TodoCreateContainerComponent {

  constructor(
    public dialogRef: MatDialogRef<TodoCreateContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public item: TodoCreate,
    private store: Store<{ todo: TodoModuleState }>
  ) { }

  cancel(): void {
    this.dialogRef.close();

  }

  save(item: TodoCreate): void {
    this.dialogRef.close();
    this.store.dispatch(addTodo({ item: { ...item, isCompleted: false } }));
  }

}
