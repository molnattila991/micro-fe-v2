import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoEdit } from '../../models/todo-edit.interface';
import { TodoItem } from '../../models/todo-item.interface';

@Component({
  selector: 'lib-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css']
})
export class TodoEditViewComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TodoEditViewComponent>,
    @Inject(MAT_DIALOG_DATA) public item: TodoItem
  ) {
    this.formGroup = this.formBuilder.group({
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required]),
      isCompleted: new FormControl(false)
    });
  }

  ngOnInit(): void {
    this.formGroup.setValue(<TodoEdit>{
      isCompleted: this.item.isCompleted,
      title: this.item.title,
      description: this.item.description
    }, { emitEvent: false });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.formGroup.valid) {
      this.dialogRef.close(<TodoItem>{ ...this.formGroup.value, id: this.item.id });
    }
  }
}
