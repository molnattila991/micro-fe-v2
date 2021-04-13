import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoCreate } from '../../../models/todo-create.interface';

@Component({
  selector: 'lib-todo-create-view',
  templateUrl: './todo-create-view.component.html',
  styleUrls: ['./todo-create-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateViewComponent implements OnInit {
  formGroup: FormGroup;

  @Output() cancelItem: EventEmitter<void> = new EventEmitter();
  @Output() saveItem: EventEmitter<TodoCreate> = new EventEmitter();

  @Input() item: TodoCreate = <TodoCreate>{
    description: "",
    title: ""
  }

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      description: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
    this.formGroup.setValue(this.item, { emitEvent: false });
  }

  cancel() {
    this.cancelItem.emit();
  }

  save() {
    if (this.formGroup.valid) {
      this.saveItem.emit(this.formGroup.value);
    }
  }
}
