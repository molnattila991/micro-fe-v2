import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoCreate } from '../../models/todo-create.interface';

@Component({
  selector: 'lib-todo-create-view',
  templateUrl: './todo-create-view.component.html',
  styleUrls: ['./todo-create-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateViewComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TodoCreateViewComponent>,
    @Inject(MAT_DIALOG_DATA) public item: TodoCreate
  ) {
    this.formGroup = this.formBuilder.group({
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
    this.formGroup.setValue(
      { title: this.item.title, description: this.item.description },
      { emitEvent: false }
    );
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.formGroup.value);
    }
  }
}
