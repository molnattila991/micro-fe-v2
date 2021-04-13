import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoEdit } from '../../../models/todo-edit.interface';
import { TodoItem } from '../../../models/todo-item.interface';

@Component({
  selector: 'lib-todo-edit-view',
  templateUrl: './todo-edit-view.component.html',
  styleUrls: ['./todo-edit-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoEditViewComponent implements OnInit {
  formGroup: FormGroup;

  @Output() cancelItem: EventEmitter<void> = new EventEmitter();
  @Output() saveItem: EventEmitter<TodoEdit> = new EventEmitter();

  @Input() item: TodoItem = <TodoEdit>{
    description: "",
    title: "",
    isCompleted: false
  }

  constructor(private formBuilder: FormBuilder) {
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
    this.cancelItem.emit();
  }

  save() {
    if (this.formGroup.valid) {
      this.saveItem.emit(<TodoItem>{ ...this.formGroup.value, id: this.item.id });
    }
  }
}
