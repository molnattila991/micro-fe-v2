import { Component, Inject, OnInit } from '@angular/core';
import { INJECTION_TOKEN, ITodoActionService, ITodoDialogService, ITodoStateCommand, ITodoStateQuery, TodoItem, TodoModuleState } from "projects/core/src/public-api";

@Component({
  selector: 'lib-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  list$ = this.query.getList();

  constructor(
    @Inject(INJECTION_TOKEN.STATE.QUERY.TODO) private query: ITodoStateQuery,
    @Inject(INJECTION_TOKEN.STATE.COMMAND.TODO) private command: ITodoStateCommand,
    @Inject(INJECTION_TOKEN.BUSINESS_LOGIC.TODO.EDIT_DIALOG) private dialog: ITodoDialogService,
    @Inject(INJECTION_TOKEN.BUSINESS_LOGIC.TODO.ACTION.DELETE) private deleteAction: ITodoActionService<number>,
    @Inject(INJECTION_TOKEN.BUSINESS_LOGIC.TODO.ACTION.TOGGLE) private toggleAction: ITodoActionService<TodoItem>
  ) { }

  delete(id: number) {
    this.deleteAction.perform(id);
  }

  completedChanged(item: TodoItem): void {
    this.toggleAction.perform(item);
  }

  ngOnDestroy(): void {
    this.deleteAction.unsubscribe();
    this.toggleAction.unsubscribe();
    this.dialog.unsubscribe();
  }

  ngOnInit(): void {
    this.command.refresh();
    this.dialog.subscribe();
    this.toggleAction.subscribe();
    this.deleteAction.subscribe();
  }

  openDialog(item: TodoItem): void {
    this.dialog.open(item);
  }
}
