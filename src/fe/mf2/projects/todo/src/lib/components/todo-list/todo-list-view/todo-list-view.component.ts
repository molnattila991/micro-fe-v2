import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from "projects/core/src/public-api";

@Component({
  selector: 'lib-todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListViewComponent {
  @Input() list: TodoItem[] | null = [];

  @Output() editPushed: EventEmitter<TodoItem> = new EventEmitter();
  @Output() deletePushed: EventEmitter<number> = new EventEmitter();
  @Output() completedChanged: EventEmitter<TodoItem> = new EventEmitter();
  @Output() openEditDialog: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }
}
