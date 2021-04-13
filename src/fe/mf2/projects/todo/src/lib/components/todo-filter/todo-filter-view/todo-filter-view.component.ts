import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoListFilter } from '../../../models/todo-list-filter.interface';

@Component({
  selector: 'lib-todo-filter-view',
  templateUrl: './todo-filter-view.component.html',
  styleUrls: ['./todo-filter-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFilterViewComponent implements OnInit {
  formGroup: FormGroup;
  @Output() filter: EventEmitter<string> = new EventEmitter();
  @Output() clear: EventEmitter<void> = new EventEmitter();

  @Input() item: TodoListFilter = { text: "" };
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      text: new FormControl()
    });
  }

  ngOnInit(): void {
    if (this.item) {
      this.formGroup.setValue(this.item, { emitEvent: false });
    }
  }

  filterSend() {
    this.filter.emit(this.formGroup.value["text"]);
  }

  clearSend() {
    this.formGroup.setValue({ text: "" }, { emitEvent: false });
    this.clear.emit();
  }
}
